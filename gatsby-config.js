module.exports = {
	siteMetadata: {
		title: `Computer Science Association`,
		description: ``,
		author: `@avonbied`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `images`,
				path: `${__dirname}/static/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/images/brand/logo-transparent.png`,
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
