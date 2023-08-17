<template>
  <TopBanner :labelList="['Newsroom', 'Artículos y Editoriales']" />
  <div class="bg-baby-blue">
    <section
      id="headlineNews"
      class="pt-[100px] pb-[80px] md:pt-[80px] lg:pt-[150px] lg:pb-[100px] mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
      <h4 class="heading3 text-center text-dark-blue">
        Artículos y Editoriales
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
            <PrismicText :field="headlineNews.article_title" />
          </h1>
          <p class="mt-[30px] md:mt-[50px] lg:mt-[60px] body-bold">
            <PrismicText :field="headlineNews.article_author" />
          </p>
          <p class="mt-[30px] md:mt-[40px] lg:mt-[30px] body-reg">
            {{ headlineNews.article_date }}
          </p>
          <p class="mt-[15px] lg:mt-5 body-reg">
            <PrismicText :field="headlineNews.article_description" />
          </p>
          <div
            v-if="headlineNews.article_cta_label"
            class="flex justify-start mt-[30px] lg:mt-10">
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
  </div>

  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section
      id="groupNews"
      class="pb-[70px] pt-[70px] md:pt-[80px] md:pb-[70px] lg:pt-[40px] lg:pb-[100px] xl:pb-[150px]">
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
    </section>

    <section class="pb-[60px] lg:px-5 xl:px-[225px]">
      <h4
        class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8">
        Proximos Eventos
      </h4>
      <CardEvent :cardEventProps="event" />
      <div class="mt-8 w-full">
        <a href="/" class="flex items-center">
          <span class="text-big text-dark-blue">
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
import { format } from "date-fns";
import { es } from "date-fns/locale";

const { data: news } = await useAsyncData("news", () =>
  client.getAllByType("article", {
    orderings: [{ field: "article_date", direction: "asc" }],
  })
);

const { data: events } = await useAsyncData("events", () =>
  client.getAllByType("event")
);

const newsList = news.value;
const latestEvent = events.value[0].data;

const event = {
  title: latestEvent.title,
  topLabel: latestEvent.label,
  place: latestEvent.location,
  dateStart: latestEvent.start_day,
  dateEnd: latestEvent.end_day,
  ctaLabel: latestEvent.event_cta_label[0].text,
  ctaLink: latestEvent.event_cta,
};

let headlineNews;
let cardNews = [];

newsList.forEach((news, index) => {
  if (index === 0) {
    if (news.data.article_date) {
      const dateUpdated = format(
        new Date(news.data.article_date),
        "dd MMMM yyyy",
        {
          locale: es,
        }
      );
      const dateUpdatedArray = dateUpdated.split(" ");
      const dataFormatted =
        dateUpdatedArray[0] +
        " de " +
        dateUpdatedArray[1] +
        " de " +
        dateUpdatedArray[2];

      news.data.article_date = dataFormatted;
    }
    headlineNews = news.data;
    return;
  }

  if (news.data.article_date) {
    const dateUpdated = format(new Date(news.data.article_date), "dd/MM/yyyy", {
      locale: es,
    });

    news.data.article_date = dateUpdated;
  }
  cardNews.push(news.data);
});

console.log(cardNews);
</script>
