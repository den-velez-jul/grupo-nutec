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
      <ArticleTwo :articleProps="bickleyDescription" />
    </section>
  </div>

  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1720px] xl:px-[100px]">
    <section class="pt-[80px] pb-[60px] md:pt-[120px] lg:pt-[150px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of ovensCeramicList"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of ovensMetalsList"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of sistemsList"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of servicesList"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: bickley } = await useAsyncData("home", () =>
  client.getByUID("about_us", "nutec-bickley")
);

const { data: ovensCeramic } = await useAsyncData("ovensCeramic", () =>
  client.getAllByTag("ceramicos")
);

const { data: ovensMetals } = await useAsyncData("ovensMetals", () =>
  client.getAllByTag("metalicos")
);

const { data: sistems } = await useAsyncData("sistems", () =>
  client.getAllByTag("sistemas")
);

const { data: services } = await useAsyncData("services", () =>
  client.getAllByTag("servicios")
);

const bickleyData = bickley.value.data;

const hero = {
  title: bickleyData.top_title[0].text,
  topLabel: bickleyData.top_label[0].text,
  bgMedia: [{ image: { ...bickleyData.imagen_fondo }, video: {} }],
};

const bickleyDescription = {
  title: bickleyData.titulo[0],
  description: bickleyData.descripcion,
  image: bickleyData.imagen,
  ctaLabel: bickleyData.cta_label,
  ctaLink: bickleyData.cta_link,
};

const ovensCeramicList = ovensCeramic.value.map((item) => {
  return {
    companyProps: {
      description: item.data.product_description,
      imagen: item.data.producto_image,
      cta_link1: item.data.product_cta_link,
      cta_label1: item.data.product_cta_label[0].text,
    },
    title: item.data.product_name[0].text,
    redTitle: true,
    anchorLeft: true,
  };
});

const ovensMetalsList = ovensMetals.value.map((item) => {
  return {
    companyProps: {
      description: item.data.product_description,
      imagen: item.data.producto_image,
      cta_link1: item.data.product_cta_link,
      cta_label1: item.data.product_cta_label[0].text,
    },
    title: item.data.product_name[0].text,
    redTitle: true,
    anchorLeft: true,
  };
});

const sistemsList = sistems.value.map((item) => {
  return {
    companyProps: {
      description: item.data.product_description,
      imagen: item.data.producto_image,
      cta_link1: item.data.product_cta_link,
      cta_label1: item.data.product_cta_label[0].text,
    },
    title: item.data.product_name[0].text,
    redTitle: true,
    anchorLeft: true,
  };
});

const servicesList = services.value.map((item) => {
  return {
    companyProps: {
      description: item.data.product_description,
      imagen: item.data.producto_image,
      cta_link1: item.data.product_cta_link,
      cta_label1: item.data.product_cta_label[0].text,
    },
    title: item.data.product_name[0].text,
    redTitle: false,
    anchorLeft: true,
  };
});

console.log(sistemsList);
</script>
