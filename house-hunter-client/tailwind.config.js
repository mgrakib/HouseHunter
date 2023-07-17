/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"primary-font": ["var(--primary-font)", "Arial", "sans-serif"],
				"secondary-font": [
					"var(--secondary-font)",
					"Helvetica",
					"sans-serif",
				],
			},
			colors: {
				"primary-bg-color": "var(--primary-bg-color)",
				"secondary-bg-color": "var(--secondary-bg-color)",
				"gradiant-dark-first-color": "var(--gradiant-dark-first-color)",
				"gradiant-dark-second-color":
					"var(--gradiant-dark-second-color)",
				"gradiant-light-first-color":
					"var(--gradiant-light-first-color)",
				"gradiant-light-second-color":
					"var(--gradiant-light-second-color)",
				"white-color": "var(--white-color)",
				"brand-color": "var(--brand-color)",
				"gray-color": "var(--gray-color)",
				"light-gray-color": "var(--light-gray-color)",
			},
		},
	},
	plugins: [require("daisyui")],
};

