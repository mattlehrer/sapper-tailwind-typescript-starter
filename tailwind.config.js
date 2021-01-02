module.exports = {
	purge: {
		// needs to be set if we want to purge all unused
		// @tailwind/typography styles
		mode: 'all',
		content: ['./src/**/*.svelte', './src/**/*.html'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
