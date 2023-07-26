<template>
  <Hero />
  <div class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-[100px]">
    <Divisions />
    <section
      class="pb-[80px] pt-[60px] md:pb-[100px] md:pt-[70px] lg:pt-[150px]">
      <h4 class="text-center text-dark-blue">Un Grupo, Dos Divisiones</h4>
      <div
        class="grid mt-10 md:mt-[60px] lg:mt-12 gap-y-[30px] md:grid-cols-2 md:gap-x-10">
        <Card />
        <Card />
      </div>
    </section>
    <section>
      <h4 class="text-dark-blue">Esto es Grupo NUTEC</h4>
      <h1 class="text-dark-blue">
        Líder mundial en el desarrollo de Soluciones Innovadoras en Insulación
        Industria
      </h1>
      <div class="flex justify-end">
        <a href="" class="flex items-center">
          <span class="font-semibold"> Conoce más sobre Grupo NUTEC </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="" />
        </a>
      </div>
      <img
        src="~assets/images/dummy.png"
        class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px]" />
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);
</script>

<script></script>
