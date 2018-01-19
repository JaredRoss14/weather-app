// var getData = require('/getData.js');
var UserSearch = require('./UserSearch.js');

var request = require('request');
var fs = require('fs');


var loginType = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];

var WeatherAdmin = function() {

	this.newUserSearch = function(name, location) {
		var newUser = new UserSearch(name, location);

		newUser.getWeather();

		fs.appendFile('log.txt', newUser.date + ': ' + newUser.name + '- '
		  + newUser.location + '\r\n', function (err) {
			if (err) throw err;
		});
	},

	this.getData = function() {
		fs.readFile('log.txt', (err, data) => {
	  		if (err) throw err;
	  		console.log(data);
		});
	}
}


if (loginType === 'user') {
	var newCrap = new WeatherAdmin();
	newCrap.newUserSearch();

} else if (loginType === 'admin') {
	WeatherAdmin.getData()

} else {
	console.log('Invalid first argument');
}