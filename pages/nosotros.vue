<template>
  <Hero
    :title="hero.title"
    :topLabel="hero.topLabel"
    :ctaLabel="null"
    :ctaLink="null"
    :bgMedia="hero.bgMedia"
    :divisions="hero.divisions" />
  <div class="bg-baby-blue">
    <section
      class="py-[60px] xl:py-[100px] xl:max-w-[1720px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <ArticleTwo :articleProps="aboutUsDescription" />
    </section>
  </div>

  <Timeline :timelineData="timelineProps" />

  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <div class="pb-[60px] pt-[80px] md:pt-[120px]">
      <h4 class="heading3 text-center text-dark-blue pb-[32px] lg:pb-[48px]">
        Nuestro propósito
      </h4>
      <div class="lg:grid lg:grid-cols-3 w-full justify-items-center">
        <div v-for="card of nutecPurposeList">
          <CardValue
            :title="card.purpose_title"
            :icon="card.purpose_image"
            :description="card.purpose_description" />
        </div>
      </div>
    </div>
    <div class="pb-[60px] pt-[80px] md:pt-[60px]">
      <h4 class="heading3 text-center text-dark-blue pb-[32px] md:pb-[48px]">
        Valores Fundamentales
      </h4>
      <div
        class="lg:grid lg:grid-cols-3 xl:grid-cols-4 w-full justify-items-center">
        <div v-for="card of nutecValuesList">
          <CardValue
            :title="card.values_title"
            :icon="card.values_image"
            :description="card.values_description"
            titleReduced />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: aboutUs } = await useAsyncData("aboutUs", async () => {
  const document = await client.getByUID("about_us", "nutec-nosotros");

  if (document) {
    return document;
  } else {
    null;
  }
});

const { data: timeline } = await useAsyncData("timeline", async () => {
  const document = await client.getByUID("timeline", "nutec-timeline");
  if (document) {
    return document;
  } else {
    null;
  }
});

const aboutUsData = aboutUs.value.data;

const hero = {
  title: aboutUsData.top_title[0].text,
  topLabel: aboutUsData.top_label[0].text,
  bgMedia: [{ image: { ...aboutUsData.imagen_fondo }, video: {} }],
};

const aboutUsDescription = {
  title: aboutUsData.titulo,
  description: aboutUsData.descripcion,
  image: aboutUsData.imagen,
  ctaLabel: aboutUsData.cta_label,
  ctaLink: aboutUsData.cta_link,
  topLabel: aboutUsData.top_label_description,
};

const nutecPurposeList = aboutUsData.purpose;
const nutecValuesList = aboutUsData.values;

const timelineData = timeline.value.data || [];
const timelineDates = [...timeline.value.data.range_time];

const firstRange = [...timelineDates.splice(0, 8)];
const secondRange = [...timelineDates];

const firstRangeUpper = [];
const firstRangeLower = [];
const secondRangeUpper = [];
const secondRangeLower = [];
const firstRangeLabel = timelineData.range_time_labels[0].range_time_label;
const secondRangeLabel = timelineData.range_time_labels[1].range_time_label;
const futureLabel = timelineData.timeline_future_label;
const futureDescription = timelineData.timeline_future_description;
const futureLowerLabel = timelineData.timeline_future_low_label;

firstRange.forEach((item, index) => {
  const indexFixed = index + 1;
  if (indexFixed % 2 != 0) {
    firstRangeUpper.push(item);
  } else {
    firstRangeLower.push(item);
  }
});

secondRange.forEach((item, index) => {
  const indexFixed = index + 1;
  if (indexFixed % 2 != 0) {
    secondRangeUpper.push(item);
  } else {
    secondRangeLower.push(item);
  }
});

const timelineProps = {
  firstRangeUpper,
  firstRangeLower,
  secondRangeUpper,
  secondRangeLower,
  firstRangeLabel,
  secondRangeLabel,
  futureLabel,
  futureDescription,
  futureLowerLabel,
};
</script>
