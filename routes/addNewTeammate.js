var data = require('../Groups.json');

console.log("here1");

exports.addMember = function(req, res) {
	var groupName = req.query.groupTitleMember;
	var name = req.query.name;
	var email = req.query.email;

console.log(req.query.groupTitleMember);
	console.log("here2");
	//var name = document.getElementById("form3");
	//var email = document.getElementById("form2");

	console.log("here3");

	var teammate = {"name": name, "email": email};

	for (var i = 0; i < data["groups"].length; i++) {
        var nameCheck = data.groups[i].title;
        

        if (nameCheck == groupName) {
			var counter = data.groups[i].members.length;
            var counter = counter + 1;
            data.groups[i].members[counter] = teammate;
			console.log(data.groups[i].members[counter]);
            res.render('groupPage', data.groups[i]);
        }
	}
}