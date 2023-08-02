<template>
  <div class="lg:grid lg:grid-cols-[55%_42%] lg:gap-x-10">
    <div class="mb-[80px]">
      <h1
        class="text-dark-blue text-center mt-10 mb-5 lg:text-left lg:mt-0 lg:mb-10">
        <PrismicText :field="title" />
      </h1>
      <p class="my-10">
        <PrismicText :field="description" />
      </p>
      <div class="flex justify-center lg:justify-start">
        <a :href="ctaLink" class="flex items-center text-dark-blue">
          <span class="font-bold md:text-[20px] xl:text-[30px]">
            {{ ctaLabel }}
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </div>
    <div>
      <img :src="image.url" class="w-full h-[430px]" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  articleProps: {
    title: String,
    description: String,
    ctaLabel: String,
    ctaLink: String,
    image: String,
  },
});

const { title, description, ctaLabel, ctaLink, image } = props.articleProps;
</script>
