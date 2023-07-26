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
    <section class="py-[60px]">
      <h4 class="text-dark-blue text-center xl:text-left xl:mb-[80px]">
        Esto es Grupo NUTEC
      </h4>
      <div class="xl:grid xl:grid-cols-[50%_50%] xl:gap-x-10">
        <div class="mb-[80px]">
          <h1
            class="text-dark-blue text-center mt-10 mb-5 xl:text-left xl:mt-0 xl:mb-10">
            Líder mundial en el desarrollo de Soluciones Innovadoras en
            Insulación Industria
          </h1>
          <div class="flex justify-center xl:justify-start">
            <a href="" class="flex items-center text-dark-blue">
              <span class="font-semibold md:text-[20px] xl:text-[30px]">
                Conoce más sobre Grupo NUTEC
              </span>
              <img src="~assets/icons/arrow-dark-blue.svg" class="" />
            </a>
          </div>
        </div>
        <div>
          <img src="~assets/images/dummy.png" class="w-full h-[430px]" />
        </div>
      </div>
    </section>
    <section class="pb-[80px]">
      <p
        class="text-[24px] font-bold text-center font-founders-grosteskers text-dark-blue md:text-[30px] xl:text-[40px]">
        Tienda NUTEC
      </p>
      <div class="mt-8 lg:mt-12 lg:grid lg:grid-cols-[50%_50%]">
        <div class="lg:col-start-2 lg:col-end-3">
          <img
            src="~assets/images/dummy2.png"
            class="w-full h-[200px] md:h-[440px] lg:h-[100%]" />
        </div>
        <div
          class="p-8 pt-6 bg-dark-blue text-white lg:py-[78px] lg:px-[74px] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:flex lg:flex-col lg:justify-between">
          <h2 class="text-center font-semibold md:text-left">
            Portafolio de Colchas de Aislamiento Térmico por NUTEC
          </h2>
          <p class="mt-6 mb-14 font-bold md:mt-10 lg:m-0">
            Las colchas aislantes de fibra de NUTEC son fáciles de instalar, no
            requieren curado ni tiempo de secado. Se puede lograr un
            calentamiento rápido con todas las colchas de fibra; no se
            agrietarán ni se astillarán y son resistentes a los choques
            térmicos. Estos productos ahorran energía, reducen la pérdida de
            calor y el almacenamiento de calor en comparación con otros
            productos refractarios duros.
          </p>
          <div class="flex justify-center md:justify-start">
            <NuxtLink class="bg-white py-4 px-5 text-dark-blue font-bold"
              >Conoce más</NuxtLink
            >
          </div>
        </div>
      </div>
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
