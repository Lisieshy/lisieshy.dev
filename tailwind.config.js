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
          "primary":"#191724", // base
          "secondary":"#31748f", // pine
          "accent":"#f6c177", // gold
          "neutral":"#908caa", // subtle
          "base-100":"#1f1d2e", // surface

          "base": "#191724",
          "surface": "#1f1d2e",
          "overlay": "#26233a",
          "muted": "#6e6a86",
          "subtle": "#908caa",
          "text": "#e0def4",
          "love": "#eb6f92",
          "gold": "#f6c177",
          "rose": "#ebbcba",
          "pine": "#31748f",
          "foam": "#9ccfd8",
          "iris": "#c4a7e7",
          "highlightLow": "#21202e",
          "highlightMed": "#403d52",
          "highlightHigh": "#524f67",
        },
        rosePineMoon: {
          "primary": "#232136", // base
          "secondary": "#3e8fb0", // pine
          "accent": "#f6c177", // gold
          "neutral": "#908caa", // subtle
          "base-100": "#2a273f", // surface

          "base": "#232136",
          "surface": "#2a273f",
          "overlay": "#393552",
          "muted": "#6e6a86",
          "subtle": "#908caa",
          "text": "#e0def4",
          "love": "#eb6f92",
          "gold": "#f6c177",
          "rose": "#ea9a97",
          "pine": "#3e8fb0",
          "foam": "#9ccfd8",
          "iris": "#c4a7e7",
          "highlightLow": "#2a283e",
          "highlightMed": "#44415a",
          "highlightHigh": "#56526e",
        },
        rosePineDawn: {
          "primary": "#faf4ed", // base
          "secondary": "#56949f", // pine
          "accent": "#f6c177", // gold
          "neutral": "#797593", // subtle
          "base-100": "#fffaf3", // surface

          "base": "#faf4ed",
          "surface": "#fffaf3",
          "overlay": "#f2e9e1",
          "muted": "#9893a5",
          "subtle": "#797593",
          "text": "#575279",
          "love": "#b4637a",
          "gold": "#ea9d34",
          "rose": "#d7827e",
          "pine": "#286983",
          "foam": "#56949f",
          "iris": "#907aa9",
          "highlightLow": "#f4ede8",
          "highlightMed": "#dfdad9",
          "highlightHigh": "#cecacd",
        },
      }
    ],
  },
  plugins: [daisyui],
}