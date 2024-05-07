const markdownIt = require("markdown-it");
const fs = require("fs");
const NOT_FOUND_PATH = "_site/404.html";

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('admin')
    eleventyConfig.addPassthroughCopy('src/img')
    eleventyConfig.addPassthroughCopy('src/js')
    eleventyConfig.addPassthroughCopy('src/lib')
    eleventyConfig.addPassthroughCopy('src/fontfiles')
    eleventyConfig.addPassthroughCopy('src/favicon.ico')

    // Add a Markdown filter using markdown-it
    eleventyConfig.addNunjucksFilter("markdownify", function(value) {
        let markdown = markdownIt();
        return markdown.render(value);
    });

    // add browsersync config for 404 page fallback and callback
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", (req, res) => {
                    if (!fs.existsSync(NOT_FOUND_PATH)) {
                        throw new Error(
                            `Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`
                        );
                    }

                    const content_404 = fs.readFileSync(NOT_FOUND_PATH);
                    // Add 404 http status code in request header.
                    res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });


    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
