/*
    Rule : Use heading tags to emphasize important text
*/

module.exports = function headings() {

    var 
        h1Markup = document.querySelector("h1"),
        h2Markup = document.querySelector("h2"),
        results = {},
        errors = []
    ;

    results.required = true;

    if (h1Markup && h2Markup) {
        var test = (h1Markup.innerHTML != "") && (h2Markup.innerHTML != "") && (h1Markup.length < 2);

        if (h1Markup.innerHTML == "") errors.push("Missing h1");
        else if (h2Markup.innerHTML == "") errors.push("Missing h2");
        else if (h1Markup.length < 2 == false) errors.push("Duplicate h1");

        results.result = test,
        results.details = errors;

        return results;

    } else {
        results.result = "void";
        errors.push('Missing headings meta tags');
        results.details = errors;
        return results;
    }

}