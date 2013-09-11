;(function(definition){
	var hasExports = typeof module !== undefined && module.exports;
	if(hasExports){
		module.exports = definition();
	}else{
		this['line'] = definition();
	}
}).call(this, function(){
	var fs =require('fs'),
    	    readline = require('readline'),
	    _ = {};
	_.eachLine = function(file, cb){
		var stream =fs.createReadStream(file),
		    rd = readline.createInterface({
			input:stream,
			output:process.stdout,
			terminal:false
		    }),
		    line_no = 1;
		// read line
		rd.on('line', function(contents){
			if(typeof cb === 'function'){
				cb(file, line_no, contents);				
			}
			line_no++;
		});
		// close
		rd.on('end',function(){
			rd.close();
		});
	};
	return _;	
});

