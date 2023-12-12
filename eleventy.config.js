const yaml = require("js-yaml");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/css");
    eleventyConfig.addPassthroughCopy("_src/fonts");
    eleventyConfig.addPassthroughCopy("_src/img");
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    // Return your Object options:
    return {
      dir: {
        input: "_src",
        output: "_site"
      }
    }
  };