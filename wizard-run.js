//@param:		Wizard name only
function wizard_run__noFile(name){
	var rteReturnValue = new SCDatum();
  	var rteNames = new SCDatum();
  	var rteVals = new SCDatum();
	rteNames.setType(8); //type array
	rteNames.push("file");        //Notification Name - INTO.NAME
	rteNames.push("name");      //Current File - INTO.FILE
	rteVals.setType(8);
	rteVals.push(vars['$L.void']); // Empty lfile?
	rteVals.push(name);	//RuleSet Name //TODO: на текущий момент такого не существует
	system.functions.rtecall("callrad",rteReturnValue,"wizard.run",rteNames,rteVals,false); //false to run in the same thread, true to run in new one.
	}
