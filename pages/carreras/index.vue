<template>
  <div class="pt-[146px]">
    <TopBanner :labelList="['Carreras']" />
  </div>
  <Hero
    :title="hero.title"
    :topLabel="hero.topLabel"
    :ctaLabel="null"
    :ctaLink="null"
    :bgMedia="hero.bgMedia" />
  <section
    class="pt-[80px] pb-[60px] mx-6 md:mx-[50px] lg:pb-0 lg:pt-[150px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <div class="">
      <h4 class="heading3 text-center text-dark-blue">
        <PrismicText :field="careerFeedData.career_title" />
      </h4>
      <p
        class="mt-[48px] mb-[70px] text-dark-blue lg:mb-[140px] xl:text-center body-reg">
        <PrismicText :field="careerFeedData.career_description" />
      </p>
    </div>
    <div v-for="career of careerList">
      <Career :careerProps="career" />
    </div>
  </section>
</template>

<script setup>
const { client } = usePrismic();
const { data: careerFeed } = await useAsyncData("careerFeed", () =>
  client.getByUID("career_feed", "careerpage")
);

const { data: career } = await useAsyncData("career", () =>
  client.getAllByType("career")
);

const careerFeedData = careerFeed.value.data;
const careerList = career.value;

const hero = {
  title: careerFeedData.title[0].text,
  topLabel: careerFeedData.top_label[0].text,
  bgMedia: [{ image: { ...careerFeedData.image }, video: {} }],
};
</script>
