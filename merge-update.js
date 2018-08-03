// TODO: Замутить проверку на наличие данных в device при выборке в буферную таблицу

function doUPD(cmdbName,cmdbVal,sccmName,sccmVal,action){
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
		for(var propCount = 0; propCount<_lng(action); propCount++){
			if(action[propCount]!= 'new'){
				upd.cmdb_name = cmdbName[propCount];
				upd.cmdb_value = _val(cmdbVal[propCount],2);
				upd.sccm_name = sccmName[propCount];
				upd.sccm_value = _val(sccmVal[propCount],2);
				upd.status = action[propCount];
				upd.whoUpdated = _op();
				upd.dateUpdated =_date();
					query = upd.doUpdate();
			}
			print('buffer done');
			if (action[propCount]== 'upd'){
				deviceQuery = device.doSelect('serial.no.="'+sccmVal[0]+'"');
				print('device select');
				joinQuery = joinpc.doSelect('logical.name="'+device['logical.name']+'"');
				print('joinpc select');
				if((cmdbName[propCount]!='processors.cores')&&(cmdbName[propCount]!='processors.proc')&&(cmdbName[propCount]!='processors.model')&&(cmdbName[propCount]!='hdd.capacity')){		//Эти поля из joinpc
					if(cmdbName[propCount]!='users'){
						print(device[cmdbName[propCount]]+' '+typeof(device[cmdbName[propCount]]));
						device[cmdbName[propCount]] = sccmVal[propCount];
						print('device val add '+sccmVal[propCount] +' '+typeof(sccmVal[propCount]));
					}
					else{
						device[cmdbName[propCount]] = _ins(device[cmdbName[propCount]],0,1,sccmVal[propCount]);
					}

				}
				else{
					if(cmdbName=='hdd.capacity'){
						joinpc[cmdbName[propCount]] = sccmVal[propCount];
						print('joinpc hdd '+sccmVal[propCount])
					}
					else{
						joinpc[cmdbName[propCount]] = _ins(joinpc[cmdbName[propCount]],0,1,sccmVal[propCount]);
						print('joinpc proc '+sccmVal[propCount])
					}
				}
				device.doUpdate();
				print('device upd');
				joinpc.doUpdate();
				print('joinpc upd');
			}
			print(propCount);
		}
}
