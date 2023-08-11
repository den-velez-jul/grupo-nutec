<template>
  <section
    id="headlineNews"
    class="bg-light-baby-blue pt-[50px] pb-[60px] lg:pt-[120px] xl:pt-[150px]">
    <div
      class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
      <div class="hidden lg:flex">
        <p class="body-bold text-blue">
          <PrismicText :field="headlineNews.article_top_label" />
        </p>
      </div>
      <div
        class="mt-[60px] lg:grid lg:grid-cols-2 lg:mt-[40px] lg:gap-x-[60px] xl:mt-[45px]">
        <div class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            :src="headlineNews.article_image.url"
            class="h-[300px] md:h-[524px] w-full object-cover" />
          <p
            class="hidden lg:flex items-center font-bold font-founders-grosteskers lg:mt-[20px] md:text-[20px] xl:text-[20px]">
            <span class="body-reg text-black">
              {{ headlineNews.article_date }}
            </span>
            <img
              src="~assets/icons/icon-time.svg"
              alt=""
              class="w-5 h-5 mx-2" />
            <span class="body-reg text-black">{{ timePublished }}</span>
          </p>
        </div>
        <div>
          <p
            class="font-founders-grosteskers font-bold text-[24px] mt-5 text-blue lg:hidden">
            <PrismicText :field="headlineNews.article_top_label" />
          </p>
          <div class="font-bold">
            <h1 class="text-blue heading1 mt-10 lg:mt-0">
              <PrismicText :field="headlineNews.article_title" />
            </h1>
            <p
              class="font-founders-grosteskers font-bold text-[24px] leading-[32px] mt-[35px] lg:mt-[70px] xl:text-[30px] xl:leading-[40px]">
              <PrismicText :field="headlineNews.article_description" />
            </p>
            <div class="mt-10">
              <p class="body-bold text-dark-blue">
                <PrismicText :field="headlineNews.article_author" />
              </p>
              <p class="flex items-center body-reg mt-[16px] lg:hidden">
                <span>
                  {{ headlineNews.article_date }}
                </span>
                <img
                  src="~assets/icons/icon-time.svg"
                  alt=""
                  class="w-5 h-5 mx-2" />
                <span>{{ timePublished }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="article">
    <slice-zone
      wrapper="section"
      :components="components"
      :slices="article.data.slices1" />
  </section>
  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section
      id="groupNews"
      class="pb-[60px] md:pt-[70px] lg:pt-[100px] lg:pb-[40px]">
      <h4
        class="heading3 mb-[40px] text-center text-dark-blue md:mb-[60px] xl:mb-[80px]">
        Artículos Relacionados
      </h4>
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
        <a class="flex items-center text-dark-blue">
          <span class="text-big">
            Explora Todos los Articulos y Editoriales
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { components } from "~/slices";
const { client } = usePrismic();
const route = useRoute();

const articleUID = route.params.article;
const { data: article } = await useAsyncData("article", async () => {
  const document = await client.getByUID("article", articleUID);

  if (document) {
    return document;
  } else {
    null;
  }
});
const { data: news } = await useAsyncData("news", async () => {
  const document = await client.getAllByType("article");
  if (document) {
    return document;
  } else {
    null;
  }
});

const newsList = news ? news.value : [];

let cardNews = [];
let headlineNews = { ...article.value.data };

newsList.forEach((news) => {
  cardNews.push(news.data);
});

const timePublished = "1 minuto";
</script>
