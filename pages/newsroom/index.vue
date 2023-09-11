<template>
  <div class="mt-[96px] lg:mt-[144px]">
    <TopBanner :labelList="['Newsroom']" />
  </div>
  <section
    v-if="heroNews"
    class="relative flex h-[800px] w-full px-6 md:px-[50px] lg:px-[270px]">
    <div
      class="flex flex-col justify-center font-founders-grosteskers text-white z-10">
      <span class="heading3">
        <PrismicRichText :field="heroNews.article_top_label" />
      </span>
      <h1 class="mt-[30px] heading1">
        <PrismicRichText :field="heroNews.article_title" />
      </h1>
      <p class="mt-[40px] body-bold">
        <PrismicRichText :field="heroNews.article_author" />
      </p>
      <p class="mt-[16px] body-reg">
        {{ heroNews.article_date }}
      </p>
      <p>
        <PrismicRichText
          :field="heroNews.article_description"
          class="mt-5 body-reg" />
      </p>
      <div class="flex justify-start mt-10">
        <PrismicLink
          target="_blank"
          :field="heroNews.article_cta_link"
          class="flex items-center text-white">
          <span class="text-big">
            {{ heroNews.article_cta_label[0].text }}
          </span>
          <img src="~assets/icons/arrow-white.svg" class="ml-3" />
        </PrismicLink>
      </div>
    </div>
    <div
      class="absolute left-0 right-0 w-full h-[800px] -z-8 opacity-[.8] bg-black"></div>
    <div class="absolute left-0 right-0 h-[800px] -z-10">
      <img
        :src="heroNews.article_image.url"
        class="w-full h-full object-cover" />
    </div>
  </section>
  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section
      v-if="headlineNews"
      id="headlineNews"
      class="pt-[100px] md:pt-[80px] lg:pt-[150px] lg:pb-[100px]">
      <h4 v-if="lang == 'es'" class="heading3 text-dark-blue text-center">
        Artículos y Editoriales
      </h4>
      <h4 v-if="lang == 'en'" class="heading3 text-center text-dark-blue">
        Articles and Editorials
      </h4>
      <div
        class="mt-[60px] lg:grid lg:grid-cols-2 lg:mt-[70px] lg:gap-x-[60px]">
        <div class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            :src="headlineNews.article_image.url"
            class="h-[300px] md:h-[524px] w-full object-cover" />
        </div>
        <div class="font-founders-grosteskers">
          <h1 class="text-blue mt-8 lg:mt-0 heading1">
            <PrismicRichText :field="headlineNews.article_title" />
          </h1>
          <p class="mt-[30px] md:mt-[50px] lg:mt-[60px] body-bold">
            <PrismicRichText :field="headlineNews.article_author" />
          </p>
          <p class="mt-[30px] md:mt-[40px] lg:mt-[30px] body-reg">
            {{ headlineNews.article_date }}
          </p>
          <p class="mt-[15px] lg:mt-5 body-reg">
            <PrismicRichText :field="headlineNews.article_description" />
          </p>
          <div class="flex justify-start mt-[30px] lg:mt-10">
            <PrismicLink
              :field="headlineNews.article_cta_link"
              class="flex items-center text-dark-blue">
              <span class="text-big">
                {{ headlineNews.article_cta_label[0].text }}
              </span>
              <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
    <section
      id="groupNews"
      class="pt-[80px] pb-[60px] md:pt-[70px] lg:pt-[100px] lg:pb-[150px]">
      <div
        class="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
        <div class=" " v-for="news of cardNews">
          <CardArticle
            :title="news.article_title"
            :image="news.article_image"
            :author="news.article_author"
            :date="news.article_date"
            :ctaLabel="news.article_cta_label"
            :ctaLink="news.article_cta_link" />
        </div>
      </div>
      <div class="flex justify-start mt-[30px] xl:mt-[50px]">
        <a class="flex items-center text-dark-blue" href="newsroom-list">
          <span v-if="lang == 'es'" class="text-big">
            Explora Todos los Articulos y Editoriales
          </span>
          <span v-if="lang == 'en'" class="text-big">
            Explore All Articles and Editorials
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </section>

    <section class="pb-[60px]">
      <div class="lg:px-5 xl:px-[225px]">
        <h4
          v-if="lang == 'es'"
          class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8">
          Próximos Eventos
        </h4>
        <h4
          v-if="lang == 'en'"
          class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8">
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
const { localeProperties, locale } = useI18n();
const lang = locale.value;
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";

const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage", { lang: localeIso })
);

const { data: news } = await useAsyncData("news", () =>
  client.getAllByType("article", { lang: localeIso })
);

const homeData = home.value.data;
const newsList = news.value;

const events = {
  title: homeData.events_title,
  topLabel: homeData.event_top_label,
  place: homeData.event_place,
  dateStart: homeData.event_date_start,
  dateEnd: homeData.event_date_end,
  ctaLabel: homeData.events_cta_label,
  ctaLink: homeData.events_cta_link,
};

let heroNews = null;
let headlineNews = null;
let cardNews = [];

newsList.forEach((news) => {
  if (news.tags.length > 0) {
    const dateToTransfom = news.data.article_date
      ? new Date(news.data.article_date)
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

    if (news.tags.includes("Hero")) {
      heroNews = { ...news.data, article_date: dataFormatted };
      return;
    } else {
      headlineNews = { ...news.data, article_date: dataFormatted };
    }
  }

  const dateToTransfom = news.data.article_date
    ? new Date(news.data.article_date)
    : new Date();

  const dateFixed = format(dateToTransfom, "dd/MM/yyyy", { locale: es });

  const dataUpdated = {
    ...news.data,
    article_date: dateFixed,
  };
  cardNews.push(dataUpdated);
  return;
});
</script>
