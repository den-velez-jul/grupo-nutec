<template>
  <article
    class="grid grid-cols-1 grid-rows-[50%_50%] bg-light-baby-blue h-[480px] lg:h-[580]">
    <div class="flex justify-center items-center">
      <img :src="image.url" alt="" />
    </div>
    <div
      class="flex flex-col justify-between bg-blue text-white p-8 pb-[60px] md:pb-[40px] lg:pb-[60px]">
      <h5 class="text-[24px] font-semibold md:text-[30px]">
        <PrismicText :field="title" />
      </h5>
      <p class="font-founders-grosteskers font-bold">
        <PrismicText :field="description" />
      </p>
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
console.log(props);
</script>
