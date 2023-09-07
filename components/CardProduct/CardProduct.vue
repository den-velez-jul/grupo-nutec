<template>
  <div class="flex flex-col h-full bg-baby-blue">
    <img
      :src="companyProps.imagen.url"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px] object-cover" />
    <div class="p-8 flex-grow flex flex-col justify-between">
      <div>
        <h3 v-if="title" :class="titleCustomStyle">{{ title }}</h3>
        <PrismicRichText
          :field="companyProps.description"
          class="body-reg text-black" />
      </div>
      <a
        target="_blank"
        :href="companyProps.cta_link1.url"
        :class="anchorCustomStyle">
        <span class="text-big">
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

const titleCustomStyle = `mb-10 heading2 ${titleColorStyle}`;
const anchorCustomStyle = `mt-8 flex w-full text-[20px] xl:text-[30px] text-dark-blue ${archorPositionColor}`;
</script>
