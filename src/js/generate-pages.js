const projects = require('../_data/projects');

module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('projects', function(collection) {
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
};
