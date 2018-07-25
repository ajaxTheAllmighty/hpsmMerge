var data = new SCFile('INFIntegrationBuffer');
	var query = data.doSelect('id="'+vars['$L.file']['SerialNumber0']+'"')
		if(query == RC_SUCCESS){
			do{
				vars['$action'] = system.functions.insert(vars['$status'],0,1,data['action']);
				vars['$sccmName'] = system.functions.insert(vars['$ofield'],0,1,data['sccm.name']);
				vars['$sccmVal'] = system.functions.insert(vars['$oval'],0,1,data['sccm.value']);
				vars['$cmdbName'] = system.functions.insert(vars['$oval'],0,1,data['cmdb.name']);
				vars['$cmdbVal'] = system.functions.insert(vars['$nval'],0,1,data['cmdb.value']);
				vars['$status'] = system.functions.insert(vars['$name'],0,1,data['status']);
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
