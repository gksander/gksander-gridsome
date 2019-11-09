<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Contact"
      subtitle="Get in touch!"
    ></gks-section-title>
    <!-- Links -->
    <a
      v-for="(edge, i) in $static.allLink.edges"
      :key="i"
      class="flex -mx-2 py-2 hover:bg-gray-200 items-center"
      :class="{
        'mb-1': i !== $static.allLink.edges.length - 1,
      }"
      :href="edge.node.href"
      target="_blank"
      rel="noopener"
    >
      <div class="px-2 flex-none hidden sm:block">
        <div class="shadow rounded-lg p-2 w-12 h-12">
          <g-image
            :src="edge.node.image"
            alt="Social logo"
            class="w-full"
          ></g-image>
        </div>
      </div>
      <div class="flex-grow px-2">
        <div
          v-html="edge.node.title"
          class="font-bold text-primary-900 leading-tight"
        ></div>
        <div
          v-html="edge.node.subtitle"
          class="text-primary-800 leading-tight"
        ></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<static-query>
query {
  allLink (order: ASC) {
    edges {
      node {
        title
        subtitle
        href
        image (width: 100, height: 100, fit: contain, background: "transparent")
      }
    }
  }
}
</static-query>
