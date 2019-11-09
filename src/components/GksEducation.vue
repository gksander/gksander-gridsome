<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Education"
      subtitle="My educational background."
    ></gks-section-title>

    <div
      v-for="(edge, i) in $static.allDegree.edges"
      :key="i"
      class="flex -mx-2"
      :class="{
        'mb-6': i !== $static.allDegree.edges.length - 1,
      }"
    >
      <div class="px-2">
        <div class="h-12 w-12 border rounded-full p-1">
          <g-image :src="edge.node.image" alt="Degree logo"></g-image>
        </div>
      </div>
      <div class="flex-grow px-2">
        <div class="font-bold text-primary-900 leading-tight">
          {{ edge.node.title }}
        </div>
        <div class="text-primary-800 leading-tight mb-2">
          {{ edge.node.from }}
        </div>
        <div class="text-gray-600" v-html="edge.node.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  allDegree (order: ASC) {
    edges {
      node {
        title
        from
        description
        image (width: 65, height: 65, fit: contain, background: "transparent")
      }
    }
  }
}
</static-query>
