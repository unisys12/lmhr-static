module.exports = config => {
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
