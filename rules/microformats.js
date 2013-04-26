/*
    Rule : Use Microformats
*/

module.exports = function microformats() {

    var 
        hCalendarMarkup = {
            required: ["dtstart", "summary"],
            optional: ["location", "url", "dtend", "duration", "rdate", "rrule", "category", "description", "uid", "geo", "attendee", "attach", "status"]
        },

        hCardMarkup = {
            required: ["fn", "n"],
            optional: ["adr", "agent", "bday", "category", "class", "email", "geo", "key", "label", "logo", "mailer", "nickname", "note", "org", "photo", "rev", "role", "sort-string", "sound", "tel", "title", "tz", "uid", "url"]
        },


        veventMarkup = document.getElementsByClassName(document, "*", "vevent"),
        vcardMarkup = document.getElementsByClassName(document, "*", "vcard"),

    //if we want to parse rel attributes of the links
        relSelectors = getAllElementsWithAttribute('rel'),
        errors = [],
        results = {}
    ;

    results.required = false;

    if (veventMarkup || vcardMarkup || relSelectors) {
        var test = (veventMarkup.length != 0) || (vcardMarkup.length != 0) /*|| (relSelectors.length != 0)*/;

        if (test == false) {
            errors.push("Missing hCalendar or hCard microformats");
        }

        if (veventMarkup) {
            //test required and optionals hCalendar microformats

        }

        if (vcardMarkup) {
            //test required and optionals hCard microformats
        }

        results.result = test;
        results.details = errors;

        return results;

    } else {
        results.result = "void";
        results.details = errors.push("Missing microformats");
        return results;

    }

    function getAllElementsWithAttribute(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].getAttribute(attribute)) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    }

}