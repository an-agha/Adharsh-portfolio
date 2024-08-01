<template>
  <section
    v-if="experiences.length"
    class="section gap-y-4 md:gap-y-6 pt-10 pb-24 md:pb-32">
    <h2 class="text-4xl md:text-5xl">
      Experience
    </h2>
    <ul class="flex flex-col gap-y-8 list-none">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        v-bind="experience"
        :delay="index"
        :key="index" />
    </ul>
  </section>
</template>
