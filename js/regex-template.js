/**
 * Regex Template v1.0.0
 */
'use strict';

var RegexTemplate = function () {
    this.email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g
    this.telp = /\w+/g
};

var obj = new RegexTemplate();

module.exports = obj;