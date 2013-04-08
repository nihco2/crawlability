var allRules = [
    'title',
    'description',
    'headings',
    'ogp:og',
    'ogp:twitter',
    'link-img-alt',
    'img-alt',
    'has-cookies'
];

module.exports = [
    {
        url : 'http://fr.viadeo.com/fr/profile/sylvain.faucherand',
        rules : allRules
    },
    {
        url : 'http://localhost:8080',
        rules : allRules
    },
    {
        url : 'http://unreachable/',
        rules : allRules
    },
    {
        url : 'http://fr.viadeo.com/fr/company/radiall',
        rules : allRules
    }
];