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
        v-for="(edge, i) in $static.allExperience.edges"
        :key="edge.node.title"
        :class="{ 'mb-5': i !== $static.allExperience.edges.length - 1 }"
      >
        <div class="flex flex-wrap mb-1">
          <div
            v-html="edge.node.title"
            class="flex-grow font-bold text-primary-900"
          ></div>
          <div
            v-html="edge.node.time"
            class="w-full sm:w-auto sm:pl-4 text-primary-800"
          ></div>
        </div>
        <div v-html="edge.node.description" class="text-gray-700"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  allExperience (order: ASC) {
    edges {
      node {
        title
        description
        time
      }
    }
  }
}
</static-query>
