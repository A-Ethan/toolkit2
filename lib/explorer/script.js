/*
 * Script Explorer, used to manage script list
 * @module   explorer/script
 * @author   genify(caijf@corp.netease.com)
 */
// script explorer
var Script = module.exports =
    require('../util/klass.js').create();
var pro = Script.extend(require('./explorer.js'));
/**
 * parse resource item
 * @protected
 * @param  {Object} res - resource config
 * @return {Void}
 */
this._parseResource = function(res){
    var Script = require('../meta/script.js');
    return new Script(res);
};