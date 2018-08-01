for(var item = 0; item < system.functions.lng(vars['$action']); item++){
	print(vars['$action'][item]);
	vars['$action'][item] = 'upd';
}
