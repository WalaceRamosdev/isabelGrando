/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#FAF9F6',     // Linho Areia suave, quase branco
          beige: '#F3E9DF',     // Nude Champanhe suave para fundos secundários
          green: '#C18C7E',     // Terracota Rosado / Rosa Queimado suave (Destaque)
          greenDark: '#3A2C28', // Chocolate Espresso profundo (Textos e Contraste)
          text: '#3E3532',      // Texto principal escuro quente
          textMuted: '#726561', // Texto secundário quente amigável
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
