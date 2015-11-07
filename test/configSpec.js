var expect = require('chai').expect;
var config = require(__dirname + '/../src/config');

describe('config', function(){

	it('should contain configuration for development, testing and production', function(){
		expect(config).to.be.an('object');
		expect(config).to.have.keys(['development', 'testing', 'production']);
		expect(config.development).to.be.an('object');
		expect(config.testing).to.be.an('object');
		expect(config.production).to.be.an('object');
	});
});
