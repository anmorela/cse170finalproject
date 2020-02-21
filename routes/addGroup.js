
var group = require('../courses.json');


exports.viewAddGroup = function(req, res) {
	var nameToShow = req.params.courseName;

	let pageData;
  for (var i = 0; i < group["courses"].length; i++) {
    var nameCheck = group.courses[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      pageData = group.courses[i];

	res.render("addGroup", pageData);
	}
}
};
