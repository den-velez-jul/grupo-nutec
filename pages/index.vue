<template>
  <div class="mt-[96px] lg:mt-[144px]">
    <Hero
      :title="hero.title"
      :cta-label="hero.ctaLabel"
      :bgMedia="hero.bgMedia"
      :internalLink="'#companies'"
      :divisions="hero.divisions" />
  </div>
  <div class="bg-baby-blue w-full">
    <section
      id="description"
      class="py-[60px] bg-baby-blue xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <h4 class="text-dark-blue heading3 text-center lg:text-left lg:mb-[80px]">
        <PrismicRichText :field="description.topLabel" />
        {{ descrptopLabel }}
      </h4>
      <ArticleOne :descriptionProps="description" />
    </section>
  </div>
  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section
      id="companies"
      class="pb-[80px] pt-[60px] md:pb-[100px] md:pt-[70px] lg:pt-[150px]">
      <h4 class="text-center text-dark-blue heading3">
        <PrismicRichText :field="companies.title" />
      </h4>
      <div
        class="grid mt-10 md:mt-[60px] lg:mt-12 gap-y-[30px] md:grid-cols-2 md:gap-x-10">
        <Card
          v-for="company of companies.companiesList"
          :companyProps="company"
          :anchor-left="true" />
      </div>
    </section>
    <section id="tiendaNutec" class="pb-[80px]">
      <div class="mt-8 lg:mt-12 lg:grid lg:grid-cols-[50%_50%]">
        <div class="lg:col-start-2 lg:col-end-3">
          <img
            src="~assets/images/dummy2.png"
            class="w-full h-[200px] md:h-[440px] lg:h-[100%] object-cover lg:object-[unset]" />
        </div>
        <div
          class="p-8 pt-6 bg-dark-blue text-white lg:py-[78px] lg:px-[74px] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:flex lg:flex-col lg:justify-between xl:h-full">
          <h2 class="heading1 text-center md:text-left">
            <PrismicRichText :field="nutecShop.title" />
          </h2>
          <PrismicRichText
            :field="nutecShop.description"
            class="body-reg mt-6 mb-14 md:mt-10" />

          <div class="flex justify-center md:justify-start">
            <PrismicLink
              target="_blank"
              :field="nutecShop.ctaLink"
              class="bg-white py-4 px-5 text-dark-blue text-big">
              {{ nutecShop.ctaLabel }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
    <section id="groupNews" class="pb-[80px] lg:pb-[100px]">
      <h4>
        <PrismicRichText
          :field="homeData.articles_title"
          class="heading3 text-center text-dark-blue lg:text-left" />
      </h4>
      <div
        class="mt-[60px] lg:grid lg:grid-cols-2 lg:mt-[70px] lg:h-[688px] lg:gap-x-[60px] xl:h-[588px]">
        <div class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            :src="homeData.image_article.url"
            class="h-[300px] md:h-[524px] w-full object-cover" />
        </div>
        <div>
          <h1 class="heading1 text-blue mt-8 lg:m-0">
            <PrismicRichText :field="divisionsNews.nutecGroup.title1" />
          </h1>
          <p class="mt-[30px] md:mt-[50px] lg:mt-[60px] xl:mt-[70px] body-bold">
            <PrismicRichText :field="divisionsNews.nutecGroup.author" />
          </p>
          <p class="mt-[30px] md:mt-[40px] body-reg">
            {{ divisionsNews.nutecGroup.date }}
          </p>
          <p class="mt-[15px] md:mt-[20px] body-reg">
            <PrismicRichText
              :field="divisionsNews.nutecGroup['description-news']" />
          </p>
          <div class="flex justify-start mt-[30px] lg:mt-[40px]">
            <a
              target="_blank"
              href="newsroom/articles/grupo-nutec-anuncia-nuevo-presidente-para-nutec-division-fibras"
              :field="divisionsNews.nutecGroup.link_button"
              class="flex items-center text-dark-blue">
              <span class="text-big">
                {{ divisionsNews.nutecGroup.label_button }}
              </span>
              <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      id="divisionNews"
      class="grid grid-rows-2 gap-y-10 md:grid-rows-1 md:grid-cols-2 md:gap-x-10 pb-[100px] md:pb-[80px] lg:pb-[100px] xl:pb-[150px]">
      <CardArticule :cardArticleProps="divisionsNews.nutecFibras" />
      <CardArticule :cardArticleProps="divisionsNews.nutecBickley" />
      <AnchorIcon
        v-if="lang == 'es'"
        urlTo="/newsroom-list"
        labelBtn="Explora Todos los Artículos y Editoriales" />
      <AnchorIcon
        v-if="lang == 'en'"
        urlTo="/newsroom-list"
        labelBtn="Explore All Articles and Editorials" />
    </section>
    <section class="pb-[60px]">
      <div class="lg:px-5 xl:px-[255px]">
        <h4
          v-if="lang == 'es'"
          class="mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8 heading3">
          Próximos Eventos
        </h4>
        <h4
          v-if="lang == 'en'"
          class="mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8 heading3">
          Upcoming Events
        </h4>
        <CardEvent :cardEventProps="events" />
      </div>
      <div class="mt-8 w-full">
        <a href="/eventos" class="flex items-center">
          <span
            v-if="lang == 'es'"
            class="text-big text-dark-blue hover:text-mid-blue">
            Conoce eventos anteriores
          </span>
          <span
            v-if="lang == 'en'"
            class="text-big text-dark-blue hover:text-mid-blue">
            Discover Previous Events
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage", { lang: localeIso })
);
const lang = locale.value;
const homeData = home.value.data;

