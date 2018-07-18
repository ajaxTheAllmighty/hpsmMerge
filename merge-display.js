var data = new SCFile('INFIntegrationBuffer');
	var query = data.doSelect('status~="update"')
		if(query == RC_SUCCESS){
			do{
				vars['$action'] = system.functions.insert(vars['$action'],0,1,data['status']);		//в конец
				vars['status'] = system.functions.insert(vars['$status'],0,1,"Не обработано");
				vars['$ofield'] = system.functions.insert(vars['$ofield'],0,1,data['cmdb.name']);
				vars['$oval'] = system.functions.insert(vars['$oval'],0,1,data['cmdb.value']);
				vars['$nfield'] = system.functions.insert(vars['$oval'],0,1,data['sccm.name']);
				vars['$nval'] = system.functions.insert(vars['$nval'],0,1,data['sccm.value']);
				vars['$name'] = system.functions.insert(vars['$name'],0,1,data['id']);
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
