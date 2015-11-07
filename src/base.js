var is = require('is_js');

function Base() {};

Base.prototype.validateCallback = function(callback){
	if(!callback)
		throw new Error('not_callback');

	if(!is.function(callback))
		throw new Error('invalid_callback');
};

module.exports = Base;
