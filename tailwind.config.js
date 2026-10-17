/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF7900',
          'orange-hover': '#E06800',
          brown: '#8B4A25',
          green: '#65A51C',
          charcoal: '#161616',
          cream: '#FFF6EB',
          primary: 'var(--brand-primary, #FF7900)',
          'primary-hover': 'var(--brand-primary-hover, #E06800)',
          secondary: 'var(--brand-secondary, #161616)',
          accent: 'var(--brand-accent, #65A51C)',
          sand: 'var(--brand-sand, #FAF8F5)',
          dark: 'var(--brand-dark, #121212)',
          muted: '#64748B',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EBE5D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 14px 40px -4px rgba(0, 0, 0, 0.12)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};
