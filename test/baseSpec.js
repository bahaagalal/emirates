var expect = require('chai').expect;
var Base = require(__dirname + '/../src/base');

describe('Base', function(){

	var base;

	before(function(){
		base = new Base();
	});

	describe('validateCallback', function(){

		it('should throw an error if no callback', function(){
			var fn = function(){
				base.validateCallback();
			};
			expect(fn).to.throw('not_callback');
		});

		it('should throw an error if callback isn\'t a function', function(){
			var fn = function(){
				base.validateCallback('callback');
			};
			expect(fn).to.throw('invalid_callback');
		});
	});
});
