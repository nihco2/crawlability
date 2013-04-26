/*
    Rule : Use Open Graph Protocol meta tags
*/

module.exports = function ogProfile(){

    var 
        selectors = [
            "meta[property='og:locale']",
            "meta[property='og:site_name']"
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