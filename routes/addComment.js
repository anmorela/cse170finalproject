

  var addData = require('../Groups.json');

exports.addComment = function(req, res) {    
	// Your code goes here
	// Capture the inputed data
    var comment = req.query.comment;
    var groupTitle = req.query.grouptitle;
    var groupImg = req.query.groupimg;

	/*var newComment = {
		"title": groupTitle,
		"img": groupImg,
		"comment": comment
    }*/
    
    for (var i = 0; i < addData["groups"].length; i++) {
        var nameCheck = addData.groups[i].title;

        if (nameCheck == groupTitle) {
            var counter = addData.groups[i].comments.length;
            var counter = counter + 1;

            console.log(counter);

            addData.groups[i].comments[counter] = comment;

            console.log(addData.groups[i].members[counter].name);

            res.render('groupPage', addData.groups[i]);
        }




    }

	//console.log(newComment);

	//group[0]["groups"].push(newComment);

	//response.render('groupPage', newComment);

 }