<template>
  <div class="flex flex-col bg-light-baby-blue">
    <nuxt-img
      :src="data.imagePath"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px]" />
    <h2 v-if="data.title != ''">{{ data.title }}</h2>
    <div class="p-8">
      <p class="text-[20px] xl:text-[30px] font-founders-grosteskers font-bold">
        {{ data.paragraph }}
      </p>
      <a
        href=""
        class="mt-8 flex justify-end w-full text-[20px] xl:text-[30px]">
        <span class="font-semibold"> {{ data.anchorLabel }} </span>
        <nuxt-img src="/icons/arrow-dark-blue.svg" class="" />
      </a>
    </div>
  </div>
</template>

<script setup>
const data = {
  imagePath: "/images/dummy.png",
  title: "",
  redTitle: false,
  paragraph:
    "NUTEC está transformando la Industria del Aislamiento Térmico a través de tecnologías innovadoras que mejoran la eficiencia y ayudan a compensar la huella de carbono.",
  anchorLabel: "Conoce Más Sobre NUTEC",
  anchorLink: "/",
};
</script>
