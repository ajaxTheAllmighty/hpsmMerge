function displayResults(){
	var _lng = system.functions.lng;
	var _ins = system.functions.insert;
	var _op = system.functions.operator;
	var _date = system.functions.tod;
	var _val = system.functions.val;
	var USR, PRCMOD, PRC, PRCCORE;
	var sCR = "\n";
	var sHtmlReturn = getCSS();
	var data = [];
	var sccm = new SCFile('sccmHardware');
	var query = sccm.doSelect('dateUpdated<="'+system.functions.tod()+'"');
	var file = new SCFile('device');
	var jpc = new SCFile('joinpc');
	var deviceQuery, joinQuery;
	var cnt = 0;
		if(query == RC_SUCCESS){
			do{
				deviceQuery = file.doSelect('serial.no.="'+sccm['SerialNumber0']+'"');
				joinQuery = jpc.doSelect('logical.name="'+file['logical.name']+'"');
				data[cnt] = {serial:file['serial.no.'],vendor:file['vendor'],model:file['model'],ciname:file['ci.name'],users:file['users'],procmod:jpc['processors.model'],proccore:jpc['processors.cores'],proc:jpc['processors.proc'],ip:file['ip.address'],mac:file['mac.address'],hdd:jpc['hdd.capacity']};
				cnt++;
			}while(file.getNext() == RC_SUCCESS)
		}
	//print(data);
	//var active;
	sHtmlReturn += "<table class=\"main\">" + sCR;
	// .sHtmlReturn += "<tr><th><div tabindex=\"0\"> Test </div></th>"
	//sHtmlReturn += "<th><div tabindex=\"0\"> ResourceID </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Серийный номер </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Производетель </div></th>"
	sHtmlReturn += "<th><div tabindex=\"0\"> Модель </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Имя </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Пользователь </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Процессор </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Количество ядер </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Количество процессоров </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> IP </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> MAC </div></th>";
	sHtmlReturn += "<th><div tabindex=\"0\"> Обьем жестких дисков </div></th>";
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
				// for(var usr =0; usr < _lng(data[i]['users']); i ++){
				// 	USR+=(" "+data[i]['users'][usr]);
				// }
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['users'][0].replace('ERG\\','')+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['procmod']!=null){
				// for(var prcmod = 0; prcmod< _lng(data[i]['procmod']); prcmod++){
				// 	PRCMOD+=(" "+data[i]['procmod'][prcmod])
				// }
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['procmod'][0]+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['proccore']!=null){
				// for(var prccore = 0; prccore<_lng(data[i]['proccore']);prccore++){
				// 	PRCCORE+=(" "+data[i]['proccore'][prccore])
				// }
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['proccore'][0]+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['proc']!=null){
				// for(var prc = 0; prc< _lng(data[i]['proc']); prc++){
				// 	PRC +=(" "+data[i]['proc'][prc]);
				// }
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['proc'][0]+"</td>";
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
