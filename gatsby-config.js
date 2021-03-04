module.exports = {
	siteMetadata: {
		title: `Computer Science Association`,
		description: ``,
		author: `@avonbied`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				// Override the file regex for Sass
				// sassRuleTest: /\.global\.s(a|c)ss$/,
				// // Override the file regex for CSS modules
				// sassRuleModulesTest: /\.module\.s(a|c)ss$/,
				cssLoaderOptions: {
					camelCase: true,
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `images`,
				path: `${__dirname}/static/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				allExtensions: true,
			},
		},
	],
}
