<template>
  <div class="text-dark-blue lg:w-[60%]">
    <p class="text-[20px] font-bold md:text-6 xl:text-[30px]">
      {{ topLabel }}
    </p>
    <h3 class="py-5">
      {{ title }}
    </h3>
    <div>
      <a
        :href="ctaUrl"
        class="flex w-full text-[20px] lg:text-[30px] xl:text-[30px] text-dark-blue">
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
