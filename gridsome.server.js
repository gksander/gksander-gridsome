// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    /**
     * Experience
     */
    const experiences = addCollection("Experience");
    [
      {
        title: "Senior Software Engineer @ Henri Home",
        description: `Full-stack web and mobile development using React Native, Vue.JS, and Ruby on Rails.`,
        time: `Sept. 2019 &ndash; Current`,
      },
      {
        title: `Software Engineer @ Artisan Colour`,
        description: `Full-stack web development using Vue.js, NodeJS, MongoDB, and Nginx. Development and deployment of custom eCommerce sites. Building custom tools to streamline internal functions.`,
        time: `Aug. 2018 &ndash; Sept. 2019`,
      },
      {
        title: `Software Engineer @ COSma Learning`,
        description: `Site development and deployment of cosmalearning.com. Development, coding, and maintenance of online math curriculum. Used PHP, MySQL, and JavaScript to build custom online courseware.`,
        time: `Jan. 2016 &ndash; Aug. 2018`,
      },
      {
        title: `Math Instructor @ Arizona State University`,
        description: `Taught precalculus and courses for future math teachers, lead many professional development workshops for university instructors. Research and development of math curriculum.`,
        time: `May 2014 &ndash; Jan. 2016`,
      },
    ].forEach(exp => experiences.addNode(exp));

    /**
     * Tools
     */
    // Styling Tools
    const stylingTools = addCollection("stylingTool");
    [
      {
        title: "HTML",
        image: require.resolve("./src/assets/img/html.png"),
      },
      {
        title: "JSX",
        image: require.resolve("./src/assets/img/jsx.png"),
      },
      {
        title: "CSS",
        image: require.resolve("./src/assets/img/css.png"),
      },
      {
        title: "Tailwind",
        image: require.resolve("./src/assets/img/tailwind.png"),
      },
      {
        title: "SASS",
        image: require.resolve("./src/assets/img/sass.png"),
      },
    ].forEach(tool => stylingTools.addNode(tool));

    // FrontEnd Tools
    const frontendTools = addCollection("frontendTool");
    [
      {
        title: "ES",
        image: require.resolve("./src/assets/img/esnext.png"),
      },
      {
        title: "TypeScript",
        image: require.resolve("./src/assets/img/ts.png"),
      },
      {
        title: "Vue",
        image: require.resolve("./src/assets/img/vue.png"),
      },
      {
        title: "React",
        image: require.resolve("./src/assets/img/react.png"),
      },
      {
        title: "Redux",
        image: require.resolve("./src/assets/img/redux.png"),
      },
    ].forEach(tool => frontendTools.addNode(tool));

    // FrontEnd Tools
    const backendTools = addCollection("backendTool");
    [
      {
        title: "Node.js",
        image: require.resolve("./src/assets/img/node.png"),
      },
      {
        title: "Rails",
        image: require.resolve("./src/assets/img/rails.png"),
      },
      {
        title: "GraphQL",
        image: require.resolve("./src/assets/img/graphql.png"),
      },
      {
        title: "MongoDB",
        image: require.resolve("./src/assets/img/mongodb.png"),
      },
      {
        title: "PostgreSQL",
        image: require.resolve("./src/assets/img/pgsql.png"),
      },
    ].forEach(tool => backendTools.addNode(tool));
  }); // End loadSources

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
