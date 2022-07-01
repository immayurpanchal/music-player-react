/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			dark: {
				100: '#6D81A1',
				900: '#041F1E'
			},
			skin: '#F9B9B0',
			grey: {
				50: '#E9F3FB',
				100: '#E4F0FA'
			}
		},
		extend: {
			boxShadow: {
				lg: '-2px -2px 4px rgba(255, 255, 255, 0.5), 2px 2px 4px rgba(109, 129, 161, 0.25)'
			}
		}
	},
	plugins: []
}
