var upd = new SCFile('INFIntegrationBuffer');
var query;

	for(var propCount = 0; propCount<vars['$action'].length(); propCount++){
		if(vars['$action'][propCount]!= 'new'){
			upd.ci_name = vars['$name'][propCount];
			upd.cmdb_name = vars['$ofield'][propCount];
			upd.cmdb_value = system.functions.val(vars['$oval'][propCount],2);
			upd.sccm_name = vars['$ofield'][propCount];
			upd.sccm_value = system.functions.val(vars['$oval'][propCount],2);
			upd.id = vars['$name'][propCount];
			upd.status = vars['$action'][propCount];
			upd.whoUpdated = system.functions.operator();
			upd.dateUpdated =system.functions.tod();
				query = upd.doInsert();
		}
	}
