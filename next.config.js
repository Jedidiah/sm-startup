const withTM = require("next-transpile-modules")([
  "next-slicezone",
  "@react-three/drei",
  "three",
  "react-spring",
  "react-three-fiber",
]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });

    return config;
  },
});
