/*
    Rule : Make use of the "description" meta tag
*/

module.exports = function description() {

    var 
        descriptionMarkup = document.querySelector("meta[name='description']"),
        results = {},
        errors = []
    ;

    results.required = true;

    if (descriptionMarkup) {
        var test = (descriptionMarkup.content != "");

        if (test == false) errors.push("Missing description content ");

        results.result = test,
        results.details = errors

        return results;

    } else {
        results.result = "void";
        errors.push('Missing description meta tag');
        results.details = errors;
        return results;
    }

}