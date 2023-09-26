/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
//   // tailwind.config.js
//   module.exports = {
//     theme: {
//       backgroundColor: theme => ({
// -       ...theme('colors'),
// +       'primary': '#3490dc',
// +       'secondary': '#ffed4a',
// +       'danger': '#e3342f',
//       })
//     }
//   }