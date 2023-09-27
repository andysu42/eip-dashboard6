/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      'xxs': '0',
      'xs': '200px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "forest", "retro",
    {
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        // "primary": "#efefef",
        "primary-focus": "mediumblue",
        ".bg-danger": {
          "background-color": "#eb4444",
        },
      },
    },
    {
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        // "primary": "#efefef",
        "primary-focus": "mediumblue",
        ".bg-danger": {
          "background-color": "#eb4444",
        }
      },
    },
    {
      mytheme: {
        "primary": "#363636", 
        "secondary": "#dbeafe",            
        "accent": "#854d0e",
        "neutral": "#120c12",
        "base-100": "#211720",
        "info": "#8ccac1",
        "success": "#9cb686",
        "warning": "#ffd261",
        "error": "#fc9783",
      },
    }
  ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}