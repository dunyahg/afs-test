/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#EB5757',
        'primary-text':'#181819',
        'background-col': '#F5F5F5',
        'deep-red':'#D80027',
        'blue-color':'#2F80ED',
        'progress-blue':'#4339F2',
        'pending-color':'#F2994A',
        'pending-bg-color':'#FFD6B5',
        'view-color':'#219653'
      },
      fontFamily: {
        sans : ["Inter"],
        serif :[ "sans-serif"]
      },
    },
  },
  plugins: [],
}
