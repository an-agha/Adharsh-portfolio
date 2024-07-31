<template>
  <section class="section gap-y-4 md:gap-y-6 pb-24 md:pb-32">
    <h2 class="text-4xl md:text-5xl">
      My Works
    </h2>
    <div class="flex max-lg:justify-center flex-wrap gap-4 md:gap-6">
      <WorksCard
        v-for="(work, index) in works"
        v-bind="work"
        :delay="index"
        :key="index" />
    </div>
  </section>
</template>
