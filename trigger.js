if(! record['status']=='Не обработано'){
	print('update trigger');
	record['status']+=system.functions.tod()+' '+system.functions.operator();
}
