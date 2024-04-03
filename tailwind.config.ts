import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        roll: {
          "0%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(540deg)",
          },
        },
      },
      animation: {
        spinner: "roll 0.8s infinite steps(8, end)",
      },
    },
  },
  plugins: [],
};
export default config;
