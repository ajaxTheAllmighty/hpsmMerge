var fields = {
	oldFields:['name','dateCreated','dateUpdated','isActive','id','contact','current.phase'],
	newFields:['name','dateCreated','dateUpdated','isActive','id','contact','current.phase']
};
var oldFile = new SCFile('infFilials');
var newFile = new SCFile('infFilialsNew');
var oldrecs,newrecs;

oldrecs = oldFile.doSelect('true');
	if(oldrecs == RC_SUCCESS){
		//print('old ok');
		do{
			newrecs = newFile.doSelect('name="'+oldFile['name']+'"');
			if(newrecs == RC_SUCCESS){
				//print('new ok');
				for(var fieldCount = 0; fieldCount < fields['oldFields'].length; fieldCount++){
					//if(!(oldFile[fields['oldFields'][fieldCount]] == newFile[fields['newFields'][fieldCount]])){
						vars['$action'] = system.functions.insert(vars['$action'],0,1,'new');
						//print(vars['$active']);
						//
						if(!(oldFile[fields['oldFields'][fieldCount]] == null)){
							vars['$oval'] = system.functions.insert(vars['$oval'],0,1,oldFile[fields['oldFields'][fieldCount]]);
						}
						else if(oldFile[fields['oldFields'][fieldCount]] == true){
							print('active');
							vars['$oval'] = system.functions.insert(vars['$oval'],0,1,'ДА');
							vars['$ofield'] =  system.functions.insert(vars['$field'],0,1,fields['oldFields'][fieldCount]);
						}
						else if(oldFile[fields['oldFields'][fieldCount]] == false){
							print('ne active');
							vars['$oval'] = system.functions.insert(vars['$oval'],0,1,'НЕТ');
							vars['$ofield'] =  system.functions.insert(vars['$field'],0,1,fields['oldFields'][fieldCount]);
						}
						else{
							vars['$oval'] = system.functions.insert(vars['$oval'],0,1,' ')
						}
						vars['$ofield'] =  system.functions.insert(vars['$ofield'],0,1,fields['oldFields'][fieldCount]);
						vars['$nfield'] =  system.functions.insert(vars['$nfield'],0,1,fields['newFields'][fieldCount]);
						if(!(newFile[fields['newFields'][fieldCount]] == null)){
							vars['$nval'] = system.functions.insert(vars['$nval'],0,1,newFile[fields['newFields'][fieldCount]]);
						}
						else if(newFile[fields['oldFields'][fieldCount]] == true){
							print('active');
							vars['$nval'] = system.functions.insert(vars['$nval'],0,1,'ДА');
							vars['$nfield'] =  system.functions.insert(vars['$nfield'],0,1,fields['newFields'][fieldCount]);
						}
						else if(newFile[fields['oldFields'][fieldCount]] == false){
							print('ne active');
							vars['$nval'] = system.functions.insert(vars['$nval'],0,1,'НЕТ');
						}
						else{
							vars['$nval'] = system.functions.insert(vars['$nval'],0,1,' ')
						}
						// print(vars['$ofield']);
						// print(vars['$nfield']);
						// print(vars['$action']);
					}
				//}
			}
		}while(oldFile.getNext() == RC_SUCCESS)
	}
	//print(vars['$action'].length())

	for(var i =0; i < vars['$action'].length(); i ++){
		print(vars['$ofield'][i]+" "+vars['$oval'][i]+" "+vars['$nfield'][i]+" "+vars['$nval'][i]+" "+vars['$action'][i])
	}
