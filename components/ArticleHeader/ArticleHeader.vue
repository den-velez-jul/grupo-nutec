<template>
  <div class="text-dark-blue lg:w-[66%]">
    <p class="uppercase text-big text-[20px] md:text-6 xl:text-[30px]">
      {{ topLabel }}
    </p>
    <h3 class="heading2 mt-5">
      {{ title }}
    </h3>
    <div class="mt-5">
      <a
        :href="ctaUrl"
        target="_blank"
        class="flex w-full text-big text-dark-blue">
        <span class="font-bold"> {{ ctaLabel }} </span>
        <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topLabel: String,
  title: String,
  ctaLabel: String,
  ctaUrl: String,
});

const { topLabel, title, ctaLabel, ctaUrl } = props;
</script>
