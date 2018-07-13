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
			if(deviceQuery == RC_SUCCESS){
				joinQuery == joinpc.doSelect('serial.no. = "'+sccm['SerialNumber0']+'"');
				if(joinQuery == RC_SUCCESS){
					do{
						print('add to buffer')
						do{
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'SerialNumber0';						//serial
							buffer.sccm_value = sccmQuery['SerialNumber0'];
							buffer.cmdb_name = 'serial.no.';
							buffer.cmdb_value = deviceQuery['serial.no.'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'Manufacturer00';						//vendor
							buffer.sccm_value = sccmQuery['Manufacturer00'];
							buffer.cmdb_name = 'vendor';
							buffer.cmdb_value = deviceQuery['vendor'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'Model00';								//model
							buffer.sccm_value = sccmQuery['Model00'];
							buffer.cmdb_name = 'model';
							buffer.cmdb_value = deviceQuery['model'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'Name00';								//name
							buffer.sccm_value = sccmQuery['Name00'];
							buffer.cmdb_name = 'ci.name';
							buffer.cmdb_value = deviceQuery['ci.name'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'UserName00';							//user
							buffer.sccm_value = sccmQuery['UserName00'];
							buffer.cmdb_name = 'users';
							buffer.cmdb_value = deviceQuery['users'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'ProcName00';							//procname
							buffer.sccm_value = sccmQuery['ProcName00'];
							buffer.cmdb_name = 'processors.model';
							buffer.cmdb_value = joinQuery['processors.model'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'NumberOfCores00';						//cores
							buffer.sccm_value = sccmQuery['NumberOfCores00'];
							buffer.cmdb_name = 'processors.cores';
							buffer.cmdb_value = joinQuery['processors.cores'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'NumberOfLogicalProcessors00';				//procs
							buffer.sccm_value = sccmQuery['NumberOfLogicalProcessors00'];
							buffer.cmdb_name = 'processors.proc';
							buffer.cmdb_value = joinQuery['processors.proc'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'IPAddress00';							//ip
							buffer.sccm_value = sccmQuery['IPAddress00'];
							buffer.cmdb_name = 'ip.address';
							buffer.cmdb_value = deviceQuery['ip.address'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'MACAddress00';							//mac
							buffer.sccm_value = sccmQuery['MACAddress00'];
							buffer.cmdb_name = 'mac.address';
							buffer.cmdb_value = deviceQuery['mac.address'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
							buffer.id = deviceQuery['logical.name'];
							buffer.sccm_name = 'Size00';								//size
							buffer.sccm_value = sccmQuery['Size00'];
							buffer.cmdb_name = 'hdd.capacity';
							buffer.cmdb_value = joinQuery['hdd.capacity'];
							buffer.status = 'new';
							bufferQuery = buffer.doInsert();
						}while(deviceQuery.getNext==RC_SUCCESS)
					}while(joinQuery.getNext == RC_SUCCESS)
				}
			}
		}while(sccmQuery.getNext==RC_SUCCESS)
	}
}
// TODO: Замутить нормальное добавление

// TODO: 1 кнопка игнорить все 2 кнопка сохранить все в визарде обновления done
// TODO: показывать игнорированые вверху done
