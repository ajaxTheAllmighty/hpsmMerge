var upd = new SCFile('infFilialsNew');

	for(var recordCount = 0; recordCount < vars['$action'].length; recordCount+=7){
	print('start update');
		upd.name = vars['$nval'][recordCount];
		upd.dateCreated = vars['$nval'][recordCount+1];
		upd.dateUpdated = vars['$nval'][recordCount+2];
		upd.isActive = vars['$nval'][recordCount+3];
		upd.id = vars['$nval'][recordCount+4];
		upd.contact = vars['$nval'][recordCount+5];
		//upd.id = vars['$nval'][recordCount+1];
		upd.current.phase = vars['$nval'][recordCount+6];
		print(upd);
		var rc = upd.doInsert();
		if ( rc == RC_SUCCESS ){
			print('ok');
		}
		//
	}
