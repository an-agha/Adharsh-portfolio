<template>
  <section
    id="about"
    class="section gap-y-4 md:gap-y-6 pb-24 md:pb-32 pt-10">
    <h2 class="text-4xl md:text-5xl">
      My Skills
    </h2>
    <div class="flex max-lg:justify-center flex-wrap gap-4">
      <artice
        v-for="({ title, icon, backgroundColor, description }, index) in skills"
        data-aos="zoom-out-down"
        :data-aos-delay="100 * index"
        class="flex flex-col gap-y-4 w-xs p-3 border-solid border-secondary/10 rounded-lg"
        :key="index">
        <h3 class="flex items-center gap-x-2 text-xl">
          <div
            class="grid items-center p-2 rounded-full"
            :style="{ backgroundColor }">
            <Icon
              :name="icon"
              color-white />
          </div>
          <span>
            {{ title }}
          </span>
        </h3>
        <p class="text-sm">
          {{ description }}
        </p>
      </artice>
    </div>
  </section>
</template>
