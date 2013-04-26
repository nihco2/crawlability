/*
    Rule : Use Twitter Graph Protocol meta tags
*/

module.exports = function ogTwitter(){
    
    var 
        selectors = [
            "meta[name='twitter:card']", 
            "meta[name='twitter:description']",
            "meta[name='twitter:title']",
            "meta[name='twitter:image']",
            "meta[name='twitter:site']"
        ], 
        attributeName = 'content',
        len = selectors.length,
        currentTarget = null,
        errors = [],
        results = {},
        test = "void"
    ;

    results.required = false;
    
    while(len--){
        currentTarget =  document.querySelector(selectors[len]);
        if(currentTarget) {test = (currentTarget[attributeName] != "") } else { break; }
    }

    results.result = test;
    results.details = errors;
    
    return results;
    
}