<template>
  <div :class="stylesClass">
    <a :href="urlTo" class="flex items-center">
      <span class="font-founders-grosteskers font-bold md:text-[20px]">
        {{ labelBtn }}
      </span>
      <img :src="iconSelected" class="ml-3" />
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  labelBtn: String,
  urlTo: String,
  whiteText: Boolean,
});
const { labelBtn, urlTo, whiteText, icon } = props;

const textStyles = whiteText ? "text-white" : "text-dark-blue";
const iconSelected = whiteText
  ? "/assets/icons/arrow-white.svg"
  : "/assets/icons/arrow-dark-blue.svg";

const stylesClass = `flex items-center text-dark-blue ${textStyles}`;
</script>
