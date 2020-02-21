
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var addCourse = require("./routes/addCourse");
var course = require("./routes/course");
var team = require("./routes/findTeammates");
var group = require("./routes/groupPage");
var add = require('./routes/addComment');
var home = require("./routes/homepage");
var success = require("./routes/Success");
var addGroup = require('./routes/addGroup');
var newGroupMember = require('./routes/addNewTeammate');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get("/addCourse", addCourse.viewAddCourse);
app.get("/course/:courseName", course.view);
app.get("/findTeammates", team.view);
app.get("/groupPage/:groupName", group.view);
app.get('/addComment', add.addComment);
app.get("/homepage", home.view);
app.get("/Success", success.viewSuccess);
app.get('/:courseName/addGroup', addGroup.viewAddGroup);
app.get("/:courseName/addGroup/Success", success.viewGroupSuccess);
app.get('/addNewTeammate', newGroupMember.addMember);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
