<template>
  <Hero />
  <div class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-[100px]">
    <Divisions />
    <section
      class="pb-[80px] pt-[60px] md:pb-[100px] md:pt-[70px] lg:pt-[150px]">
      <h4 class="text-center mt-">Un Grupo, Dos Divisiones</h4>
      <div
        class="grid mt-10 md:mt-[60px] lg:mt-12 gap-y-[30px] md:grid-cols-2 md:gap-x-10">
        <Card />
        <Card />
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
