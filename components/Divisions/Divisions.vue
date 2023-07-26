<template>
  <section
    class="grid lg:flex lg:justify-end grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-y-[30px] py-5 px-6">
    <div
      v-for="division of divisionsData"
      class="flex font-bold font-founders-grosteskers lg:max-w-[500px] lg:ml-[70px]">
      <div class="w-[152px] h-[32px]">
        <nuxt-img
          :src="division.logoPath"
          alt=""
          class="w-full h-full"
          fit="cover" />
      </div>
      <div>
        <p>{{ division.description }}</p>
        <div class="flex justify-end">
          <a href="" class="flex items-center">
            <span class="font-semibold"> Conoce Más </span>
            <nuxt-img src="/icons/arrow-dark-blue.svg" class="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const divisionsData = [
  {
    logoPath: "/logos/LogoGrupoNutecES.svg",
    description:
      "Soluciones Térmicas de Alto Rendimiento para tus Desafíos de Aislamiento",
    url: "/",
  },
  {
    logoPath: "/logos/LogoNutecGroupEN.svg",
    description:
      "Soluciones Térmicas de Alto Rendimiento para tus Desafíos de Aislamiento",
    url: "/",
  },
];
</script>
