'use strict';

const yup = require('yup');
const _ = require('lodash');

const pluginConfigSchema = yup.object().shape({
	IOServerOptions: yup.object(),
	events: yup.array().of(
		yup.object().shape({
			name: yup.string().required('An event name is required'),
			handler: yup
				.mixed()
				.test((v) => typeof v === 'function')
				.required('A handler function is required'),
		})
	),
	publicRoleName: yup.string(),
});

module.exports = {
	pluginConfigSchema,
};
