<script setup>
const screenHeight = ref(0)

const showScroll = ref(true)
const handleShowScroll = () => showScroll.value = window.scrollY < screenHeight.value * 0.1
onMounted(() => {
  screenHeight.value = screen.height
  document.addEventListener('scroll', handleShowScroll)
})
onBeforeUnmount(() => document.removeEventListener('scroll', handleShowScroll))

const handleScrollDown = () => scrollBy(0, screenHeight.value * 0.9)
</script>

<template>
  <header class="relative grid content-center max-md:justify-items-center justify-center gap-4 max-w-6xl min-h-dvh mx-auto px-3 sm:px-12">
    <NuxtImg
      :src="profile.image"
      :alt="profile.name"
      data-aos="fade"
      data-aos-delay="300"
      class="h-32 rounded-lg md:justify-self-end" />

    <h1
      data-aos="zoom-out-up"
      class="text-4xl sm:text-6xl md:text-7xl max-sm:text-center leading-normal">
      👋
      Hi, I'm
      {{ profile.name }}
    </h1>

    <p
      data-aos="fade"
      data-aos-delay="400"
      class="max-sm:px-3 max-sm:text-center text-secondary/60 text-xl">
      {{ profile.description }}
    </p>

    <div
      data-aos="fade-right"
      data-aos-delay="800">
      <NuxtLink
        :to="{ hash: '#about' }"
        class="flex items-center gap-x-2 w-fit px-3 py-2 bg-secondary hover:bg-accent text-accent hover:text-secondary ring-2 ring-inset ring-secondary rounded-md duration-500">
        <span>
          About Me
        </span>
      </NuxtLink>
    </div>

    <Transition>
      <div
        v-show="showScroll"
        class="absolute left-1/2 bottom-5 flex flex-col items-center gap-y-2 -translate-x-1/2">
        <button
          class="grid content-center aspect-square p-1.5 bg-secondary rounded-full animate-bounce"
          @click="handleScrollDown">
          <Icon
            name="mi:chevron-double-down"
            size="24"
            color-accent />
        </button>
        <span class="animate-pulse">
          Scroll Down
        </span>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 400ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
