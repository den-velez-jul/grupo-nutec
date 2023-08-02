<template>
  <div class="flex flex-col bg-baby-blue">
    <img
      :src="companyProps.imagen.url"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px] object-cover" />
    <div class="p-8">
      <h2 v-if="title" :class="titleCustomStyle">{{ title }}</h2>
      <PrismicText
        :field="companyProps.description"
        class="text-[20px] xl:text-[30px] font-founders-grosteskers font-bold text-dark-blue" />

      <a :href="companyProps.cta_link1.url" :class="anchorCustomStyle">
        <span class="font-bold"> {{ companyProps.cta_label1 }} </span>
        <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  companyProps: Array,
  title: String,
  redTitle: Boolean,
  anchorLeft: Boolean,
});

const { companyProps, title, redTitle, anchorLeft } = props;

const titleColorStyle = redTitle ? "text-[#B40023]" : "text-dark-blue";
const archorPositionColor = anchorLeft ? "justify-start" : "justify-end";

const titleCustomStyle = `text-center mb-10 ${titleColorStyle}`;
const anchorCustomStyle = `mt-8 flex w-full text-[20px] xl:text-[30px] text-dark-blue ${archorPositionColor}`;
</script>
