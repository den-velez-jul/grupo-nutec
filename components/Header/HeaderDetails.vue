<template>
  <div
    class="hidden lg:flex px-[80px] py-[45px] h-[232px] text-dark-blue font-founders-grosteskers">
    <div
      class="flex flex-col justify-between h-[142px] max-w-[604px] pl-[40px] pr-[20px] font-bold font-founders-grosteskers">
      <h3 class="text-[35px]">{{ title }}</h3>
      <p class="text-[18px] font-bold">
        {{ paragraph }}
      </p>
      <NuxtLink class="uppercase text-[18px]">{{ moreDetails.label }}</NuxtLink>
    </div>
    <div class="flex flex-col font-bold pl-[30px] pt-3 text-[18px]">
      <NuxtLink class="mb-3" v-for="link of links" to="">
        {{ link.label[0].text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  paragraph: String,
  moreDetails: {
    label: String,
    url: String,
  },
  links: {
    type: Array,
    default: () => [],
  },
});

const { title, paragraph, moreDetails, links } = props;
</script>
<script></script>
