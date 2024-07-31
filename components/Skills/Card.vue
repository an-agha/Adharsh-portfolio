<script setup>
defineProps({
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
  icon: {
    type: String,
    required: false,
    default: '',
  },
  backgroundColor: {
    type: String,
    required: false,
    default: 'transparent',
  },
  delay: {
    type: Number,
    rquired: false,
    default: 0,
  },
})
</script>

<template>
  <artice
    data-aos="zoom-out-down"
    :data-aos-delay="delay * 100"
    :data-aos-once="true"
    class="flex flex-col gap-y-4 w-xs p-3 border-solid border-secondary/10 rounded-lg"
    :key="index">
    <h3 class="flex items-center gap-x-2 text-xl">
      <div
        v-if="icon"
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
</template>
