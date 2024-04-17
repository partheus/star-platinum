module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('admin')
    eleventyConfig.addPassthroughCopy('src/img')
    eleventyConfig.addPassthroughCopy('src/js')
    eleventyConfig.addPassthroughCopy('src/lib')
    eleventyConfig.addPassthroughCopy('src/fontfiles')

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
