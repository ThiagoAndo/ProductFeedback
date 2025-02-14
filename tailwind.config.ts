import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        AD1FEA: "#AD1FEA",
        ad1feaa7: "#ad1feaa7",
        z4661E6: "#4661E6",
        z4661E6A7_h: "#4661E6A7",
        z3A4374: "#3A4374",
        z3A4374A7_h: "#3A4374A7",
        FFFFFF: "#FFFFFF",
        F2F4FF: "#F2F4FF",
        F7F8FD: "#F7F8FD",
        z647196: "#647196",
        F49F85: "#F49F85",
        z62BCFA: "#62BCFA",
        ff0000: "#ff0000",
        ff0000A7_h: "#ff0000A7",
      },
      fontFamily: {
        custom: ["Jost", "serif"], // Custom font example
      },
    },
  },
  plugins: [],
} satisfies Config;
