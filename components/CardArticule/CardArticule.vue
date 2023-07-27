<template>
  <article
    class="grid grid-cols-1 grid-rows-[50%_50%] bg-light-baby-blue h-[480px] lg:h-[580]">
    <div class="flex justify-center items-center">
      <img src="~assets/logos/LogoGrupoNutecES.svg" alt="" />
    </div>
    <div
      class="flex flex-col justify-between bg-blue text-white p-8 pb-[60px] md:pb-[40px] lg:pb-[60px]">
      <h5 class="text-[24px] font-semibold md:text-[30px]">{{ title }}</h5>
      <p class="font-founders-grosteskers font-bold">{{ paragraph }}</p>
      <AnchorIcon :labelBtn="labelBtn" whiteText="true" />
    </div>
  </article>
</template>

<script setup>
const title = "División Fibras";
const paragraph =
  "Conoce nuestro newsroom enfocado en Hornos industriales altamente especializados";
const labelBtn = "Visita el Newsroom de NUTEC Bickley";
</script>
