<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Preferred Tools"
      subtitle="Tools I like and regularly use."
    ></gks-section-title>
    <div
      v-for="(edge, i) in $static.allTool.edges"
      :key="i"
      class="flex -mx-2 items-center"
      :class="{
        'mb-6': i !== $static.allTool.edges.length - 1,
      }"
    >
      <div class="px-2 flex-none hidden sm:block">
        <div class="shadow rounded-lg p-2 w-12 h-12">
          <g-image
            :src="edge.node.image"
            :alt="edge.node.alt"
            class="w-full"
          ></g-image>
        </div>
      </div>
      <div class="flex-grow px-2">
        <div class="font-bold text-primary-900 leading-tight">
          {{ edge.node.title }}
        </div>
        <div class="text-primary-800 leading-tight">
          {{ edge.node.subtitle }}
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
  allTool (order: ASC) {
    edges {
      node {
        title
        subtitle
        image (width: 65, height: 65, fit: contain, background: "transparent")
        alt
      }
    }
  }
}
</static-query>
