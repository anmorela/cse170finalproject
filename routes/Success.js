

var course = require('../courses.json');
var group = require('../Groups.json');


exports.viewSuccess = function(req, res) {
	var courseName = req.query.courseTitle.toUpperCase();
	var professor = req.query.professor;
    var id = req.query.courseTitle.toLowerCase();
    
    courseName = courseName.replace(/\s+/g, '');
    id = id.replace(/\s+/g, '');

	var newCourse = {
		"title": courseName,
		"prof": professor,
		"id": id,
		"groups": [ 
		]
	};

	course.courses.push(newCourse);
	console.log(course.courses);

	res.render("Success");
};

exports.viewGroupSuccess = function(req, res) {
	var groupName = req.query.groupName;
	var courseName = req.params.courseName;
    
    groupName = groupName.replace(/\s+/g, '');
  
	//Create group json object for courses.json and groups.json
	//iterate through courses.json to add group to proper object
	//

	var newGroupCourses = {
		"name": groupName,
		"imageURL": "https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg"
	  };
	  
	var newGroupGroups = {
		"course": courseName,
		"title": groupName,
        "img": "",
        "comments": [
          {}],
        "members": [
          {}]
	  };
	  
	  for (var i = 0; i < course["courses"].length; i++) {
		var nameCheck = course.courses[i].title;

		if (nameCheck == courseName) {
			console.log("URL Matches Title!");

			course.courses[i].groups.push(newGroupCourses);

		}

	  }

	  group.groups.push(newGroupGroups);

	//course.courses.push(newCourse);
	//console.log(course.courses);

	res.render("Success");
}