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
        color1: "#AD1FEA",
        color1_h: "#ad1feaa7",
        color2: "#4661E6",
        color2_h: "#4661E6A7",
        color3: "#3A4374",
        color3_h: "#3A4374A7",
        color4: "#FFFFFF",
        color5: "#F2F4FF",
        color6: "#F7F8FD",
        color7: "#3A4374",
        color8: "#647196",
        color9: "#F49F85",
        color10: "#62BCFA",
        color11: "#ff0000",
        color11_h: "#ff0000A7",
      },
      fontFamily: {
        custom: ["Jost", "serif"], // Custom font example
      },
    },
  },
  plugins: [],
} satisfies Config;
