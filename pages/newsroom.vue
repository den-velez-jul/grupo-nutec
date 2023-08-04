<template>
  <section
    class="relative flex h-[800px] w-full px-6 md:px-[50px] lg:px-[270px]">
    <div
      class="flex flex-col justify-center font-founders-grosteskers text-white z-10">
      <span class="font-bold md:text-[20px] xl:text-[30px]">
        <PrismicText :field="firstNews.article_top_label" />
      </span>
      <h1
        class="mt-[30px] text-[35px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
        <PrismicText :field="firstNews.article_title" />
      </h1>
      <p class="mt-[40px]">
        <PrismicText :field="firstNews.article_author" />
      </p>
      <p class="mt-[16px]">
        {{ firstNews.article_date }}
      </p>
      <p class="mt-5">
        <PrismicText :field="firstNews.article_description" />
      </p>
      <div class="flex justify-start mt-10">
        <PrismicLink
          :field="firstNews.article_cta_link"
          class="flex items-center text-white">
          <span class="font-semibold md:text-[20px] xl:text-[30px]">
            {{ firstNews.article_cta_label[0].text }}
          </span>
          <img src="~assets/icons/arrow-white.svg" class="ml-3" />
        </PrismicLink>
      </div>
    </div>
    <div
      class="absolute left-0 right-0 w-full h-[800px] -z-8 opacity-[.8] bg-black"></div>
    <div class="absolute left-0 right-0 h-[800px] -z-10">
      <img :src="heroNews.article_image.url" class="w-full h-full" />
    </div>
  </section>
  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section
      id="firstNews"
      class="pt-[100px] pb-[80px] md:pt-[80px] lg:pt-[150px] lg:pb-[100px]">
      <h4
        class="text-[24px] font-bold text-center font-founders-grosteskers text-dark-blue md:text-[30px] xl:text-[40px]">
        Artículos y Editoriales
      </h4>
      <div
        class="mt-[60px] lg:grid lg:grid-cols-2 lg:mt-[70px] lg:gap-x-[60px]">
        <div class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            :src="firstNews.article_image.url"
            class="h-[300px] md:h-[524px] w-full object-cover" />
        </div>
        <div class="font-founders-grosteskers">
          <h1 class="text-blue mt-8 lg:mt-0 xl:text-[70px]">
            <PrismicText :field="firstNews.article_title" />
          </h1>
          <p class="mt-[30px] md:mt-[50px] lg:mt-[60px] xl:text-[20px]">
            <PrismicText :field="firstNews.article_author" />
          </p>
          <p class="mt-[30px] md:mt-[40px] lg:mt-[30px] xl:text-[20px]">
            {{ firstNews.article_date }}
          </p>
          <p class="mt-[15px] lg:mt-5 xl:text-[20px]">
            <PrismicText :field="firstNews.article_description" />
          </p>
          <div class="flex justify-start mt-[30px] lg:mt-10">
            <PrismicLink
              :field="firstNews.article_cta_link"
              class="flex items-center text-dark-blue">
              <span class="font-semibold md:text-[20px] xl:text-[30px]">
                {{ firstNews.article_cta_label[0].text }}
              </span>
              <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
    <section
      id="groupNews"
      class="pb-[60px] md:pt-[70px] lg:pt-[100px] lg:pb-[150px]">
      <div
        class="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
        <div class=" " v-for="news of regularNews">
          <CardArticle
            :title="news.data.article_title"
            :image="news.data.article_image"
            :author="news.data.article_author"
            :date="news.data.article_date"
            :ctaLabel="news.data.article_cta_label"
            :ctaLink="news.data.article_cta_link" />
        </div>
      </div>
      <div class="flex justify-start mt-[30px] xl:mt-[50px]">
        <PrismicLink
          :field="firstNews.article_cta_link"
          class="flex items-center text-dark-blue">
          <span class="font-semibold md:text-[20px] xl:text-[30px]">
            Explora Todos los Articulos y Editoriales
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </PrismicLink>
      </div>
    </section>

    <section class="pb-[60px] lg:px-5 xl:px-[225px]">
      <h4 class="mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8">
        Proximos Eventos
      </h4>
      <CardEvent :cardEventProps="events" />
      <div class="mt-8 w-full">
        <a href="/" class="flex items-center">
          <span
            class="font-founders-grosteskers font-semibold md:text-[20px] text-dark-blue">
            Conoce eventos anteriores
          </span>
          <img src="/assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);

const { data: news } = await useAsyncData("news", () =>
  client.getAllByType("article")
);

const homeData = home.value.data;
const newsData = news.value;

const events = {
  title: homeData.events_title,
  topLabel: homeData.event_top_label,
  place: homeData.event_place,
  dateStart: homeData.event_date_start,
  dateEnd: homeData.event_date_end,
  ctaLabel: homeData.events_cta_label,
  ctaLink: homeData.events_cta_link,
};

const heroNews = news.value[0].data;
const firstNews = news.value[2].data;
const regularNews = [...news.value.slice(2)];
</script>
