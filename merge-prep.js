// UNUSED
var fields = {
	oldFields:['name','dateCreated','dateUpdated','isActive','id','contact','current.phase'],
	newFields:['name','dateCreated','dateUpdated','isActive','id','contact','current.phase']
};
print('hello');
var initalData = new SCFile('infFilials');
var buffer = new SCFile('INFIntegrationBuffer');
var bufferQuery;
var initialQuery = initalData.doSelect('current.phase~="Work in progress"');
if(initialQuery == RC_SUCCESS){
	do{
		print('add records');
		buffer.cmdb_name = 'name';
		buffer.cmdb_value = initalData['name'];
		buffer.ci_name = initalData['current.phase'];
		buffer.sccm_name = 'id';
		buffer.sccm_value = initalData[id];
		buffer.status = system.functions.tod()+" "+system.functions.operator();
		bufferQuery = buffer.doInsert();
		if(bufferQuery == RC_SUCCESS){
			print('insert ok');
		}
	}while(initalData.getNext() == RC_SUCCESS)
}
