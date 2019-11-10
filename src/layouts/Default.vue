<template>
  <div class="bg-gray-200 overflow-hidden">
    <div class="sm:p-10">
      <div class="bg-white max-w-2xl mx-auto shadow-2xl">
        <slot />
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
