eachLine
========

process each line in a file

Usage
===

    var line = require('./line.js');
    line.eachLine('aaa.txt', function(filename, line_number, line_contents){
    
    });
    
    回调函数的3个参数分别是：文件名，行号，行文本。
