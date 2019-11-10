<template>
  <div class="mb-4" :id="id">
    <div class="text-3xl text-primary-900 leading-tight">{{ title }}</div>
    <div class="text-xl text-primary-800">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
    id: { type: String },
  },
};
</script>
