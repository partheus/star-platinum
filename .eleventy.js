module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('admin')
    eleventyConfig.addPassthroughCopy('img')
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
