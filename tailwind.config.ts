import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.625rem",
      },
      colors: {
        purple: {
          1: "#AB23FF",
        },
        blue: {
          1: "#3d8bff",
        },
        gray: {
          1: "#13171D",
        },
      },
    },
  },
  plugins: [],
}
export default config
