//'SerialNumber0','ResourceID',	'Manufacturer00',	'Model00',	'Name00', 	'UserName00',	'ProcName00',      	'NumberOfCores00', 	'NumberOfLogicalProcessors00',	'IPAddress00',	'MACAddress00',	'Size00'
//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'
var sccm = new SCFile('sccmHardware');
//var device = new SCFile('device');
var device = new SCFile('device');
var joinpc = new SCFile('joinpc');
var buffer = new SCFile('INFIntegrationBuffer');
var deviceQuery,joinQuery;
var bufferQuery;
var sccmQuery = sccm.doSelect('wasUpdated~="true"');
	if(sccmQuery == RC_SUCCESS){
		print('sccm ok');
		do{
			//deviceQuery = device.doSelect('true');
			deviceQuery = device.doSelect('serial.no. = "'+sccm['SerialNumber0']+'"');
			//if(deviceQuery == RC_SUCCESS){
				joinQuery == joinpc.doSelect('logical.name = "'+device['logical.name']+'"');
				//if(joinQuery == RC_SUCCESS){
					do{
						do{
							print('add to buffer')
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'SerialNumber0';						//serial
							buffer.sccm_value = sccm['SerialNumber0'];
							//print(sccm['SerialNumber0']);
							buffer.cmdb_name = 'serial.no.';
							buffer.cmdb_value = device['serial.no.'];
							//print(device['serial.no.']);
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'Manufacturer00';						//vendor
							buffer.sccm_value = sccm['Manufacturer00'];
							buffer.cmdb_name = 'vendor';
							buffer.cmdb_value = device['vendor'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'Model00';								//model
							buffer.sccm_value = sccm['Model00'];
							buffer.cmdb_name = 'model';
							buffer.cmdb_value = device['model'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'Name00';								//name
							buffer.sccm_value = sccm['Name00'];
							buffer.cmdb_name = 'ci.name';
							buffer.cmdb_value = device['ci.name'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'UserName00';							//user
							buffer.sccm_value = sccm['UserName00'];
							buffer.cmdb_name = 'users';
							buffer.cmdb_value = device['users'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'ProcName00';							//procname
							buffer.sccm_value = sccm['ProcName00'];
							buffer.cmdb_name = 'processors.model';
							buffer.cmdb_value = joinpc['processors.model'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'NumberOfCores00';						//cores
							buffer.sccm_value = sccm['NumberOfCores00'];
							buffer.cmdb_name = 'processors.cores';
							buffer.cmdb_value = joinpc['processors.cores'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'NumberOfLogicalProcessors00';				//procs
							buffer.sccm_value = sccm['NumberOfLogicalProcessors00'];
							buffer.cmdb_name = 'processors.proc';
							buffer.cmdb_value = joinpc['processors.proc'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'IPAddress00';							//ip
							buffer.sccm_value = sccm['IPAddress00'];
							buffer.cmdb_name = 'ip.address';
							buffer.cmdb_value = device['ip.address'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'MACAddress00';							//mac
							buffer.sccm_value = sccm['MACAddress00'];
							buffer.cmdb_name = 'mac.address';
							buffer.cmdb_value = device['mac.address'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = device['logical.name'];
							buffer.sccm_name = 'Size00';								//size
							buffer.sccm_value = sccm['Size00'];
							buffer.cmdb_name = 'hdd.capacity';
							buffer.cmdb_value = joinpc['hdd.capacity'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							print('ok');
						}while(device.getNext()==RC_SUCCESS)
					}while(joinpc.getNext() == RC_SUCCESS)
				//}
			//}
		}while(sccm.getNext()==RC_SUCCESS)
	}
}
// TODO: Замутить нормальное добавление

// TODO: 1 кнопка игнорить все 2 кнопка сохранить все в визарде обновления done
// TODO: показывать игнорированые вверху done
