// import tailwind at the top of the file
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Ajjlal Ahmed",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: "./tailwind.config.js",
        mainCssFile: "./src/assets/app.css",
      },
    },
    // ...
  ],
};
