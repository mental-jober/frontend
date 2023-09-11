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
        'pretendard': ['Pretendard', 'sans'],
      },
      fontSize: {
        'title2': '22px',
        'text2': '14px',
        'title4-bold': '18px',
        'caption1-medium': '12px',
        'text1': '16px',
        'title3': '20px',
        'title4-medium': '18px',
        'caption1': '12px',
      },
      fontWeight: {
        'title2': '700',
        'text2': '500',
        'title4-bold': '700',
        'caption1-medium': '500',
        'text1': '400',
        'title3': '700',
        'title4-medium': '500',
        'caption1': '400',
      },
      letterSpacing: {
        'title2': '-0.44px',
        'text2': '-0.28px',
        'title4-bold': '-0.36px',
        'caption1-medium': '-0.24px',
        'text1': '-0.32px',
        'title3': '-0.4px',
        'title4-medium': '-0.36px',
        'caption1': '-0.24px',
      },
      colors: {
        "foundation-blue-300": "#2593FC",
        "foundation-grey-300": "#C1D2E6",
        "foundation-grey-500": "#9AA8B8",
        "foundation-grey-600": "#919EAD",
        "foundation-grey-700": "#747E8A",
        "foundation-grey-950": "#343940",
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