const hero = {
  title: homeData.top_title[0].text,
  ctaLabel: homeData.cta_label,
  ctaLink: homeData.cta_link,
  bgMedia: homeData.top_slides,
};

const description = {
  topLabel: homeData.descriptionTopLabel,
  title: homeData.descriptionTitle,
  image: homeData.descriptionImage,
  linkLabel: homeData.descriptionLinkLabel,
  linkUrl: { url: "/nosotros" },
};

const companies = {
  title: homeData.companies_title,
  companiesList: homeData.companias,
};

const nutecShop = {
  title: homeData.shop_title,
  description: homeData.shop_description,
  ctaLink: homeData.shop_cta_link,
  ctaLabel: homeData.shop_cta_label,
};

const dateToTransfom = homeData.group_news[0].date
  ? new Date(homeData.group_news[0].date)
  : new Date();
let dataFormatted;
if (locale.value == "es") {
  const dateUpdated = format(dateToTransfom, "dd MMMM yyyy", {
    locale: es,
  });
  const dateUpdatedArray = dateUpdated.split(" ");
  dataFormatted =
    dateUpdatedArray[0] +
    " de " +
    dateUpdatedArray[1] +
    " de " +
    dateUpdatedArray[2];
} else {
  const dateUpdated = format(dateToTransfom, "MMMM dd yyyy", {
    locale: enUS,
  });
  const dateUpdatedArray = dateUpdated.split(" ");
  dataFormatted =
    dateUpdatedArray[0] +
    " " +
    dateUpdatedArray[1] +
    ", " +
    dateUpdatedArray[2];
}

const divisionsNews = {
  nutecGroup: { ...homeData.group_news[0], date: dataFormatted },
  nutecFibras: {
    image: homeData.group_division_fibras[0].image_fibras,
    title: homeData.group_division_fibras[0].title_fibras,
    description: homeData.group_division_fibras[0].description_fibras,
    ctaLabel: homeData.group_division_fibras[0].cta_button,
    ctaUrl: homeData.group_division_fibras[0].cta_button_link,
  },
  nutecBickley: {
    image: homeData.group_bickley[0].image_bickley,
    title: homeData.group_bickley[0].title_bickley,
    description: homeData.group_bickley[0].description_bickley,
    ctaLabel: homeData.group_bickley[0].label_bickley,
    ctaUrl: homeData.group_bickley[0].link_bickley_cta,
  },
};

const events = {
  title: homeData.events_title,
  topLabel: homeData.event_top_label,
  place: homeData.event_place,
  dateStart: homeData.event_date_start,
  dateEnd: homeData.event_date_end,
  ctaLabel: homeData.events_cta_label,
  ctaLink: homeData.events_cta_link,
};
</script>
