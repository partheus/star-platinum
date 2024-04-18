const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('admin')
    eleventyConfig.addPassthroughCopy('src/img')
    eleventyConfig.addPassthroughCopy('src/js')
    eleventyConfig.addPassthroughCopy('src/lib')
    eleventyConfig.addPassthroughCopy('src/fontfiles')

    // Add a Markdown filter using markdown-it
    eleventyConfig.addNunjucksFilter("markdownify", function(value) {
        let markdown = markdownIt();
        return markdown.render(value);
    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
