#!/usr/bin/env node

var 
    conf     = require('./conf.json'),
    reporter = require('../index')
;

reporter(conf).then(console.log);