var
    fs = require('fs'),
    template = require(__dirname + '/templates').report,
    path = require('path')
;

module.exports = function(data, dirPath){
    
    var 
        dirPath = dirPath || "./", // set default directory path
        reportFilePath = path.resolve(dirPath + "/jscomplexityreport.html")
    ;
    
    var result = template({item : data, len : data.length});
    
    fs.writeFile(reportFilePath, result, function(err) {
        if(err) throw new Error(err);
        console.log("saved at " + reportFilePath);
    });
    
}