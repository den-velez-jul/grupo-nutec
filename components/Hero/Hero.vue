<template>
  <section class="relative flex justify-center items-center h-[600px] w-full">
    <div
      class="flex flex-col items-center px-6 md:px-[50px] lg:px-[75px] xl:px-[270px]">
      <h1 class="text-white text-center">
        {{ title }}
      </h1>
      <NuxtLink
        class="mt-12 md:mt-16 bg-blue py-4 px-9 text-white font-bold xl:text-[30px] text-[16px] md:text-[20px]"
        >{{ btnLabel }}</NuxtLink
      >
    </div>
    <nuxt-img
      class="absolute left-0 right-0 w-full h-[600px] -z-10"
      src="/images/dummy.png" />
  </section>
</template>

<script setup>
const title = "Soluciones Innovadoras, Ingeniería de Vanguardia";

const btnLabel = "Conoce nuestras filiales";
</script>
