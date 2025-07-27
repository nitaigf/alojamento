// tailwind.config.ts
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{tsx,jsx,ts,js}', 
    './components/**/*.{tsx,jsx}',
    './routes/**/*.{tsx,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
