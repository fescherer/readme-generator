import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'title': '#27272a',
        'subtitle': '#52525b',
        'on': {
          primary: '#f4f4f5',
        },
        'form': {
          title: '#52525b',
          placeholder: '#a1a1aa',
          value: '#52525b',
          highlight: '#18181b',
        },

        'background': '#f8fafc',
        'foreground': '#f1f5f9',
        'foreground-2': '#fafafa',
        'highlight': '#475569',
      },
      fontSize: {
        'title': [
          '1.25rem', {
            lineHeight: '1.75rem',
            fontWeight: 600,
          },
        ],
        'subtitle': [
          '0.875rem', {
            lineHeight: '1.25rem',
          },
        ],
        'on-primary': [
          '0.875rem', {
            lineHeight: '1.25rem',
          },
        ],
        'form-title': [
          '1rem', {
            lineHeight: '1.5rem',
          },
        ],
        'form-placeholder': [
          '0.875rem', {
            lineHeight: '1.25rem',
          },
        ],
        'form-value': [
          '0.875rem', {
            lineHeight: '1.25rem',
          },
        ],
        'form-hightlight': [
          '0.875rem', {
            lineHeight: '1.25rem',
          },
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
