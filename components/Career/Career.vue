<template>
  <div
    class="mb-[60px] flex flex-col lg:grid lg:grid-cols-[35%_35%_25%] lg:gap-x-[80px]">
    <div class="flex flex-col">
      <p class="text-dark-blue font-bold md:text-[18px] xl:text-[20px]">
        <PrismicText :field="title" />
      </p>
      <p class="mt-[30px]">
        <span class="text-dark-blue text-[14px] md:text-[16px]"
          >Categoría:</span
        >
        <span class="text-[14px] md:text-[16px]"
          ><PrismicText :field="category"
        /></span>
      </p>
      <p class="mt-3 text-[14px] md:text-[16px]">
        <span class="text-dark-blue text-[14px] md:text-[16px]"
          >Ubicacion:</span
        >
        <span
          ><PrismicText :field="location" class="text-[14px] md:text-[16px]"
        /></span>
      </p>
    </div>
    <div class="mt-5">
      <span>
        <PrismicText
          :field="full_description"
          class="font-founders-grosteskers font-bold text-[14px] md:text-[16px] xl:text-[20px] xl:leading-[28px] xl:font-normal" />
      </span>
    </div>
    <div class="mt-5"><AnchorIcon labelBtn="Aplicar" /></div>
  </div>
</template>

<script setup>
const props = defineProps({
  careerProps: {
    title: String,
    title_for_feed: String,
    category: String,
    location: String,
    full_description: String,
    full_description: String,
    career_cta: String,
    career_cta_label: String,
  },
});

const {
  title,
  title_for_feed,
  category,
  location,
  description,
  full_description,
  career_cta,
  career_cta_label,
} = props.careerProps.data;
</script>
