<template>
  <TopBanner :labelList="['Contacto']" />
  <Hero
    :title="hero.title"
    :topLabel="hero.topLabel"
    :ctaLabel="null"
    :ctaLink="null"
    :bgMedia="hero.bgMedia" />
  <div>
    <section class="bg-dark-blue py-12">
      <div
        class="xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
        <div>
          <h2 class="text-white heading2">
            <PrismicText :field="formLabelsData.title" />
          </h2>
          <p class="text-white mt-[30px]">
            <PrismicText :field="formLabelsData.description" />
          </p>
        </div>
        <div class="mt-[90px]">
          <h3 class="text-light-blue heading3">
            <PrismicText :field="formLabelsData.moreWays" />
          </h3>
          <div class="grid grid-col-1 gap-5 mt-[32px]">
            <div
              v-for="way of formLabelsData.otherWays"
              class="flex items-center">
              <img :src="way.icon.url" />
              <p class="body-reg text-white ml-5">
                <span><PrismicText :field="way.text" /></span>
              </p>
            </div>
          </div>
        </div>
        <Form></Form>
      </div>
    </section>
    <section
      class="py-[80px] xl:py-[100px] xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <h3 class="heading3 text-dark-blue">
        <PrismicText :field="contactData.label_companias" />
      </h3>
      <h2 class="heading2 text-dark-blue mt-5">
        <PrismicText :field="contactData.titulo_companias" />
      </h2>
      <div class="mt-[60px] mb-[50px] grid grid-cols-1 gap-10 md:grid-cols-2">
        <div v-for="division of companiesList" class="flex flex-col">
          <div
            class="w-full h-[240px] bg-baby-blue flex justify-center items-center">
            <img :src="division.iimagen_companias.url" />
          </div>
          <div class="flex-grow p-8 md:flex md:flex-col md:justify-between">
            <div class="mb-10">
              <h3 class="heading3 text-dark-blue">
                <PrismicText :field="division.sub_companias" />
              </h3>
              <p class="body-bold text-dark-blue mt-2">
                <PrismicText :field="division.label_sub_companias" />
              </p>
              <p class="body-reg text-dark-blue mt-[30px] lg:mt-[40px]">
                <PrismicText :field="division.descripcion_compania" />
              </p>
            </div>
            <div>
              <AnchorIcon
                :label-btn="division.link_cta_label[0].text"
                :url-to="division.link_cta" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-baby-blue py-12">
      <div
        class="xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
        <h3 class="heading3 text-center mb-10 text-dark-blue">
          <PrismicText :field="mapsData.title" />
        </h3>
        <div class="flex justify-center">
          <img :src="mapsData.image.url" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: contact } = await useAsyncData("contacto", () =>
  client.getByUID("contact", "contact")
);

const contactData = contact.value.data;

const hero = {
  title: contactData.top_title[0].text,
  topLabel: contactData.top_label[0].text,
  bgMedia: [{ image: { ...contactData.top_image }, video: {} }],
};

const formLabelsData = {
  title: contactData.form_title,
  description: contactData.form_description,
  moreWays: contactData.more_ways_title,
  otherWays: contactData.more_ways,
  btnLabel: contactData.form_button_label,
};
const companiesList = contactData.companias;

const mapsData = {
  title: contactData.map_label,
  image: contactData.world_map,
};

console.log();
// const companyPropsSorted = companyProps.sort((a, b) => a.position - b.position);
</script>
