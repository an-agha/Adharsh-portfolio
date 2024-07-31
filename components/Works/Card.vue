<script setup>
defineProps({
  cover: {
    type: String,
    required: false,
    default: '',
  },
  coverType: {
    type: String,
    required: false,
    default: '',
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
  tags: {
    type: Array,
    required: false,
    default: [],
  },
  urls: {
    type: Array,
    required: false,
    default: [],
  },
  delay: {
    type: Number,
    required: false,
    default: 0,
  },
})
</script>

<template>
  <article
    data-aos="fade-up"
    :data-aos-delay="100 * delay"
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
    <UIChips
      :chips="tags"
      class="mt-auto"
      chip-class="bg-secondary/5 font-bold text-xs" />
    <UIChips
      :chips="urls"
      class="pt-2"
      chip-class="bg-secondary hover:bg-secondary/75 text-primary font-semibold text-xs">
      <template #chip="{data}">
        <NuxtLink
          :to="data.link"
          target="_blank"
          :key="data.link"
          class="px-2 py-1 bg-secondary hover:bg-secondary/75 text-primary font-semibold text-xs rounded-md duration-300">
          {{ data.text }}
        </NuxtLink>
      </template>
    </UIChips>
  </div>
</article>
</template>
