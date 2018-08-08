// merge-upd-selection -> Выбор файла -> JS



//print(vars['$L.file']['SerialNumber0']);
var data = new SCFile('INFIntegrationBuffer');
	var query = data.doSelect('id="'+vars['$L.file']['SerialNumber0']+'"')
		if(query == RC_SUCCESS){
			do{
				print(system.functions.contents(data));
				vars['$action'] = system.functions.insert(vars['$action'],0,1,'new');
				vars['$sccmName'] = system.functions.insert(vars['$sccmName'],0,1,data['sccm.name']);
				vars['$sccmVal'] = system.functions.insert(vars['$sccmVal'],0,1,data['sccm.value']);
				vars['$cmdbName'] = system.functions.insert(vars['$cmdbName'],0,1,data['cmdb.name']);
				vars['$cmdbVal'] = system.functions.insert(vars['$cmdbVal'],0,1,data['cmdb.value']);
				vars['$status'] = system.functions.insert(vars['$status'],0,1,data['status']);
			}while(data.getNext()==RC_SUCCESS)
		}


//Обновить все:
for(var item = 0; item < vars['$action'].length; item++){
	vars['$action'][item] = 'upd';
}

//Ингор все:
for(var item = 0; item < vars['$action'].length; item++){
	vars['$action'][item] = 'ignore';
}


function showAll(){
	var sccm = new SCFile('sccmHardware');
	var device = new SCFile('device');
	var data = [];
	var sQuery,dQuery,joinQuery;
	var cnt = 0;
	var sCR = "\n";
	var sHtmlReturn = getCSS();
	sQuery = sccm.doSelect('true');
	do{
		dQuery = device.doSelect('serial.no.="'+sccm['SerialNumber0']+'"');
		if(sccm['status']!='add' && sccm['wasUpdated']!=true && dQuery == RC_SUCCESS){
			data[cnt] = {ResourceID:sccm['ResourceID'],SerialNumber0:sccm['SerialNumber0'],Manufacturer00:sccm['Manufacturer00'],Model00:sccm['Model00'],Name00:sccm['Name00'],UserName00:sccm['UserName00'],ProcName00:sccm['ProcName00'],NumberOfCores00:sccm['NumberOfCores00'],NumberOfLogicalProcessors00:sccm['NumberOfLogicalProcessors00'],IPAddress00:sccm['IPAddress00'],MACAddress00:sccm['MACAddress00'],Size00:sccm['Size00']};
			cnt++;
		}
	}while(sccm.getNext() == RC_SUCCESS /*&& device.getNext() == RC_SUCCESS /*&& joinpc.getNext == RC_SUCCESS*/);
	//print(cnt);

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
			 sHtmlReturn += "<td class=\""+sRowClass+"\" > <a href=\"scactivelink://sccmHardware:"+data[i]['SerialNumber0']+"\"> Обновить / Игнорировать </a></td>";
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
