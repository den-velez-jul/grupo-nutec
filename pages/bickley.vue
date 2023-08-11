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
      <ArticleHeader
        topLabel="Hornos Industriales para Cerámica y Materiales Avanzados"
        title="Tecnología líder en la industria, resultados basados ​​en el rendimiento"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="pt-[60px] grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of ovensCeramicListSorted"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader
        topLabel="HORNOS INDUSTRIALES PARA METALES"
        title="Forja el futuro con nuestros Hornos Industriales para metales de alta tecnología"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="pt-[60px] grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of ovensMetalsListSorted"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader
        topLabel="SISTEMAS DE COMBUSTIÓN Y CONTROL"
        title="Eficiencia y sostenibilidad para tus necesidades de equipos térmicos industriales"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="pt-[60px] grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of sistemsListSorted"
          :companyProps="product.companyProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px]">
      <ArticleHeader
        topLabel="SERVICIOS DE FABRICACIÓN E INSTALACIÓN"
        title="Deja que los expertos de NUTEC Bickley hagan el trabajo por tu negocio"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="pt-[60px] grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card
          v-for="product of servicesListSorted"
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

const { data: ovensCeramic } = await useAsyncData("ovensCeramic", async () => {
  const document = await client.getAllByTag("ceramicos");
  if (document) {
    return document;
  } else {
    [];
  }
});

const { data: ovensMetals } = await useAsyncData("ovensMetals", async () => {
  const document = await client.getAllByTag("metalicos");
  if (document) {
    return document;
  } else {
    [];
  }
});

const { data: sistems } = await useAsyncData("sistems", async () => {
  const document = await client.getAllByTag("sistemas");
  if (document) {
    return document;
  } else {
    [];
  }
});

const { data: services } = await useAsyncData("services", async () => {
  const document = await client.getAllByTag("servicios");
  if (document) {
    return document;
  } else {
    [];
  }
});

const bickleyData = bickley.value.data;

const hero = {
  title: bickleyData.top_title[0].text,
  topLabel: bickleyData.top_label[0].text,
  bgMedia: [{ image: { ...bickleyData.imagen_fondo }, video: {} }],
};

const bickleyDescription = {
  title: bickleyData.titulo,
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
    position: item.data.product_sort_post,
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
    position: item.data.product_sort_post,
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
    position: item.data.product_sort_post,
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
    position: item.data.product_sort_post,
  };
});

const ovensCeramicListSorted = ovensCeramicList.sort(
  (a, b) => a.position - b.position
);

const ovensMetalsListSorted = ovensMetalsList.sort(
  (a, b) => a.position - b.position
);
const sistemsListSorted = sistemsList.sort((a, b) => a.position - b.position);
const servicesListSorted = servicesList.sort((a, b) => a.position - b.position);
</script>
