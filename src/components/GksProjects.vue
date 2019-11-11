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
      class="flex flex-row flex-wrap -mx-2"
      :class="{
        'mb-6': i !== $static.allProject.edges.length - 1,
      }"
    >
      <div class="px-2 w-full sm:w-7/12">
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
      </div>
      <div class="px-2 w-full sm:w-5/12">
        <!-- Images, part two... -->
        <gks-project-images :images="edge.node.images"></gks-project-images>
      </div>
    </div>
  </div>
</template>

<script>
import GksProjectImages from "./GksProjectImages";

export default {
  components: { GksProjectImages },
};
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
        images {
          image (width: 650, height: 650, quality: 100, fit: contain, background: "white")
          alt
        }
      }
    }
  }
}
</static-query>
