<template>
  <article
    class="p-8 lg:p-[28px] xl:p-5 flex flex-col font-founders-grosteskers">
    <div
      class="flex justify-between lg:flex-row-reverse lg:justify-end lg:items-center">
      <h2
        class="text-[35px] text-dark-blue font-bold md:text-[50px] lg:text-[50px] lg:ml-5 xl:text-[40px]">
        <PrismicText :field="title" />
      </h2>
      <img :src="icon.url" class="h-[48px] w-[52px]" />
    </div>
    <p
      class="mt-[21.5px] font-bold font-founders-grosteskers lg:text-[16px] leading-[22px] xl:text-[20px] xl:leading-[28px]">
      <PrismicText :field="description" />
    </p>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  icon: String,
  description: String,
});

const { title, image, description } = props;
</script>
