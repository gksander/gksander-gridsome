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
    const tools = addCollection("Tool");
    [
      {
        title: "HTML",
        subtitle: "HTML and various templating languages.",
        image: require.resolve("./src/assets/img/html.png"),
        alt: "HTML Logo",
      },
      {
        title: "CSS",
        subtitle: `CSS, SASS, TailwindCSS, and Bootstrap.`,
        image: require.resolve("./src/assets/img/css.png"),
        alt: "CSS Logo",
      },
      {
        title: "JavaScript & TypeScript",
        subtitle: `JavaScript and TypeScript.`,
        image: require.resolve("./src/assets/img/ts.png"),
        alt: "TypeScript Logo",
      },
      {
        title: "Vue.js",
        subtitle: `Vue, Vuex, Vue Router, Nuxt.js, Gridsome, Vuetify.`,
        image: require.resolve("./src/assets/img/vue.png"),
        alt: "Vue Logo",
      },
      {
        title: "React.js",
        subtitle: `React, React Native, Redux, React Router, Next.js.`,
        image: require.resolve("./src/assets/img/react.png"),
        alt: "React Logo",
      },
      {
        title: "Node.js",
        subtitle: `Node.js, MongoDB & Mongoose, Express, Strapi.`,
        image: require.resolve("./src/assets/img/node.png"),
        alt: "Node Logo",
      },
      {
        title: "Ruby on Rails",
        subtitle: `Ruby on Rails, PostgreSQL, Devise, and CanCan.`,
        image: require.resolve("./src/assets/img/rails.png"),
        alt: "Rails Logo",
      },
      {
        title: "GraphQL",
        subtitle: `GraphQL-Ruby, Apollo Client, and Vue Apollo.`,
        image: require.resolve("./src/assets/img/graphql.png"),
        alt: "GraphQL Logo",
      },
    ].forEach(tool => tools.addNode(tool));

    // FrontEnd Tools
    const frontendTools = addCollection("frontendTool");
    [
      {
        title: "ES",
        image: require.resolve("./src/assets/img/esnext.png"),
        alt: "ESNext Logo",
      },
      {
        title: "TypeScript",
        image: require.resolve("./src/assets/img/ts.png"),
        alt: "TypeScript Logo",
      },
      {
        title: "Vue",
        image: require.resolve("./src/assets/img/vue.png"),
        alt: "Vue Logo",
      },
      {
        title: "React",
        image: require.resolve("./src/assets/img/react.png"),
        alt: "React Logo",
      },
      {
        title: "Redux",
        image: require.resolve("./src/assets/img/redux.png"),
        alt: "Redux Logo",
      },
    ].forEach(tool => frontendTools.addNode(tool));

    // FrontEnd Tools
    const backendTools = addCollection("backendTool");
    [
      {
        title: "Node.js",
        image: require.resolve("./src/assets/img/node.png"),
        alt: "NodeJS Logo",
      },
      {
        title: "Rails",
        image: require.resolve("./src/assets/img/rails.png"),
        alt: "Ruby on Rails Logo",
      },
      {
        title: "GraphQL",
        image: require.resolve("./src/assets/img/graphql.png"),
        alt: "GraphQL Logo",
      },
      {
        title: "MongoDB",
        image: require.resolve("./src/assets/img/mongodb.png"),
        alt: "MongoDB Logo",
      },
      {
        title: "PostgreSQL",
        image: require.resolve("./src/assets/img/pgsql.png"),
        alt: "PostgreSQL Logo",
      },
    ].forEach(tool => backendTools.addNode(tool));

    /**
     * Education
     */
    const degrees = addCollection("Degree");
    [
      {
        title: `M.A. Mathematics`,
        from: `Arizona State University`,
        description: `4.0 GPA. Focus on theoretical mathematics, math instruction.`,
        image: require.resolve("./src/assets/img/asu.png"),
      },
      {
        title: `B.S. Mathematics`,
        from: `Arizona State University`,
        description: `4.0 GPA. Focus on theoretical and computational mathematics.`,
        image: require.resolve("./src/assets/img/asu.png"),
      },
    ].forEach(degree => degrees.addNode(degree));

    /**
     * Social links
     */
    const links = addCollection("Link");
    [
      {
        title: "gksander93@gmail.com",
        subtitle: "By email",
        href: "mailto:gksander93@gmail.com",
        image: require.resolve("./src/assets/img/gmail.png"),
      },
      {
        title: "linkedin.com/in/gksander",
        subtitle: "On LinkedIn",
        href: "https://www.linkedin.com/in/gksander/",
        image: require.resolve("./src/assets/img/linkedin.png"),
      },
      {
        title: "github.com/gksander",
        subtitle: "On GitHub",
        href: "https://github.com/gksander",
        image: require.resolve("./src/assets/img/github.png"),
      },
      {
        title: "twitter.com/gksander93",
        subtitle: "On Twitter",
        href: "https://twitter.com/gksander93",
        image: require.resolve("./src/assets/img/twitter.png"),
      },
      {
        title: "dev.to/gksander",
        subtitle: "On Dev.to",
        href: "https://dev.to/gksander",
        image: require.resolve("./src/assets/img/devto.png"),
      },
    ].forEach(link => links.addNode(link));
  }); // End loadSources

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
