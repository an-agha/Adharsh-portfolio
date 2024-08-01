<script setup>
useHead({
  title: head.title || `${profile.name} | Profile`,
  link: {
    rel: 'icon',
    href: head.favicon,
  },
})
</script>

<template>
  <main>
    <slot />
  </main>
</template>
