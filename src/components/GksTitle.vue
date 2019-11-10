<template>
  <div class="bg-primary-800">
    <div class="flex flex-row flex-wrap p-5 -mx-3 items-center">
      <div class="px-3 w-full sm:w-auto flex justify-center">
        <g-image
          src="~/assets/img/headshot.jpg"
          alt="Grant's headshot"
          class="rounded-full shadow-xl"
          width="175"
          height="175"
          quality="95"
        />
      </div>
      <div class="px-3 flex-grow text-white">
        <h1 class="text-5xl font-thin mb-1 text-center sm:text-left">
          Grant Sander
        </h1>
        <h2
          class="text-3xl font-thin leading-none text-gray-300 text-center sm:text-left"
        >
          Fullstack Developer
        </h2>
        <h3
          class="text-2xl font-thin leading-tight text-gray-300 text-center sm:text-left"
        >
          Web and Mobile
        </h3>
      </div>
    </div>
    <!-- Nav -->
    <div
      class="flex flex-row flex-wrap justify-around px-3 py-2 overflow-x-auto -mx-1"
    >
      <div v-for="link in links" :key="link.to" class="p-1 w-1/2 sm:w-1/5">
        <div
          class="px-3 py-1 cursor-pointer text-center w-full border rounded text-white overflow-hidden hover:bg-gray-600"
          style="text-overflow: ellipsis"
          @click="onLinkClick(link)"
        >
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Experience", to: "#experience" },
      { title: "Tools", to: "#tools" },
      { title: "Projects", to: "#projects" },
      { title: "Education", to: "#education" },
      { title: "Contact", to: "#contact" },
    ],
  }),

  methods: {
    onLinkClick(link) {
      document.querySelector(link.to).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
