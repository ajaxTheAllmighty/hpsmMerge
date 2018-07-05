var updateNewateNew = new SCFile('infFilialsNew');

	for(var recordCount = 0; recordCount < vars['$action'].length; recordCount+=7){
	print('start updateNewate');
		updateNew.name = vars['$nval'][recordCount];
		updateNew.dateCreated = vars['$nval'][recordCount+1];
		updateNew.dateupdateNewated = vars['$nval'][recordCount+2];
		updateNew.isActive = vars['$nval'][recordCount+3];
		updateNew.id = vars['$nval'][recordCount+4];
		updateNew.contact = vars['$nval'][recordCount+5];
		//updateNew.id = vars['$nval'][recordCount+1];
		updateNew.current.phase = vars['$nval'][recordCount+6];
		print(updateNew);
		updateNew.doInsert();
	}
	
	var upd  = new SCFile('infFilials');
	var sel = new SCFile('infFilials');
	var query;
	for(var fieldCount = 0; fieldCount <  fields['oldFields'].length; fieldCount+=7){
		query = sel.doSelect('name='+vars['$oval'][fieldCount]);
		if(query = RC_SUCCESS){
			upd.name = vars['$oval'][fieldCount];
			upd.dateCreated = vars['$oval'][fieldCount+1];
			upd.dateUpdated = vars['$oval'][fieldCount+2];
			upd.isActive = vars['$oval'][fieldCount+3];
			upd.id = vars['$oval'][fieldCount+4];
			upd.contact = vars['$oval'][fieldCount+5];
			upd.current.phase = vars['$oval'][fieldCount+6];
			upd.status = vars['$action'];
			upd.doUpdate();
		}
	}
