<template>
  <div>
    <div class="bg-primary-800 pb-12">
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
    </div>
    <!-- Nav -->
    <div class="px-6 -mt-8">
      <div
        class="flex flex-row flex-wrap justify-around px-3 py-2 overflow-x-auto -mx-1 shadow-md border rounded-lg bg-white"
      >
        <div v-for="link in links" :key="link.to" class="p-1 w-1/2 sm:w-1/5">
          <button
            class="px-3 py-1 cursor-pointer text-center w-full border rounded text-primary-900 border-primary-900 overflow-hidden hover:bg-primary-800 hover:text-white hover:shadow-md select-none focus:shadow-none"
            style="text-overflow: ellipsis;"
            @click="onLinkClick(link)"
          >
            {{ link.title }}
          </button>
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
