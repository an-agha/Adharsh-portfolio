<template>
  <header class="relative grid content-center max-md:justify-items-center justify-center gap-4 max-w-6xl min-h-dvh mx-auto px-3 sm:px-12">
    <img
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
      class="max-sm:px-3 max-sm:text-center opacity-60 text-xl">
      {{ profile.description }}
    </p>

    <NuxtLink
      :to="{ hash: '#about' }"
      data-aos="fade-right"
      data-aos-delay="800"
      class="flex items-center gap-x-2 w-fit px-3 py-2 bg-dark text-accent rounded-md decoration-none cursor-pointer">
      <span>
        About Me
      </span>
    </NuxtLink>

    <div class="absolute left-1/2 bottom-5 flex flex-col items-center gap-y-2 -translate-x-1/2">
      <div class="grid content-center aspect-square p-1.5 bg-dark rounded-full animate-bounce">
        <Icon
          name="mi:chevron-double-down"
          size="24"
          color-accent />
      </div>
      <span class="animate-pulse">
        Scroll Down
      </span>
    </div>
  </header>
</template>
