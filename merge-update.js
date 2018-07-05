var updateNew = new SCFile('infFilialsNew');
	print('updating new items...')
	print(vars['$nval']);
	for(var recordCount = 0; recordCount < vars['$action'].length(); recordCount++){
	var rc = updateNew.doSelect('name="'+vars['$nval'][recordCount]+'"');
		if(rc == RC_SUCCESS){
			if(vars['$action'][recordCount]=='Обновить'){
				updateNew['name'] = vars['$nval'][recordCount];
					print(vars['$nval'][recordCount]);
				updateNew['dateCreated'] = vars['$nval'][recordCount+1];
					print(vars['$nval'][recordCount+1]);
				updateNew['dateupdateNewated'] = vars['$nval'][recordCount+2];
					print(vars['$nval'][recordCount+2]);
				updateNew['isActive'] = vars['$nval'][recordCount+3];
					print(vars['$nval'][recordCount+3]);
				updateNew['id'] = vars['$nval'][recordCount+4];
					print(vars['$nval'][recordCount+4]);
				updateNew['contact'] = vars['$nval'][recordCount+5];
					print(vars['$nval'][recordCount+5]);
				updateNew['current.phase'] = vars['$nval'][recordCount+6];
					print(vars['$nval'][recordCount+6]);
				print(updateNew['name']);
				print(updateNew['dateCreated']);
				print(updateNew['dateupdateNewated']);
				print(updateNew['isActive']);
				print(updateNew['id']);
				print(updateNew['contact']);
				print(updateNew['current.phase']);
				print(recordCount);
				var rcc = updateNew.doUpdate();
				if(rcc == RC_SUCCESS){
					print ('new ok');
			}
		}
		}
	}
	print('done');

	var upd  = new SCFile('infFilials');
	print('updating old items');
	for(var fieldCount = 0; fieldCount < vars['$action'].length(); fieldCount+=7){
		var rc = upd.doSelect('status~="Не обработано"');
		if(rc == RC_SUCCESS){
			upd['status'] = vars['$action'][fieldCount];
			print(upd['status']);
			var rcc = upd.doUpdate();
			if(rcc == RC_SUCCESS){
				print('old ok');
			}
		}
	}
	print('done');
