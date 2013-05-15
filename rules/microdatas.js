/*
    Rule : Use Microdatas
*/

module.exports = function microdatas() {

    var 
        schema = document.querySelectorAll("[itemtype]"),
        errors = [],
        results = {}
    ;

    results.required = false;

    if (schema.length != 0) {
        var test = true;

        results.result = test;
        results.details = errors;

        return results;

    } else {
        results.result = "void";
        errors.push("Missing microdatas");
        results.details = errors;
        return results;

    }

}