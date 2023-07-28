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
      <NuxtLink
        v-if="ctaLabel"
        class="mt-12 md:mt-16 bg-blue py-4 px-9 text-white font-bold xl:text-[30px] text-[16px] md:text-[20px]"
        >{{ ctaLabel }}</NuxtLink
      >
    </div>
    <img
      class="absolute left-0 right-0 w-full h-[600px] -z-10"
      src="~assets/images/heroimage-background.png" />
  </section>
</template>

<script setup>
// const title = "Soluciones Innovadoras, Ingeniería de Vanguardia";

// const btnLabel = "Conoce nuestras filiales";

const props = defineProps({
  ctaLabel: String,
  ctaUrl: String,
  title: String,
  topLabel: String,
  image: String,
});

const { ctaLabel, ctaUrl, title, topLabel } = props;
</script>
