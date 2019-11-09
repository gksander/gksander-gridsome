<template>
  <div class="p-5">
    <!-- Title -->
    <gks-section-title
      title="Preferred Tools"
      subtitle="Tools I like and regularly use"
    ></gks-section-title>
    <!-- Styling Tools -->
    <div class="mb-3">
      <div class="font-bold text-primary-900 mb-2">Markup & Styling</div>
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="(edge, i) in $static.allStylingTool.edges"
          :key="i"
          class="w-1/5 px-4 flex flex-col items-center"
        >
          <g-image
            :src="edge.node.image"
            :alt="edge.node.alt"
            class="mb-1"
          ></g-image>
          <div v-html="edge.node.title" class="text-primary-800"></div>
        </div>
      </div>
    </div>
    <!-- Frontend Tools -->
    <div class="mb-3">
      <div class="font-bold text-primary-900 mb-2">JavaScript (Front End)</div>
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="(edge, i) in $static.allFrontendTool.edges"
          :key="i"
          class="w-1/5 px-4 flex flex-col items-center"
        >
          <g-image
            :src="edge.node.image"
            :alt="edge.node.alt"
            class="mb-1"
          ></g-image>
          <div v-html="edge.node.title" class="text-primary-800"></div>
        </div>
      </div>
    </div>
    <!-- Backend Tools -->
    <div class="mb-3">
      <div class="font-bold text-primary-900 mb-2">Backend</div>
      <div class="flex flex-wrap -mx-4">
        <div
          v-for="(edge, i) in $static.allBackendTool.edges"
          :key="i"
          class="w-1/5 px-4 flex flex-col items-center"
        >
          <g-image
            :src="edge.node.image"
            :alt="edge.node.alt"
            class="mb-1"
          ></g-image>
          <div v-html="edge.node.title" class="text-primary-800"></div>
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
  allStylingTool (order: ASC) {
    edges {
      node {
        title,
        image (width: 65, height: 65, fit: contain, background: "transparent")
        alt
      }
    }
  }
  allFrontendTool (order: ASC) {
    edges {
      node {
        title,
        image (width: 65, height: 65, fit: contain, background: "transparent")
        alt
      }
    }
  }
  allBackendTool (order: ASC) {
    edges {
      node {
        title,
        image (width: 65, height: 65, fit: contain, background: "transparent")
        alt
      }
    }
  }
}
</static-query>
