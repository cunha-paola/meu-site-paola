// tailwind.config.ts (Este arquivo deve estar na raiz do seu projeto)
import defaultTheme from "tailwindcss/defaultTheme"; // Importe o objeto defaultTheme completo
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Configuração das classes baseadas nas variáveis CSS do layout.tsx
        headline: ["var(--font-oswald)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
      },
      // Adicione cores customizadas aqui se tiver uma paleta definida
      // colors: {
      //   primary: '#FF00FF',
      //   secondary: '#00FFFF',
      // },
    },
  },
  plugins: [],
};
export default config;
