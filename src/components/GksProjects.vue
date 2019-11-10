<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Projects"
      subtitle="Some projects I've worked on."
      id="projects"
    ></gks-section-title>
    <div
      v-for="(edge, i) in $static.allProject.edges"
      :key="i"
      :class="{
        'mb-6': i !== $static.allProject.edges.length - 1,
      }"
    >
      <a
        class="font-bold text-primary-900 leading-tight cursor-pointer hover:underline"
        :href="edge.node.href"
        target="_blank"
        rel="noopener"
      >
        {{ edge.node.title }}
      </a>
      <div class="text-primary-800 leading-tight mb-2">
        {{ edge.node.subtitle }}
      </div>
      <div class="text-gray-700 mb-2" v-html="edge.node.description"></div>
      <!-- Images -->
      <div class="flex flex-row flex-wrap -mx-2" v-if="false">
        <div
          class="p-1 w-1/2 smz:w-1/4"
          v-for="(image, j) in edge.node.images"
          :key="j"
        >
          <g-image :src="image" class="w-full"></g-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  allProject (order: ASC) {
    edges {
      node {
        title
        subtitle
        description
        href
        images (width: 350, quality: 95)
      }
    }
  }
}
</static-query>
