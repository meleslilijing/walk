var fs = require('fs');
var walk = require('./walk.js');

var fileTree = walk(process.cwd());

var fileTreeJSON = JSON.stringify(fileTree);

fs.writeFile('test_result.json', fileTreeJSON, function (err) {
	if(err) {
		console.error(err)
	}
	console.log(fileTreeJSON)
})

