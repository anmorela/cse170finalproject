var json = require('../Groups.json');

exports.addTeammateMethod = function(req,res) {
	var groupList = json.groups;
	var classList = json.classmates;
	var index;

	//Loop that finds the index of the classmate object to be added to the group
	for (var i=0; i<classList.length; i++){
		if ((classList[i].name).equals(studentName)){
			index=i;
		}
	}

}