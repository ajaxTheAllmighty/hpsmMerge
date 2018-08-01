// merge-upd-selection -> Действия -> JS
var _lng = system.functions.lng;
var _ins = system.functions.insert;
var _op = system.functions.operator;
var _date = system.functions.tod;
var _val = system.functions.val;




var upd = new SCFile('INFIntegrationBuffer');
var query;
var device = new SCFile('device');
var joinpc = new SCFile('joinpc');
var deviceQuery,joinQuery;
	for(var propCount = 0; propCount<_lng(vars['$action']); propCount++){
		if(vars['$action'][propCount]!= 'new'){
			//upd.ci_name = vars['$name'][propCount];
			upd.cmdb_name = vars['$cmdbName'][propCount];
			upd.cmdb_value = _val(vars['$cmdbVal'][propCount],2);
			upd.sccm_name = vars['$sccmName'][propCount];
			upd.sccm_value = _val(vars['$sccmVal'][propCount],2);
			//upd.id = vars['$name'][propCount];
			upd.status = vars['$action'][propCount];
			upd.whoUpdated = _op;
			upd.dateUpdated =_date;
				query = upd.doUpdate();
		}

		print(vars['$cmdbName'][propCount]);
	}

	// merge-upd-selection -> Действия -> JS
	var _lng = system.functions.lng;
	var _ins = system.functions.insert;
	var _op = system.functions.operator;
	var _date = system.functions.tod;
	var _val = system.functions.val;




	var upd = new SCFile('INFIntegrationBuffer');
	var query;
	var device = new SCFile('device');
	var joinpc = new SCFile('joinpc');
	var deviceQuery,joinQuery;
		for(var propCount = 0; propCount<_lng(vars['$action']); propCount++){
			if(vars['$action'][propCount]!= 'new'){
				//upd.ci_name = vars['$name'][propCount];
				upd.cmdb_name = vars['$cmdbName'][propCount];
				upd.cmdb_value = _val(vars['$cmdbVal'][propCount],2);
				upd.sccm_name = vars['$sccmName'][propCount];
				upd.sccm_value = _val(vars['$sccmVal'][propCount],2);
				//upd.id = vars['$name'][propCount];
				upd.status = vars['$action'][propCount];
				upd.whoUpdated = _op;
				upd.dateUpdated =_date;
					query = upd.doUpdate();
			}
			if (vars['$action'][propCount]== 'upd'){
				deviceQuery = device.doSelect(''+vars['$cmdbName'][propCount]+'="'+vars['$sccmVal'][propCount]+'"');
				joinQuery = joinpc.doSelect('logical.name="'+device['logical.name']+'"');
				if(!(vars['$cmdbName'][propCount]=='processors.cores')&&(vars['$cmdbName'][propCount]=='processors.proc')&&(vars['$cmdbName'][propCount]=='processors.model')&&(vars['$cmdbName'][propCount]=='hdd.capacity')){		//Эти поля из joinpc
					device[vars['$cmdbName'][propCount]] = vars['$sccmVal'][propCount];
				}
				else{
					if(vars['$cmdbName']=='hdd.capacity'){
						joinpc[vars['$cmdbName'][propCount]] = vars['$sccmVal'][propCount];
					}
					else{
						joinpc[vars['$cmdbName'][propCount]] = _ins(joinpc[vars['$cmdbName'][propCount]],0,1,vars['$sccmVal'][propCount]);
					}
				}
				device.doUpdate();
				joinpc.doUpdate();
				break;
			}
			print(vars['$cmdbName'][propCount]);
		}
