module.exports = {
  globDirectory: "public/",
  globPatterns: [
    "**/*.{ico,svg}",
  ],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
  ],
  runtimeCaching: [{
    urlPattern: /.+/,
    handler: "NetworkFirst",
  }],
};
