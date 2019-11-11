<template>
  <div
    :class="
      enlarged
        ? [
            'fixed',
            'inset-0',
            'flex',
            'flex-col',
            'bg-owhite',
            'items-center',
            'justify-center',
            'z-10',
            'px-8',
          ]
        : ['px-2']
    "
    @click="onBgClick"
  >
    <div class="flex justify-center mb-3 relative">
      <transition
        name="fade"
        mode="out-in"
        v-for="(image, i) in images"
        :key="i"
      >
        <g-image
          :src="image"
          v-show="i === currIndex"
          @click.stop="enlarged = true"
          class="cursor-pointer border rounded-lg"
        ></g-image>
      </transition>
      <!-- Left Icon -->
      <button
        class="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900"
        :style="{
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          left: `${-buttonSize / 2}px`,
          top: '50%',
          marginTop: `${-buttonSize / 2}px`,
        }"
        @click.stop="incrementIndex(-1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="arrowSize"
          :height="arrowSize"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <!-- Right Icon -->
      <button
        class="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900"
        :style="{
          width: `${buttonSize}px`,
          height: `${buttonSize}px`,
          right: `-${buttonSize / 2}px`,
          top: '50%',
          marginTop: `${-buttonSize / 2}px`,
        }"
        @click.stop="incrementIndex(1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="arrowSize"
          :height="arrowSize"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-right"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

    <!-- Close icon... -->
    <button
      v-if="enlarged"
      class="absolute p-2 top-0 right-0 mr-6 mt-6 rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900"
      @click="enlarged = false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, required: true },
  },
  data: () => ({
    currIndex: 0,
    enlarged: false,
  }),
  computed: {
    buttonSize() {
      return this.enlarged ? 48 : 36;
    },
    arrowSize() {
      return this.enlarged ? 24 : 18;
    },
  },
  methods: {
    onBgClick() {
      if (this.enlarged) this.enlarged = false;
    },
    incrementIndex(di) {
      let newIndex = this.currIndex + di;

      // Wrap left
      if (newIndex < 0) {
        this.currIndex = this.images.length - 1;
      }
      // Wrap right
      else if (newIndex > this.images.length - 1) {
        this.currIndex = 0;
      } else {
        this.currIndex = newIndex;
      }
    },
  },
};
</script>
