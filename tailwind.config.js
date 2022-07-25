/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#fff',
			dark: {
				100: '#6D81A1',
				900: '#041F1E'
			},
			skin: { 100: '#F9B9B0', 500: '#DE958B' },
			grey: {
				50: '#E9F3FB',
				100: '#E4F0FA'
			}
		},
		extend: {
			boxShadow: {
				lg: '-2px -2px 4px rgba(255, 255, 255, 0.5), 2px 2px 4px rgba(109, 129, 161, 0.25)',
				inset: 'inset -4px -4px 6px rgba(255, 255, 255, 0.5), inset 4px 4px 6px rgba(109, 129, 161, 0.16)',
				'slider-track': 'inset 0px 4px 4px rgba(4, 31, 30, 0.25)'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: []
}
