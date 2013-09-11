var line = require('./line.js');
line.eachLine('aaa.txt', function(file, no, contents){
	console.log(no, file, contents);
});
