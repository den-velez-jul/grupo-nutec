<template>
  <section
    class="grid lg:flex lg:justify-end grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-x-10 lg:gap-0 gap-y-[30px] py-5 px-6 bg-baby-blue xl:max-w-[1720px] xl:mx-auto">
    <div
      v-for="division of divisions"
      class="flex font-bold font-founders-grosteskers lg:max-w-[500px] lg:ml-[70px] max-w-[1900px]">
      <div class="w-[152px] h-[32px]">
        <img
          :src="division.logoImg.url"
          alt=""
          class="w-[150px] h-full"
          fit="cover" />
      </div>
      <div class="ml-3 lg:max-w-[224px]">
        <PrismicRichText :field="division.description" />
        <div class="flex justify-end">
          <PrismicLink :field="division.url" class="flex items-center">
            <span
              class="font-bold text-[16px] md:text-[20px] xl:text-[20px] text-dark-blue">
              <PrismicText :field="division.anchorLabel" />
            </span>
            <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3"
          /></PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  divisions: String,
});

const { divisions } = props;
</script>
