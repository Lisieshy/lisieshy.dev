import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        rosePine: {
          "primary": "#c4a7e7",
          "secondary": "#ebbcba",
          "accent": "#f6c177",
          "neutral": "#191724",
          "base-100": "#1f1d2e",
          "info": "#31748f",
          "success": "#9ccfd8",
          "warning": "#f6c177",
          "error": "#eb6f92",
        },
        rosePineMoon: {
          "primary": "#c4a7e7",
          "secondary": "#ea9a97",
          "accent": "#c4a7e7",
          "neutral": "#2a273f",
          "base-100": "#232136",
          "info": "#3e8fb0",
          "success": "#9ccfd8",
          "warning": "#f6c177",
          "error": "#eb6f92",
        },
        rosePineDawn: {
          "primary": "#907aa9",
          "secondary": "#d7827e",
          "accent": "#907aa9",
          "neutral": "#faf4ed",
          "base-100": "#fffaf3",
          "info": "#286983",
          "success": "#56949f",
          "warning": "#ea9d34",
          "error": "#b4637a",
        },
      }
    ],
  },
  plugins: [daisyui],
}