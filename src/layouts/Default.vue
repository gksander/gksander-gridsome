<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <section class="flex-grow overflow-auto bg-gray-200">
      <div class="sm:p-10">
        <div class="bg-white max-w-2xl mx-auto shadow-2xl">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
