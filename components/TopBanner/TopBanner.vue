<template>
  <div class="bg-blue hidden lg:flex items-center h-[45px]">
    <div
      class="flex items-center mx-6 md:mx-[50px] lg:mx-[75px] max-w-[1920px] xl:px-[100px] xl:w-[1920px] xl:mx-auto text-white">
      <a href="/">
        <span class="font-bold">Inicio</span>
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
const props = defineProps({
  labelList: Array,
});

const { labelList } = props;
</script>
