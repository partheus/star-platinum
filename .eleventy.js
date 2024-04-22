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


    // Include script to generate pages from data
    // eleventyConfig.addPlugin(require('src/js/generate-pages.js'));

    eleventyConfig.addJavaScriptFunction("generatePages", function() {
    const projects = require('/src/_data/projects.js');

        return projects.map(project => {
            const projectData = {
                title: project.title,
                subtitle: project.subtitle,
                image: project.image,
                tech: project.tech,
                liveSite: project.liveSite
            };

            const slug = project.link;

            // Add the project page to the collection
            collection.addItem(`projects/${slug}/`, projectData);

            return projectData;
        });


    });

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
