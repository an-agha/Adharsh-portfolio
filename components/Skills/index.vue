<template>
  <section
    id="about"
    class="section gap-y-4 md:gap-y-6 pt-10 pb-24">
    <h2 class="text-4xl md:text-5xl">
      My Skills
    </h2>
    <div class="flex max-lg:justify-center flex-wrap gap-4">
      <SkillsCard
        v-for="(skill, index) in skills"
        v-bind="skill"
        :delay="index"
        :key="index" />
    </div>
  </section>
</template>
