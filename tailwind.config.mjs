/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'custom-purple': '#666CA3',
			'custom-blue': '#13183F',
			'custom-gray': '#83869A',
			'custom-pink': '#F74780',
			'custom-pink-light': '#FFA7C3',
			'gradient-1': '#F02AA6',
			'gradient-2': '#FF6F48',
			'gradient-3': '#4851FF',
			'gradient-4': '#F02AA6',
			'custom-white': '#ffffff'
		}, 
		screens: {
			'mov': '320px',
			// => @media (min-width: 375px) { ... }

			'table': '800px',
			// => @media (min-width: 700px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
}
