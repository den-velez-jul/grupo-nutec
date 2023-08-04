<template>
  <div class="flex flex-col h-full bg-blue">
    <img
      :src="image.url"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px] object-cover" />
    <div class="p-10 flex flex-col flex-grow justify-between">
      <div class="text-white font-founders-grosteskers font-bold">
        <h5 v-if="title" class="text-[24px] leading-[32px] xl:text-[30px]">
          {{ title[0].text }}
        </h5>
        <p v-if="title" class="mt-6 xl:text-[20px]">{{ author[0].text }}</p>
        <p v-if="title" class="mt-2 xl:text-[20px]">Publicado: {{ date }}</p>
      </div>
      <div class="mt-10">
        <PrismicLink
          :field="ctaLink"
          class="bg-dark-blue p-4 text-white lg:text-[20px]">
          Conoce más
        </PrismicLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  author: String,
  date: String,
  ctaLabel: String,
  ctaLink: String,
});

const { title, image, author, date, ctaLabel, ctaLink } = props;
</script>
