'use strict';

const { pluginConfigSchema } = require('./schema');

module.exports = {
	default() {
		return {
			IOServerOptions: {},
			events: [],
			publicRoleName: 'Public',
		};
	},
	async validator(config) {
		await pluginConfigSchema.validate(config);
	},
};
