<template>
  <div
    class="mb-[60px] flex flex-col lg:grid lg:grid-cols-[35%_35%_25%] lg:gap-x-[80px]">
    <div class="flex flex-col">
      <p class="text-dark-blue body-bold">
        <PrismicText :field="title" />
      </p>
      <p class="mt-[30px]">
        <span v-if="lang == 'es'" class="text-dark-blue body-bold"
          >Categoría:</span
        >
        <span v-if="lang == 'en'" class="text-dark-blue body-bold"
          >Category:</span
        >
        <span class="body-reg"><PrismicText :field="category" /></span>
      </p>
      <p class="mt-[12px]">
        <span v-if="lang == 'es'" class="text-dark-blue body-bold"
          >Ubicacion:</span
        >
        <span v-if="lang == 'en'" class="text-dark-blue body-bold"
          >Location:</span
        >
        <span><PrismicText :field="location" class="body-reg" /></span>
      </p>
    </div>
    <div class="mt-5">
      <span>
        <PrismicText :field="full_description" class="body-reg" />
      </span>
    </div>
    <div class="mt-5">
      <AnchorIcon
        :labelBtn="career_cta_label[0].text"
        :urlTo="career_cta.url" />
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const lang = locale.value;
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
