/*
    Rule : Indicate page titles by using title tags
*/

module.exports = function title() {

    var 
        titleMarkup = document.querySelector('head>title'),
        errors = [],
        results = {}
    ;

    results.required = true;

    if (titleMarkup) {
        var 
            test = titleMarkup.innerHTML != ""
        ;

        if (test == false) {
            errors.push('Missing title');
        }

        results.result = test;
        results.details = errors;

        return results;

    } else {
        results.result = "void";
        errors.push("Missing title tag");
        results.details = errors;
    }

}