/*
    Rule : Make use of the "keywords" meta tag
*/

module.exports = function keywords() {

    var 
        keywordsMarkup = document.querySelector("meta[name='Keywords']") || document.querySelector("meta[name='keywords']"),
        results = {},
        errors = []
    ;

    results.required = false;

    if (keywordsMarkup) {
        var test = (keywordsMarkup.content != "");
        if (test == false) errors.push('Missing keywords');
        results.result = test;
        results.details = errors;
        return results;

    } else {
        results.result = false;
        errors.push('Missing Keywords meta tag');
        results.details = errors;
    }

}