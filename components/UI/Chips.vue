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
  <ul class="flex flex-wrap gap-2 list-none">
    <li
      v-for="chip in chips"
      :key="chip">
      <slot
        name="chip"
        :data="chip">
        <span
          class="px-2 py-1 rounded-md"
          :class="[chipClass]">
          {{ chip }}
        </span>
      </slot>
    </li>
  </ul>
</template>
