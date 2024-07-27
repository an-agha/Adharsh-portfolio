<template>
  <header class="relative grid content-center max-md:justify-items-center justify-center gap-4 max-w-5xl min-h-dvh mx-auto px-3">
    <h1
      data-aos="zoom-out-up"
      class="text-4xl sm:text-6xl md:text-7xl max-sm:text-center leading-normal sm:leading-relaxed">
      Hi, I'm
      {{ profile.name }}
      👋
    </h1>
    <p
      data-aos="fade"
      data-aos-delay="400"
      class="max-sm:px-3 max-sm:text-center text-light/75">
      {{ profile.description }}
    </p>
    <NuxtLink
      :to="{ hash: '#about' }"
      data-aos="fade-right"
      data-aos-delay="800"
      class="flex items-center gap-x-2 w-fit px-3 py-2 hover:bg-accent text-accent hover:text-dark rounded-md decoration-none cursor-pointer">
      <span>
        About Me
      </span>
      <Icon
        name="mi:chevron-double-right"
        size="24"
        class="max-md:hidden" />
    </NuxtLink>

    <div class="absolute left-1/2 bottom-5 flex flex-col items-center gap-y-2 -translate-x-1/2">
      <Icon
        name="mi:chevron-double-down"
        size="32"
        color-accent
        class="animate-[shake-y_5s_linear_infinite]" />
      <span class="animate-pulse">
        Scroll Down
      </span>
    </div>
  </header>
</template>
