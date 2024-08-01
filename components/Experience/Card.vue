<script setup>
defineProps({
  company: {
    type: Object,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  duration: {
    type: Object,
    required: true,
  },
  skills: {
    type: Array,
    requried: false,
    default: () => [],
  },
  image: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <li
    class="relative flex gap-x-4 pb-6
    [&:not(:first-child)]:before:content-[''] before:absolute -before:top-8 before:left-4.5 md:before:left-5.5 before:h-8 before:border-l-dashed before:border-secondary/20
    after:content-[''] after:absolute after:top-0 after:left-4.5 md:after:left-5.5 after:h-full after:border-l-dashed after:border-secondary/20">
    <img
      :src="image"
      class="size-10 md:size-12 object-contain p-2 bg-primary border-solid border-secondary/20 rounded-full z-1" />
    <div class="flex flex-col gap-y-1">
      <h3>
        {{ role }}
      </h3>
      <NuxtLink
        :to="company.website"
        target="_blank"
        class="text-secondary text-sm font-semibold">
        {{ company.name }}
      </NuxtLink>
      <span class="text-sm text-secondary/60">
        {{ duration.from }} - {{ duration.to }}
      </span>
      <span class="text-sm text-secondary/60">
        {{ company.location }}
      </span>
      <div
        v-if="skills.length"
        class="flex items-baseline flex-wrap gap-x-2 gap-y-1 mt-1">
        <span class="text-sm font-bold">
          Skills:
        </span>
        <UIChips
          :chips="skills"
          chip-class="bg-secondary text-primary font-semibold text-xs" />
      </div>
    </div>
  </li>
</template>
