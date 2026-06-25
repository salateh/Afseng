/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Твоя палитра для минималистичного темного режима
        app: {
          bg: "#121212", // Основной глубокий темный фон
          surface: "#181818", // Фон для карточек, хедера, сайдбара
          border: "rgba(255, 255, 255, 0.05)", // Твой border-white/5
          "border-muted": "rgba(107, 114, 128, 0.4)", // Твой border-gray-500/40
        },
        brand: {
          text: "#dfdfdf", // Активный яркий текст (белый/светло-серый)
          muted: "#858585", // Текст иконки по дефолту (серый)
          accent: "#ffffff", // Чистый белый для ховеров и фокусов
        },
        border: {
          subtle: "#222222", // Очень мягкий серый, еле заметный на #121212 / #181818
          focus: "#3a3a3a", // Чуть светлее для ховеров/фокусов
        },
      },
      borderRadius: {
        app: "0.5rem", // Дефолтный rounded-lg для твоих кнопок
      },
    },
  },
  plugins: [],
};
