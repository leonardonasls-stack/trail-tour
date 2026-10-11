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
          primary: 'var(--brand-primary, #059669)',
          'primary-hover': 'var(--brand-primary-hover, #047857)',
          secondary: 'var(--brand-secondary, #0F172A)',
          accent: 'var(--brand-accent, #F59E0B)',
          sand: 'var(--brand-sand, #F8FAFC)',
          dark: 'var(--brand-dark, #0B1120)',
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
