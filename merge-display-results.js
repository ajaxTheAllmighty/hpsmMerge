//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'
function displayResults(){
	var sCR = "\n";
	var sHtmlReturn = getCSS();
	var data = [];
	var sccm = new SCFile('sccmHardware');
	var query = sccm.doSelect('dateUpdated<="'+system.function.tod()+'"');
	var file = new SCFile('device');
	var deviceQuery;
	var cnt = 0;
		if(query == RC_SUCCESS){
			deviceQuery = device.doSelect('serial.no.="'+sccm['SerialNumber0']+'"');
			do{
				data[cnt] = {serial:file['serial.no.'],vendor:file['vendor'],model:file['model'],ciname:file['ci.name'],users:file['users'],procmod:file['processors.model'],proccore:file['processors.cores'],proc:file['processors.proc'],ip:file['ip.address'],mac:file['mac.address'],hdd:file['hdd.capacity']};
				cnt++;
			}while(file.getNext() == RC_SUCCESS)
		}
	//print(data);
	//var active;
		sHtmlReturn += "<table class=\"main\">" + sCR;
		// Table header
		sHtmlReturn += "<tr><th><div tabindex=\"0\"> Серийный номер </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Производетель </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Модель </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Имя </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Пользователь </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Модель процессора </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Количество ядер </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Количество процессоров </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> IP адрес</div></th></tr>";
		sHtmlReturn += "<th><div tabindex=\"0\"> MAC адрес</div></th></tr>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Обьем дисков </div></th></tr>";


		//'serial.no.',   				'vendor',    	  	'model',  	'ci.name',	'users',     	'processors.model',	'processors.cores',	'processors.proc',            	'ip.address', 	'mac.address', 	'hdd.capacity'

	for (var i =0; i<data.length; i++) {
	//print(data[i]);
		var sRowClass = i%2==0 ? "evenRow" : "oddRow";
			sHtmlReturn += "<tr>";
			if(data[i]['serial']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['serial']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['vendor']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['vendor']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['model']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['model']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['ciname']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['ciname']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['users']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['users']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['procmod']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['procmod']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['proccore']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['proccore']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['proc']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['proc']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['ip']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['ip']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['mac']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['mac']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['hdd']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['hdd']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			//sHtmlReturn += "<td class=\""+sRowClass+"\" >"+fnull(attrib[j+5])+"</td>";
			sHtmlReturn += "<tr>";
	}
			sHtmlReturn += "</table>" + sCR;
return sHtmlReturn;

}
