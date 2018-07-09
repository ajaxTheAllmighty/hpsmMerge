var upd = new SCFile('INFIntegrationBuffer');
var query;

	for(var propCount = 0; propCount<vars['$action'].length(); propCount++){
		if(propCount%7 == 0){
			upd.ci_name = vars['$oval'][propCount];
		}
		upd.cmdb_name = vars['$ofield'][propCount];
		upd.cmdb_value = system.functions.val(vars['$oval'][propCount],2);
		upd.sccm_name = vars['$ofield'][propCount];
		upd.sccm_value = system.functions.val(vars['$oval'][propCount],2);
		//upd.id = propCount;
		upd.status = vars['$action'][propCount];
		upd.whoUpdated = system.functions.operator();
		var date = new SCDatum(system.functions.tod());
		upd.dateUpdated = date.JSDate();
			query = upd.doInsert();
	}
