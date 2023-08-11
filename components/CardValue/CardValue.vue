<template>
  <article class="p-8 lg:p-[28px] xl:p-5 flex flex-col">
    <div
      class="flex justify-between h-[48px] md:h-[60px] lg:flex-row-reverse lg:justify-end lg:items-center xl:h-[80px]">
      <h2 v-if="!titleReduced" class="heading1 text-dark-blue lg:ml-3">
        <PrismicText :field="title" />
      </h2>
      <h2 v-if="titleReduced" class="heading3 text-dark-blue lg:ml-3">
        <PrismicText :field="title" />
      </h2>
      <img :src="icon.url" class="h-full w-auto" />
    </div>
    <p class="body-reg text-justify mt-4 lg:mt-[30px]">
      <PrismicText :field="description" />
    </p>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  description: String,
  titleReduced: Boolean,
});

const { title, image, description, titleReduced } = props;
</script>
