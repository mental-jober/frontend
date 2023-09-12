/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard-Regular', 'sans-serif'],
      },
      fontSize: {
        'title1': '24px',
        'title2': '22px',
        'title3': '20px',
        'title4': '18px',
        'text1': '16px',
        'text2': '14px',
        'caption1': '12px',
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },
      letterSpacing: {
        tightest: '-0.48px',
        tighter: '-0.44px',
        tight: '-0.4px',
        normal: '-0.36px',
        wide: '-0.32px',
        wider: '-0.28px',
        widest: '-0.24px',
      },
      colors: {
        "foundation-red-light": "#feeaee",
        "foundation-red-lightHover": "#fee0e5",
        "foundation-red-LightActive": "#fcbec9",
        "foundation-red-normal": "#f62e52",
        "foundation-red-normalHover": "#dd294a",
        "foundation-red-normalActive": "#c52542",
        "foundation-red-dark": "#b9233e",
        "foundation-red-darkHover": "#941c31",
        "foundation-red-darkActive": "#6f1525",
        "foundation-red-Darker": "#56101d",
        
        "foundation-grey-50": "#f9fbfd",
        "foundation-grey-100": "#f6f8fb",
        "foundation-grey-200": "#ecf1f7",
        "foundation-grey-250": "#8E98A8",
        "foundation-grey-300": "#C1D2E6",
        "foundation-grey-400": "#aebdcf",
        "foundation-grey-500": "#9AA8B8",
        "foundation-grey-600": "#919EAD",
        "foundation-grey-700": "#747E8A",
        "foundation-grey-800": "#575e67",
        "foundation-grey-900": "#444a51",
        "foundation-grey-950": "#343940",

        "foundation-blue-50": "#e9f4ff",
        "foundation-blue-100": "#deefff",
        "foundation-blue-200": "#bbdefe",
        "foundation-blue-300": "#2593fc",
        "foundation-blue-400": "#2184e3",
        "foundation-blue-500": "#1e76ca",
        "foundation-blue-600": "#1c6ebd",
        "foundation-blue-700": "#165897",
        "foundation-blue-800": "#114271",
        "foundation-blue-900": "#0d3358",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  corePlugins: {
    preflight: false,
  },
};
