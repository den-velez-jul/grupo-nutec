<template>
  <article class="flex flex-col bg-baby-blue">
    <div
      class="flex justify-center items-center p-[60px] h-[240px] lg:h-[290px] xl:h-[340px]">
      <img :src="image.url" alt="" class="object-contain" />
    </div>
    <div
      class="flex flex-col flex-grow justify-between bg-blue text-white p-8 pb-[60px] md:pb-[40px] lg:pb-[60px]">
      <div class="flex flex-col justify-between">
        <h5 class="heading3">
          <PrismicText :field="title" />
        </h5>
        <p class="py-6 md:py-[30px] xl:py-[40px] text-justify body-reg">
          <PrismicText :field="description" />
        </p>
      </div>
      <AnchorIcon :labelBtn="ctaLabel" whiteText="true" :urlTo="ctaUrl.url" />
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  cardArticleProps: {
    image: String,
    title: String,
    description: String,
    ctaLabel: String,
    ctaUrl: String,
  },
});

const { image, title, description, ctaLabel, ctaUrl } = props.cardArticleProps;
</script>
