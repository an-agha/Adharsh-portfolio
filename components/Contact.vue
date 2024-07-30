<script setup>
const getURL = ({ type, ...data }) => {
  switch(type) {
    case 'phone':
      return `tel:${data.number}`
    case 'email':
      return `mailto:${data.email}`
    case 'sms':
      return `sms:${data.number}`
    case 'whatsapp':
      return `https://wa.me/${data.number}`
    default:
      return data.link
  }
}

const contactLinks = computed(() => contacts.map(({ type, icon, ...data }) => ({
  type,
  icon,
  href: getURL({ type, ...data }),
})))
</script>

<template>
  <footer class="flex flex-col gap-y-4 w-full max-w-5xl mx-auto pt-18 pb-32 px-4">
    <h2 class="text-4xl md:text-5xl">
      Get in Touch
    </h2>
    <strong class="text-secondary/60">
      Let's build something together.
    </strong>

    <ul class="flex justify-end flex-wrap gap-6 list-none">
      <li
        v-for="({ icon, type, href }) in contactLinks"
        :key="type">
        <NuxtLink
          :href
          target="_blank"
          class="group grid place-content-center size-12 bg-secondary hover:bg-accent rounded-full ring-2 ring-inset ring-secondary duration-500">
          <Icon
            :name="icon"
            class="bg-accent group-hover:bg-secondary size-6 group-hover:size-7 duration-300" />
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>
