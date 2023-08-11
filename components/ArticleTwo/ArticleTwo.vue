<template>
  <h4 v-if="topLabel">
    <PrismicText
      :field="topLabel"
      class="heading3 mb-[80px] text-dark-blue text-center" />
  </h4>
  <div class="lg:grid lg:grid-cols-[58%_40%] lg:gap-x-10">
    <div class="mb-[80px]">
      <h1
        class="heading1 text-dark-blue text-center mt-10 mb-5 tracking-tight lg:text-left lg:mt-0 lg:mb-10">
        <PrismicText :field="title" />
      </h1>
      <p class="my-10">
        <PrismicRichText
          :field="description"
          class="body-reg flex flex-col space-y-4" />
      </p>
      <div v-if="ctaLabel" class="flex justify-center lg:justify-start">
        <a :href="ctaLink" class="flex items-center text-dark-blue">
          <span class="text-big">
            {{ ctaLabel }}
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </div>
    <div>
      <img :src="image.url" class="w-full h-[430px] object-cover" />
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
    topLabel: String,
  },
});

const { title, description, ctaLabel, ctaLink, image, topLabel } =
  props.articleProps;

console.log(title);
</script>
