module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "50%": { opacity: 0.9 },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        wave: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(1.01)" },
          "20%": { transform: "scale(1.02)" },
          "30%": { transform: "scale(1.03)" },
          "40%": { transform: "scale(1.04)" },
          "60%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(1.04)" },
          "80%": { transform: "scale(1.03)" },
          "90%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        pulse: "pulse 0.5s infinite",
        shake: "shake 0.82s cubic-bezier(.36, .07,.19,.97) both",
        wave: "wave 0.5s linear",
      },
    },
  },
  plugins: [],
};
