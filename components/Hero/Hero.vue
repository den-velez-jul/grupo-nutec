<template>
  <section class="relative flex justify-center items-center h-[600px] w-full">
    <div
      class="flex flex-col items-center px-6 md:px-[50px] lg:px-[75px] xl:px-[270px]">
      <span
        v-if="topLabel"
        class="text-white uppercase font-founders-grosteskers font-bold mb-6 md:mb-[30px] md:text-[30px] lg:mb-[40px] xl:mb-[48px]"
        >{{ topLabel }}</span
      >
      <h1 class="text-white text-center">
        {{ title }}
      </h1>
      <PrismicLink
        v-if="ctaLink"
        :field="ctaLink"
        class="mt-12 md:mt-16 bg-blue py-4 px-9 text-white font-bold xl:text-[30px] text-[16px] md:text-[20px]"
        >{{ ctaLabel }}
      </PrismicLink>
    </div>
    <ClientOnly>
      <div class="absolute left-0 right-0 w-full h-[600px] -z-10">
        <iframe
          class="w-full h-full"
          v-if="videoOptions"
          autoplay
          :src="videoOptions"
          title="Grupo Nutec"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write; encrypted-media"
          preload="none"
          muted
          playsinline
          loop></iframe>
      </div>
    </ClientOnly>
    <img
      v-if="!video.url && image.url"
      class="absolute left-0 right-0 w-full h-[600px] -z-10"
      :src="image.url" />
  </section>
  <div v-if="divisions" class="bg-baby-blue">
    <Divisions :divisions="divisions[0].items" />
  </div>
</template>

<script setup>
const props = defineProps({
  ctaLabel: String,
  ctaLink: String,
  title: String,
  topLabel: String,
  bgMedia: String,
  divisions: String,
});

const { ctaLabel, ctaLink, title, topLabel, bgMedia, divisions } = props;

const { image, video } = bgMedia[0];

const videoOptions =
  video.url +
  "?controls=0&rel=0&version=3&autoplay=1&showinfo=0&loop=1&playsinline=1&amp;";
</script>
