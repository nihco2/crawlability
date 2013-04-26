/*
    Rule : Make use of the "keywords" meta tag
*/

module.exports = function keywords() {

    var 
        keywordsMarkup = document.querySelector("meta[name='Keywords']"),
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
        results.result = "void";
        errors.push('Missing Keywords meta tag');
        results.details = errors;
    }

}