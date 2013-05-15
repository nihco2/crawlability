/*
    Rule : Use alt text in images
*/

module.exports = function imgAlt() {

    var 
        imgs = document.querySelectorAll("img"),
        len = imgs.length,
        alt = null,
        altVal = "",
        results = {},
        errors = [],
        test = true
    ;

    results.required = false;
    
    while (len--) {
        alt = imgs[len].getAttribute('alt');
        if (alt) { test = (alt != "") } else { test = false; errors.push('Missing img alt'); break; };

    }

    results.result = test;
    results.details = errors;
    results.required = false;

    return results;

}