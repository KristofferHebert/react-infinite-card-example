const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  distDir: "build",
  devIndicators: {
    autoPrerender: false,
  },
});
