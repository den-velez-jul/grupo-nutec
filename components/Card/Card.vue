<template>
  <div class="flex flex-col bg-baby-blue">
    <img
      src="~assets/images/dummy.png"
      class="w-full h-[290px] md:h-[240px] lg:h-[330px] xl:h-[400px]" />
    <div class="p-8">
      <h2 v-if="title" :class="titleCustomStyle">{{ title }}</h2>
      <p
        class="text-[20px] xl:text-[30px] font-founders-grosteskers font-bold text-dark-blue">
        {{ data.paragraph }}
      </p>
      <a href="" :class="anchorCustomStyle">
        <span class="font-semibold"> {{ data.anchorLabel }} </span>
        <img src="~assets/icons/arrow-dark-blue.svg" class="" />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imagePath: String,
  title: String,
  redTitle: Boolean,
  paragraph: String,
  anchorLabel: String,
  anchorLink: String,
  anchorLeft: Boolean,
});
const data = {
  imagePath: "~assets/images/dummy.png",
  title: "",
  redTitle: false,
  paragraph:
    "NUTEC está transformando la Industria del Aislamiento Térmico a través de tecnologías innovadoras que mejoran la eficiencia y ayudan a compensar la huella de carbono.",
  anchorLabel: "Conoce Más Sobre NUTEC",
  anchorLink: "/",
};

const {
  imagePath,
  title,
  redTitle,
  paragraph,
  anchorLabel,
  anchorLink,
  anchorLeft,
} = props;

const titleColorStyle = redTitle ? "text-[#B40023]" : "text-dark-blue";
const archorPositionColor = anchorLeft ? "justify-start" : "justify-end";

const titleCustomStyle = `text-center mb-10 ${titleColorStyle}`;
const anchorCustomStyle = `mt-8 flex w-full text-[20px] xl:text-[30px] text-dark-blue ${archorPositionColor}`;
</script>
