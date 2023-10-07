// WordPress webpack config.
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

// Utilities.
//const path = require( 'path' );

module.exports = {
	...defaultConfig,
	...{
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},
	},
};
