var config = {};

config.development = {
	server: {
		port: 3003
	}
};

config.testing = {
	server: {
		port: 3004
	}
};

config.production = {
	server: {
		port: 3000
	}
};

module.exports = config;
