import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        sell: ["Sellviny", "sans-serif"],
        sharp: ["Sharp", "sans-serif"],
        rose: ["Rose", "sans-serif"],
      },
      colors: {
        "classic-pink": "var(--classic-pink)",
        darkblue: "var(--darkblue)",
        lightpink: "var(--lightpink)",
        thegreen: "var(--thegreen)",
        thered: "var(--thered)",
      },
    },
  },
  plugins: [],
} satisfies Config;
