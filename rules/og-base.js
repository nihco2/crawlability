/*
    Rule : Use Open Graph Protocol meta tags
*/

module.exports = function ogBase() {

    var 
        selectors = [
            "meta[property='og:title']",
            "meta[property='og:description']",
            "meta[property='og:type']",
            "meta[property='og:image']"
        ],
        attributeName = 'content',
        len = selectors.length,
        currentTarget = null,
        errors = [],
        results = {},
        test = "void"
    ;

    results.required = false;
    while (len--) {
        currentTarget = document.querySelector(selectors[len]);
        if (currentTarget != undefined) { test = (currentTarget[attributeName] != "") }
    }

    results.result = test;
    results.details = errors;

    return results;

}