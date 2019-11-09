<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Experience"
      subtitle="Where I've been and what I've done."
    ></gks-section-title>
    <!-- List out experience items -->
    <div>
      <div
        v-for="(item, i) in items"
        :key="item.title"
        :class="{ 'mb-5': i !== items.length - 1 }"
      >
        <div class="flex flex-wrap mb-1">
          <div
            v-html="item.title"
            class="flex-grow font-bold text-primary-900"
          ></div>
          <div
            v-html="item.time"
            class="w-full sm:w-auto sm:pl-4 text-primary-800"
          ></div>
        </div>
        <div v-html="item.description" class="text-gray-700"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
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
    ],
  }),
};
</script>
