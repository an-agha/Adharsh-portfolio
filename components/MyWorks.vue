<template>
  <section class="section gap-y-4 md:gap-y-6 pb-24 md:pb-32">
    <h2 class="text-4xl md:text-5xl">
      My Works
    </h2>
    <div class="flex max-lg:justify-center flex-wrap gap-4 md:gap-6">
      <article
          v-for="({
            cover,
            coverType,
            title,
            description,
            tags,
            urls,
          }, index) in works"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="100 * index"
          class="flex flex-col w-full max-w-72 min-h-64 border-solid border-secondary/10 rounded-lg overflow-hidden">
        <img
          v-if="coverType === 'image'"
          :src="cover"
          class="w-full h-42 object-cover object-top" />
        <video
          v-else="coverType === 'video'"
          :src="cover"
          autoplay
          loop
          muted
          class="w-full h-42 object-cover object-top">
        </video>
        <div class="flex flex-col h-full p-3">
          <strong class="text-lg">
            {{ title }}
          </strong>
          <p class="text-sm text-secondary/60">
            {{ description }}
          </p>
          <div class="flex flex-wrap gap-2 mt-auto">
            <span
              v-for="tag in tags"
              :key="tag"
              class="px-2 py-1 bg-secondary/5 font-bold text-xs rounded-md">
              {{ tag }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2 pt-2">
            <NuxtLink
              v-for="({ link, text }) in urls"
              :to="link"
              target="_blank"
              :key="link"
              class="px-2 py-1 bg-secondary hover:bg-secondary/75 text-primary font-semibold text-xs rounded-md duration-300">
              {{ text }}
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
