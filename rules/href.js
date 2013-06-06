/*
    Rule : Return all href of links in the page except empty or js href
*/

//TODO: filter twitter/facebook etc links...
module.exports = function href(){
                     
    var 
         links = document.getElementsByTagName("a"),
         linklist = [],
         regex = /^http/i
    ;

    for (var i = 0, len = links.length; i < len; ++i) {
          if (regex.exec(links[i].href)) { linklist.push(links[i].href); }
    }
    return linklist;
    
}