/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          kalam: ['Kalam', 'cursive'],
        },
      },
    },
    plugins: [],
  }