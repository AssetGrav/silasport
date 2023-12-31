/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#1A3340",
      "dark-blue": "#405B69",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#DCE2E2",
      white: "#ffffff",
      black: "#000000",
      red: "#ff0000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        logo: "url('/public/img/logo.png')",
        video: "url('https://www.youtube.com/watch?v=-5ajVJ1Yxlg')",
        settings: "url('/public/img/settings.png')",
        "about-fone": "url('/public/img/about-fone.jpg')",
        instagram: "url('/public/img/instagram.png')",
        "instagram-white": "url('/public/img/instagram-icon-white.png')",
        whatsapp: "url('/public/img/whatsapp.png')",
        "whatsapp-white": "url('/public/img/whatsapp-icon-white.png')",
        telegram: "url('/public/img/telegram.png')",
        "telegram-white": "url('/public/img/telegram-white.png')",
        mail: "url('/public/img/mail.png')",
        "mail-white": "url('/public/img/email-white.png')",
        baner: "url('/public/img/fone.png')",
      },
      backdropOpacity: {
        100: ".100",
      },
    },
  },
  plugins: [],
};
