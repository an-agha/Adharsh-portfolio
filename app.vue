<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  @apply m-0 p-0 font-sans box-border selection:bg-secondary selection:text-accent scroll-smooth;
}
body {
  @apply min-h-dvh bg-primary text-secondary;
}

button, a {
  @apply cursor-pointer;
}

button {
  @apply border-none;
}

a {
  @apply decoration-none;
}

.section {
  @apply flex flex-col w-full max-w-5xl mx-auto px-4;
}
</style>
