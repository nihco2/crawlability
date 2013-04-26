/*
    Rule : Supply alt text when using images as links
*/

module.exports = function linkImgAlt(){

    var 
        imgs = document.querySelectorAll("a>img"),
        len = imgs.length,
        alt = null,
        altVal = "",
        results = {},
        errors = []
    ;

    results.required = false;
    
    while(len--){
        
        alt = imgs[len].getAttribute('alt');
        if(alt) { test = (alt != "") } else { test = false;errors.push('Missing alt text when using images as links'); break; };
        
    }
    
    results.result = test;
    results.details = errors;

    return results;
    
}