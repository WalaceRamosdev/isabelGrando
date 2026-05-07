/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F5F5F0',     // Bege muito claro, quase branco
          beige: '#EFECE5',     // Bege suave para fundos secundários
          green: '#748A7A',     // Verde terapêutico suave
          greenDark: '#4A5D50', // Verde mais escuro para texto/contraste
          text: '#333333',      // Texto principal escuro (quase preto)
          textMuted: '#666666', // Texto secundário
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
