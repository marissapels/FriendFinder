//This file contains the routes to the html pages
var path = require("path");

module.exports = function(app){
	//directs user to survey page when /survey is specified
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname+"/../public/survey.html"));
	});	
	//directs user to home page when no other route is specified
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});
}