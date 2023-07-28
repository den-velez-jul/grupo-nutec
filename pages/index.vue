<template>
  <Hero :title="heroData.title" :cta-label="heroData.ctaLabel" />
  <div class="bg-baby-blue w-full">
    <Divisions />
    <section
      class="py-[60px] bg-baby-blue xl:max-w-[1720px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <h4 class="text-dark-blue text-center lg:text-left lg:mb-[80px]">
        Esto es Grupo NUTEC
      </h4>
      <ArticleOne />
    </section>
  </div>
  <div
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1720px] xl:px-[100px]">
    <section
      class="pb-[80px] pt-[60px] md:pb-[100px] md:pt-[70px] lg:pt-[150px]">
      <h4 class="text-center text-dark-blue">Un Grupo, Dos Divisiones</h4>
      <div
        class="grid mt-10 md:mt-[60px] lg:mt-12 gap-y-[30px] md:grid-cols-2 md:gap-x-10">
        <Card />
        <Card />
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
    <section class="pb-[80px] lg:pb-[100px]">
      <p
        class="text-[24px] font-bold text-center font-founders-grosteskers text-dark-blue md:text-[30px] lg:text-left xl:text-[40px]">
        Ultimas noticias
      </p>
      <div
        class="mt-[60px] lg:grid lg:grid-cols-2 lg:mt-[70px] lg:h-[688px] lg:gap-x-[60px] xl:h-[588px]">
        <div class="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            src="~assets/images/dummy2.png"
            class="h-[300px] md:h-[524px] w-full" />
        </div>
        <div
          class="lg:flex lg:flex-col lg:justify-between font-founders-grosteskers">
          <h1 class="text-blue mt-8 lg:m-0">
            Grupo NUTEC anuncia Nuevo Presidente para NUTEC División Fibras
          </h1>
          <p class="mt-[30px] md:mt-[50px] lg:m-0 xl:text-[20px]">
            Por Grupo Nutec
          </p>
          <p class="mt-[30px] md:mt-[40px] lg:m-0 xl:text-[20px]">
            16 de mayo de 2023
          </p>
          <p class="mt-[15px] lg:m-0 xl:text-[20px]">
            Efectivo a partir del 1ero de mayo de 2023, Grupo NUTEC nombró a
            Gerardo Muraira como su nuevo Presidente de la División Fibras.
            Durante casi ocho años, Gerardo dirigió la subsidiaria
            norteamericana del grupo, NUTEC Inc.
          </p>
          <div class="flex justify-start mt-[30px] lg:m-0">
            <a href="" class="flex items-center text-dark-blue">
              <span class="font-semibold md:text-[20px] xl:text-[30px]">
                Leer Articulos
              </span>
              <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      class="grid grid-rows-2 gap-y-10 md:grid-rows-1 md:grid-cols-2 md:gap-x-10 pb-[30px] md:pb-[40px] xl:pb-[50px]">
      <CardArticule />
      <CardArticule />
    </section>
    <section class="pb-[60px]">
      <h4 class="mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-8">
        Proximos Eventos
      </h4>
      <CardEvent />
      <div class="mt-8 w-full">
        <a href="/" class="flex items-center">
          <span
            class="font-founders-grosteskers font-semibold md:text-[20px] text-dark-blue">
            Conoce eventos anteriores
          </span>
          <img src="/assets/icons/arrow-dark-blue.svg" class="" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);

const heroData = {
  title: "Soluciones Innovadoras, Ingeniería de Vanguardia",
  ctaLabel: "Conoce nuestras filiales",
};
</script>
