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
  <footer class="py-18 bg-secondary">
    <div class="section gap-y-4">
      <h2 class="text-4xl md:text-5xl text-accent">
        Get in Touch
      </h2>
      <strong class="text-primary">
        Let's build something together.
      </strong>

      <ul class="flex justify-end flex-wrap gap-6 list-none">
        <li
          v-for="({ icon, type, href }) in contactLinks"
          :key="type">
          <NuxtLink
            :href
            target="_blank"
            class="group grid place-content-center size-10 bg-accent hover:bg-secondary rounded-full ring-2 ring-inset ring-accent duration-500">
            <Icon
              :name="icon"
              class="bg-secondary group-hover:bg-accent size-5 group-hover:size-7 duration-300" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
