//'SerialNumber0','ResourceID',	'Manufacturer00',	'Model00',	'Name00', 	'UserName00',	'ProcName00',      	'NumberOfCores00', 	'NumberOfLogicalProcessors00',	'IPAddress00',	'MACAddress00',	'Size00'
//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'
function upd(id) {
	var sccm = new SCFile('sccmHardware');
	var device = new SCFile('device');
	var joinpc = new SCFile('joinpc');
	var buffer = new SCFile('INFIntegrationBuffer');
	var sQuery,dQuery,joinQuery,bfQuery;
		sQuery = sccm.doSelect('SerialNumber0="'+id+'"');
		dQuery = device.doSelect('serial.no.="'+id+'"');
		joinQuery = joinpc.doSelect('logical.name="'+device['logical.name']+'"');
		try{
			buffer.id =id;
			buffer.sccm_name = 'SerialNumber0';						//serial
			buffer.sccm_value = sccm['SerialNumber0'];
			//print(sccm['SerialNumber0']
			buffer.cmdb_name = 'serial.no.';
			buffer.cmdb_value = device['serial.no.'];
			//print(device['serial.no.']);
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'Manufacturer00';						//vendor
			buffer.sccm_value = sccm['Manufacturer00'];
			buffer.cmdb_name = 'vendor';
			buffer.cmdb_value = device['vendor'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'Model00';								//model
			buffer.sccm_value = sccm['Model00'];
			buffer.cmdb_name = 'model';
			buffer.cmdb_value = device['model'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'Name00';								//name
			buffer.sccm_value = sccm['Name00'];
			buffer.cmdb_name = 'ci.name';
			buffer.cmdb_value = device['logical.name'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'UserName00';							//user
			buffer.sccm_value = sccm['UserName00'];
			buffer.cmdb_name = 'users';
			buffer.cmdb_value = device['users'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'ProcName00';							//procname
			buffer.sccm_value = sccm['ProcName00'];
			buffer.cmdb_name = 'processors.model';
			buffer.cmdb_value = joinpc['processors.model'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'NumberOfCores00';						//cores
			buffer.sccm_value = sccm['NumberOfCores00'];
			buffer.cmdb_name = 'processors.cores';
			buffer.cmdb_value = joinpc['processors.cores'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'NumberOfLogicalProcessors00';				//procs
			buffer.sccm_value = sccm['NumberOfLogicalProcessors00'];
			buffer.cmdb_name = 'processors.proc';
			buffer.cmdb_value = joinpc['processors.proc'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'IPAddress00';							//ip
			buffer.sccm_value = sccm['IPAddress00'];
			buffer.cmdb_name = 'ip.address';
			buffer.cmdb_value = device['ip.address'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'MACAddress00';							//mac
			buffer.sccm_value = sccm['MACAddress00'];
			buffer.cmdb_name = 'mac.address';
			buffer.cmdb_value = device['mac.address'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
				print(system.functuions.contents(buffer));
			bufferQuery = buffer.doInsert();
			buffer.id =id;
			buffer.sccm_name = 'Size00';								//size
			buffer.sccm_value = sccm['Size00'];
			buffer.cmdb_name = 'hdd.capacity';
			buffer.cmdb_value = joinpc['hdd.capacity'];
			buffer.dateUpdated = system.functions.tod();
			buffer.whoUpdated = system.functions.operator();
			bufferQuery = buffer.doInsert();
			print('ok');
			lib.DDCCallRAD.wizard_run('merge-upd-selection',null);
		}
		catch(e){
			print(e.Message)
		}
}



function showAll(){
	var sccm = new SCFile('sccmHardware');
	var data = [];
	var sQuery,dQuery,joinQuery;
	var cnt = 0;
	var sCR = "\n";
	var sHtmlReturn = getCSS();
	sQuery = sccm.doSelect('true');
	do{
		if(sccm['status']!='add' && sccm['wasUpdated']!=true){
			data[cnt] = {ResourceID:sccm['ResourceID'],SerialNumber0:sccm['SerialNumber0'],Manufacturer00:sccm['Manufacturer00'],Model00:sccm['Model00'],Name00:sccm['Name00'],UserName00:sccm['UserName00'],ProcName00:sccm['ProcName00'],NumberOfCores00:sccm['NumberOfCores00'],NumberOfLogicalProcessors00:sccm['NumberOfLogicalProcessors00'],IPAddress00:sccm['IPAddress00'],MACAddress00:sccm['MACAddress00'],Size00:sccm['Size00']};
			cnt++;
		}
	}while(sccm.getNext() == RC_SUCCESS /*&& device.getNext() == RC_SUCCESS /*&& joinpc.getNext == RC_SUCCESS*/);
	print(cnt);

	sHtmlReturn += "<table class=\"main\">" + sCR;
	sHtmlReturn += "<tr><th><div tabindex=\"0\"> Test </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> ResourceID </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Серийный номер </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Производетель </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Модель </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Имя </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Пользователь </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Процессор </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Количество ядер </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Количество процессовор </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> IP </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> MAC </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Обьем жестких дисков </div></th>";
	for (var i =0; i<data.length; i++) {
		var sRowClass = i%2==0 ? "evenRow" : "oddRow";
			sHtmlReturn += "<tr>";
			 sHtmlReturn += "<td class=\""+sRowClass+"\" > <a href=\"scactivelink://sccmHardware:\> Обновить / </a> <a href=\"scactivelink://sccmHardware:\> Игнорировать / </a></td>";
			if(data[i]['ResourceID']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['ResourceID']+"</td>";		//ResourceID
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['SerialNumber0']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['SerialNumber0']+"</td>";	//SerialNumber0
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['Manufacturer00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['Manufacturer00']+"</td>";	//Manufacturer00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['Model00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['Model00']+"</td>";		//Model00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['Name00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['Name00']+"</td>";			//Name00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['UserName00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['UserName00'].replace('ERG\\','')+"</td>";		//UserName00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['ProcName00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['ProcName00']+"</td>";		//ProcName00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['NumberOfCores00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['NumberOfCores00']+"</td>";	//NumberOfCores00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['NumberOfLogicalProcessors00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['NumberOfLogicalProcessors00']+"</td>";	//NumberOfLogicalProcessors00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['IPAddress00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['IPAddress00']+"</td>";		//IPAddress00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['MACAddress00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['MACAddress00']+"</td>";		//MACAddress00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['Size00']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['Size00']+"</td>";		//Size00
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			sHtmlReturn += "<tr>";
	}
	sHtmlReturn += "</table>" + sCR;
	return sHtmlReturn;
}






// TODO: Замутить нормальное добавление

// TODO: 1 кнопка игнорить все 2 кнопка сохранить все в визарде обновления done
// TODO: показывать игнорированые вверху done
