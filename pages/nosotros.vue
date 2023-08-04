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
      <h4 class="text-center text-dark-blue pb-6 md:pb-8">Nuestro propósito</h4>
      <div class="lg:grid lg:grid-cols-3">
        <div v-for="card of nutecPurposeList">
          <CardValue
            :title="card.purpose_title"
            :icon="card.purpose_image"
            :description="card.purpose_description" />
        </div>
      </div>
    </div>
    <div class="pb-[60px] pt-[80px] md:pt-[60px]">
      <h4 class="text-center text-dark-blue pb-6 md:pb-8">
        Valores Fundamentales
      </h4>
      <div class="lg:grid lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="card of nutecValuesList">
          <CardValue
            :title="card.values_title"
            :icon="card.values_image"
            :description="card.values_description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: aboutUs } = await useAsyncData("aboutUs", () =>
  client.getByUID("about_us", "nutec-nosotros")
);

const { data: timeline } = await useAsyncData("timeline", () =>
  client.getByUID("timeline", "nutec-timeline")
);

const aboutUsData = aboutUs.value.data;
const timelineProps = timeline.value.data;

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

// quick fix to render all dates
console.log(timelineProps);
</script>
