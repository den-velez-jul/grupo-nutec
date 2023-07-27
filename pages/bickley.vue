<template>
  <Hero :title="heroData.title" :top-label="heroData.topLabel" />
  <div class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-[100px]">
    <section class="py-[60px] xl:py-[100px] bg-baby-blue">
      <ArticleTwo />
    </section>
    <section class="pt-[80px] pb-[60px] md:pt-[120px] lg:pt-[150px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px] md:pt-[120px] lg:pt-[150px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-10">
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
        <Card title="Hornos Intermitentes" redTitle anchorLeft />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px] md:pt-[120px] lg:pt-[150px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card title="Trenes de Combustible" redTitle anchorLeft />
        <Card title="Trenes de Combustible" redTitle anchorLeft />
      </div>
    </section>
    <section class="pt-[80px] pb-[60px] md:pt-[120px] lg:pt-[150px]">
      <ArticleHeader />
      <div
        class="py-[60px] grid grid-cols-1 grid-rows-3 gap-y-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10">
        <Card title="Trenes de Combustible" anchorLeft />
        <Card title="Trenes de Combustible" anchorLeft />
      </div>
    </section>
  </div>
</template>

<script setup>
const heroData = {
  title: "Soluciones Innovadoras, Ingeniería de Vanguardia",
  topLabel: "nutec bickley",
};
</script>
