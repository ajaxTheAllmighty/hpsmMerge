var upd = new SCFile('INFIntegrationBuffer');
var query;
var device = new SCFile('device');
var deviceQuery;

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
		if (vars['$action'][propCount]== 'upd'){
			deviceQuery = device.doSelect(''+vars['$cmdbName'][propCount]+'='+vars['$sccmVal'][propCount]+'');
			device[vars['$cmdbName']] = vars['$sccmVal'];
			device.doUpdate();
		}
	}
