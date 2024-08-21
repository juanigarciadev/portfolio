import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            textColor: {
                corporative: "#A78BFA",
                corporativeDark: "#2a1e50",
                corporativeLight: "#e4dbff",
            },
            backgroundColor: {
                main: "#000319",
                light: "#080C29",
                corporative: "#A78BFA",
                corporativeDark: "#7b62c9",
            },
            borderColor: {
                cardBorder: "#1a246d",
            },
            fontFamily: {
                serif: ["Inter Variable"],
            },
            animation: {
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
			screens: {
				"2xl": { max: "1535px" },
				// => @media (max-width: 1535px) { ... }
		  
				xl: { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
		  
				lg: { max: "1023px" },
				// => @media (max-width: 1023px) { ... }
		  
				md: { max: "767px" },
				// => @media (max-width: 767px) { ... }
		  
				sm: { max: "639px" },
				// => @media (max-width: 639px) { ... }
		  
				xs: { max: "430px" },
				// => @media (max-width: 430px) { ... }
			  },
        },
    },
    plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

    addBase({
        ":root": newVars,
    });
}
export default config;
