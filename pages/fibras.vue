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
      class="py-[60px] xl:py-[100px] xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <ArticleTwo :articleProps="fibrasDescription" />
    </section>
  </div>

  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section class="pb-[60px] pt-[80px] md:pt-[120px]">
      <h4 class="text-center text-dark-blue mb-[60px]">Nuestras compañias</h4>
      <div
        class="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-[50px] lg:grid-cols-3">
        <div v-for="company of companyProps" class="flex flex-col">
          <div
            class="h-[100px] py-5 bg-light-baby-blue md:h-[180px] md:py-[60px] lg:h-[220px] flex justify-center items-center">
            <img :src="company.logo.url" alt="" class="h-full object-cover" />
          </div>
          <div
            class="flex flex-col flex-grow justify-between bg-dark-blue text-white p-6 lg:p-8 lg:pb-[60px]">
            <div>
              <h4 class="pb-5 text-[20px] font-bold lg:text-[40px] lg:pb-10">
                <PrismicText :field="company.title" />
              </h4>
              <p
                class="pb-[30px] font-bold font-founders-grosteskers lg:text-[20px]">
                <PrismicText :field="company.description" />
              </p>
              <p class="font-bold font-founders-grosteskers lg:text-[20px]">
                <PrismicText :field="company.location" />
              </p>
            </div>
            <a
              v-if="company.ctaLabel.length > 0"
              :href="company.ctaUrl.url"
              class="pt-8 flex w-full text-[16px] md:text-[20px] font-bold font-founders-grosteskers xl:text-[30px]">
              <span class="font-bold"> {{ company.ctaLabel }} </span>
              <img src="~assets/icons/arrow-white.svg" class="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-[60px] pt-[80px] md:pt-[120px]">
      <ArticleHeader
        topLabel="PRODUCTOS E INGENIERÍA"
        title="Creados para los Desafíos Térmicos más Extremos"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="h-full mt-[60px] grid grid-cols-1 gap-y-[40px] lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[50px]">
        <div v-for="product of productPropsSorted">
          <CardProduct
            :companyProps="product.productProps"
            :redTitle="product.redTitle"
            :anchorLeft="product.anchorLeft"
            :title="product.title" />
        </div>
      </div>
    </section>
    <section class="pb-[60px] pt-[80px] md:pt-[120px]">
      <ArticleHeader
        topLabel="SOLUCIONES DE INGENIERÍA"
        title="Soluciones de Ingeniería Innovadoras y Personalizadas"
        ctaLabel="Conoce más"
        ctaUrl="" />
      <div
        class="h-full mt-[60px] grid grid-cols-1 gap-y-[40px] lg:grid-cols-3 lg:gap-x-10 lg:gap-y-[50px]">
        <div v-for="solution of solutionsPropsSorted">
          <CardProduct
            :companyProps="solution.solutionsProps"
            :redTitle="solution.redTitle"
            :anchorLeft="solution.anchorLeft"
            :title="solution.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: fibras } = await useAsyncData("fibras", () =>
  client.getByUID("about_us", "nutec-fibras")
);

const { data: companies } = await useAsyncData("companies", () =>
  client.getAllByType("company", {
    orderings: [{ field: "company_sort_position", direction: "asc" }],
  })
);

const { data: products } = await useAsyncData("products", () =>
  client.getAllByEveryTag(["fibras", "products"])
);

const { data: solutions } = await useAsyncData("solutions", () =>
  client.getAllByEveryTag(["fibras", "solutions"])
);

const fibrasData = fibras.value.data;
const productList = products.value;
const companyList = companies.value;
const solutionsList = solutions.value;

const hero = {
  title: fibrasData.top_title[0].text,
  topLabel: fibrasData.top_label[0].text,
  bgMedia: [{ image: { ...fibrasData.imagen_fondo }, video: {} }],
};

const fibrasDescription = {
  title: fibrasData.titulo,
  description: fibrasData.descripcion,
  image: fibrasData.imagen,
  ctaLabel: fibrasData.cta_label,
  ctaLink: fibrasData.cta_link,
};

const companyProps = companyList.map((item) => {
  const data = item.data;
  return {
    title: data.company_name,
    description: data.company_description,
    location: data.company_ubication,
    ctaLabel: data.company_cta_label[0] ? data.company_cta_label[0].text : "",
    ctaUrl: data.company_cta_url,
    logo: data.company_logo,
  };
});

const productProps = productList.map((item) => {
  const data = item.data;
  return {
    productProps: {
      cta_link1: data.product_cta_link,
      cta_label1: data.product_cta_label[0].text,
      imagen: data.producto_image,
      description: data.product_description,
    },
    title: data.product_name[0].text,
    redTitle: false,
    anchorLeft: true,
    position: data.product_sort_post,
  };
});

const solutionsProps = solutionsList.map((item) => {
  const data = item.data;
  return {
    solutionsProps: {
      cta_link1: data.product_cta_link,
      cta_label1: data.product_cta_label[0].text,
      imagen: data.producto_image,
      description: data.product_description,
    },
    title: data.product_name[0].text,
    redTitle: false,
    anchorLeft: true,
    position: data.product_sort_post,
  };
});

const productPropsSorted = productProps.sort((a, b) => a.position - b.position);

const solutionsPropsSorted = solutionsProps.sort(
  (a, b) => a.position - b.position
);
</script>
