

var jsonGroup = require('../Groups.json');

exports.view = function(req, res){
  let pageData;

  var nameToShow = req.params.groupName;

  // Display length of JSON array
  console.log(jsonGroup.groups.length);

  for (var i = 0; i < jsonGroup.groups.length; i++) {
    var nameCheck = jsonGroup.groups[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      // Render the JSON object if title matches URL
      pageData = jsonGroup.groups[i];
      pageData['viewAlt'] = false;
      res.render('groupPage', pageData);
    }

  }
};

exports.viewAlt = function(req, res){
  let pageData;
  var nameToShow = req.params.groupName;

  // Display length of JSON array
  console.log(jsonGroup.groups.length);


  for (var i = 0; i < jsonGroup.groups.length; i++) {
    var nameCheck = jsonGroup.groups[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      // Render the JSON object if title matches URL
      pageData = jsonGroup.groups[i];
      pageData['viewAlt'] = true;
      res.render('groupPage', pageData);
    }

  }
};