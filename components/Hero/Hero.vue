<template>
  <section
    class="relative flex justify-center items-center h-[700px] md:h-[600px] lg:h-[800px] w-full">
    <div
      class="flex flex-col items-center px-6 md:px-[50px] lg:px-[75px] xl:px-[270px]">
      <span
        v-if="topLabel"
        class="text-white uppercase heading3 mb-6 md:mb-[30px] md:text-[30px] lg:mb-[40px] xl:mb-[48px]"
        >{{ topLabel }}</span
      >
      <h1 class="heading1 text-white text-center z-10">
        {{ title }}
      </h1>
      <PrismicLink
        v-if="ctaLink"
        :field="ctaLink"
        class="mt-12 md:mt-16 bg-blue py-4 px-9 text-white text-big z-10"
        >{{ ctaLabel }}
      </PrismicLink>
    </div>
    <div
      v-if="video.url"
      class="absolute left-0 right-0 w-full h-full -z-8 opacity-[.8] bg-black"></div>
    <video
      v-if="video.url"
      preload="none"
      playsinline
      muted
      autoplay
      loop
      class="w-full h-full object-cover absolute left-0 right-0 -z-10">
      <source :src="video.url" type="video/mp4" />
    </video>
    <div
      v-if="!video.url && image.url"
      class="absolute left-0 right-0 h-[600px] -z-10">
      <img :src="image.url" class="w-full h-full object-cover" />
    </div>
  </section>
  <div v-if="divisions" class="bg-baby-blue"></div>
</template>

<script setup>
const props = defineProps({
  ctaLabel: String,
  ctaLink: String,
  title: String,
  topLabel: String,
  bgMedia: String,
  divisions: Array,
});

const { ctaLabel, ctaLink, title, topLabel, bgMedia, divisions } = props;

const { image, video } = bgMedia[0];
</script>
