function buildHTML(){
	var sCR = "\n";
	var sHtmlReturn = getCSS();
	var data = [];
	var file = new SCFile('INFIntegrationBuffer');
	var query = file.doSelect('true');
	var cnt = 0;
		if(query == RC_SUCCESS){
			do{
				data[cnt] = {'ci.name':file['ci.name'],'cmdb.name':file['cmdb.name'],'cmdb.value':file['cmdb.value'],'sccm.name':file['sccm.name'],'sccm.value':file['sccm.value'],'whoUpdated':file['whoUpdated'],'dateUpdated':file['dateUpdated'],'status':file['status']};
				cnt++;
			}while(file.getNext() == RC_SUCCESS)
		}
	//print(data);
	//var active;
		sHtmlReturn += "<table class=\"main\">" + sCR;
		// Table header
		sHtmlReturn += "<tr><th><div tabindex=\"0\"> Название </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Имя CMDB </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Значение CMDB </div></th>"
		sHtmlReturn += "<th><div tabindex=\"0\"> Имя SCCM </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Значение SCCM </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Кем обновлено </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Когда обновлено </div></th>";
		sHtmlReturn += "<th><div tabindex=\"0\"> Статус </div></th>";
		//sHtmlReturn += "<th><div tabindex=\"0\"> Операторы</div></th></tr>";

	for (var i =0; i<data.length; i++) {
	//print(data[i]);
		var sRowClass = i%2==0 ? "evenRow" : "oddRow";
			sHtmlReturn += "<tr>";
			if(data[i]['ci.name']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['ci.name']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['cmdb.name']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['cmdb.name']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['cmdb.value']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['cmdb.value']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['sccm.name']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['sccm.name']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['sccm.value']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['sccm.value']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['whoUpdated']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['whoUpdated']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['dateUpdated']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['dateUpdated']+"</td>";
			}
			else{
				sHtmlReturn += "<td class=\""+sRowClass+"\" > </td>";
			}
			if(data[i]['status']!=null){
				sHtmlReturn += "<td class=\""+sRowClass+"\" >"+data[i]['status']+"</td>";
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

function getCSS(){
	var style;
	style =		"<style> ";
	style +=	"body{border:0 0 0 0;margin:0;padding:0;font-family: Verdana, Arial, Helvetica, sans-serif;}";
	style +=	".error{color: #454323;background: white;}";
	style +=	".error td{padding:1 2 1 1;color: red;line-height: 12;}";
	style +=	".main{width:100%;font-size: 10;text-align: left}";
	style +=	".main th{font-weight: bold;padding:4;background: #E0E0E0;}";
	style +=	"th.rowtitle{font-weight: bold;padding:4;background: #99BBE8;}";
	style +=	".oddRow{background: #edf3fe;color: black}";
	style +=	".evenRow{background: white;color: black}";
	style +=	".message{background: white;color: blue}";
	style +=	"</style>"

	return style;

}
