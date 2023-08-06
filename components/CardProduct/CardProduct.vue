<template>
  <div class="flex flex-col h-full bg-baby-blue">
    <img
      :src="companyProps.imagen.url"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px] object-cover" />
    <div class="p-8 flex-grow flex flex-col justify-between">
      <div>
        <h3 v-if="title" :class="titleCustomStyle">{{ title }}</h3>
        <PrismicText
          :field="companyProps.description"
          class="text-[16px] xl:text-[20px] font-founders-grosteskers font-bold text-dark-blue" />
      </div>
      <a :href="companyProps.cta_link1.url" :class="anchorCustomStyle">
        <span class="font-bold text-[20px] xl:text-[30px]">
          {{ companyProps.cta_label1 }}
        </span>
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

const titleCustomStyle = `mb-10 text-[35px] leading-[44px] md:leading-[48x] md:text-[40px] lg:text-[50px] lg:leading-[58px] xl:leading-[58px] ${titleColorStyle}`;
const anchorCustomStyle = `mt-8 flex w-full text-[20px] xl:text-[30px] text-dark-blue ${archorPositionColor}`;
</script>
