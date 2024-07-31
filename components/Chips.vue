<script setup>
defineProps({
  chips: {
    type: Array,
    required: true,
  },
  chipClass: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <slot
      v-for="chip in chips"
      name="chip"
      :data="chip"
      :key="chip">
      <span
        class="px-2 py-1 rounded-md"
        :class="[chipClass]">
        {{ chip }}
      </span>
    </slot>
  </div>
</template>
