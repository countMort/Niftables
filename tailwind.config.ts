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
        xs: "0.625rem", // 10px
      },
      colors: {
        purple: {
          1: "#AB23FF",
          2: "#9123FF",
        },
        blue: {
          1: "#3d8bff",
          2: "#3D6FFF",
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
