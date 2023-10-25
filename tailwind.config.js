/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const colors = {
	light: {
		text: "#000000",
		background: "#f2f2f2",
		primary: "#d9c9c9",
		secondary: "#aec6ae",
		accent: "#59597d",
	},
	dark: {
		text: "#ffffff",
		background: "#0d0d0d",
		primary: "#395139",
		secondary: "#362626",
		accent: "#8282a6",
	},
};

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: colors.light,
		},
		fontFamily: {
			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			heading: ["var(--font-heading)"],
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		nextui({
			themes: {
				light: colors.light,
				dark: colors.dark,
			},
		}),
	],
	darkMode: "class",
};
