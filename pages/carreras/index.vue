<template>
  <div class="pt-[96px] lg:pt-[146px]">
    <TopBanner v-if="lang == 'es'" :labelList="['Carreras']" />
    <TopBanner v-if="lang == 'en'" :labelList="['Careers']" />
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
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();
const lang = locale.value;
const { data: careerFeed } = await useAsyncData("careerFeed", () =>
  client.getByUID("career_feed", "careerpage", { lang: localeIso })
);

const { data: career } = await useAsyncData("career", () =>
  client.getAllByType("career", { lang: localeIso })
);

const careerFeedData = careerFeed.value.data;
const careerList = career.value;

const hero = {
  title: careerFeedData.title[0].text,
  topLabel: careerFeedData.top_label[0].text,
  bgMedia: [{ image: { ...careerFeedData.image }, video: {} }],
};
</script>
