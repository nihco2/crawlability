module.exports = {
    'img-alt' : {
        // Use alt text in images
        context : 'browser',
        action : require('./img-alt'),
        value : 5
    },
    'link-img-alt' : {
        // Supply alt text when using images as links
        context : 'browser',
        action : require('./link-img-alt'),
        value : 5
    },
    'title' : {
        // Indicate page titles by using title tags
        context : 'browser',
        action : require('./title'),
        value : 5
    },
    'headings' : {
        // Use heading tags to emphasize important text
        context : 'browser', 
        action : require('./headings'),
        value : 5
    },
    'description' : {
        // Make use of the "description" meta tag
        context : 'browser', 
        action : require('./description'),
        value : 5
    },
    'ogp:og' : {
        // Use Open Graph Protocol meta tags
        context : 'browser', 
        action : require('./og-base'),
        value : 5
    },         
    'ogp:og-profile' : {
        // Use Open Graph Protocol meta tags
        context : 'browser', 
        action : require('./og-profile'),
        value : 5
    },      
    'ogp:twitter' : {
        // Use Twitter Graph Protocol meta tags
        context : 'browser', 
        action : require('./og-twitter'),
        value : 5
    },
     'keywords' : {
        // Make use of the "keywords" meta tag
        context : 'browser', 
        action : require('./keywords'),
        value : 5
    },
     'microformats' : {
        // Use Microformats
        context : 'browser', 
        action : require('./microformats'),
        value : 5
    },
    'microdatas' : {
        // Use Microdatas
        context : 'browser', 
        action : require('./microdatas'),
        value : 5
    }
};