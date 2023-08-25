<template>
  <div class="bg-blue hidden lg:flex items-center h-[45px]">
    <div
      class="flex items-center mx-6 md:mx-[50px] lg:mx-[75px] max-w-[1920px] xl:px-[100px] xl:w-[1920px] xl:mx-auto text-white">
      <a href="/">
        <span v-if="lang == 'es'" class="font-bold">Inicio</span>
        <span v-if="lang == 'en'" class="font-bold">Home</span>
      </a>
      <div class="flex items-center" v-for="item of labelList">
        <img
          src="~assets/icons/arrow-mid-blue.svg"
          alt=""
          class="w-5 h-5 mx-2" />
        <span> {{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
const lang = locale.value;
const props = defineProps({
  labelList: Array,
});

const { labelList } = props;
</script>
