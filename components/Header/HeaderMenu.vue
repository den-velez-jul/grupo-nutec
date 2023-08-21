<template>
  <div v-if="!optionSelected.isShow" class="flex flex-col w-full lg:hidden">
    <button
      @click="() => onShowOptionSelected(buttonLabels.indexOf(btn))"
      v-for="btn of buttonLabels"
      :key="btn"
      class="flex justify-between items-center px-[50px] py-[40px] font-bold text-dark-blue text-[30px] [&:nth-child(2)]:bg-white bg-light-baby-blue">
      <span>
        {{ btn }}
      </span>
      <span>
        <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
      </span>
    </button>
    <div class="flex justify-end bg-dark-blue px-[50px] py-[40px]">
      <NuxtLink
        to="contacto"
        class="bg-mid-blue px-9 py-3 font-founders-grosteskers text-[20px] font-bold"
        >Contacto</NuxtLink
      >
    </div>
    <div
      class="flex flex-col items-center bg-blue px-[50px] py-[40px] text-white text-[12px] font-bold font-founders-grosteskers">
      <span class="mb-6">Español Global</span>
      <span>Ingles Global</span>
    </div>
  </div>
  <div
    v-if="optionSelected.isShow"
    class="flex flex-col bg-light-baby-blue lg:hidden">
    <button
      @click="() => closeOptionSelected()"
      class="flex items-center px-[50px] py-[40px] font-bold text-dark-blue text-[30px]">
      <img src="~assets/icons/arrow-dark-blue.svg" class="-scale-100" />
      <span class="ml-6">
        {{ optionSelected.optionToDisplay.title[0].text }}
      </span>
    </button>
    <div class="px-[50px] py-[40px] h-[500px]">
      <div class="flex flex-col font-bold pl-[30px] pt-3 text-[18px]">
        <NuxtLink
          class="mb-3"
          v-for="link of optionSelected.linksDetails"
          to="">
          {{ link.label[0].text }}
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-10 font-semibold text-[20px]">
        <NuxtLink
          class="mb-3"
          v-for="link of optionSelected.optionToDisplay.linksDetails"
          to="">
          <PrismicText :field="link.label" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuMobileProps: {
    buttonLabels: Array,
    menuOptions: Array,
  },
});

const { buttonLabels, menuOptions } = props.menuMobileProps;

let optionSelected = reactive({ isShow: false, optionToDisplay: {} });

function onShowOptionSelected(index) {
  optionSelected.isShow = true;
  optionSelected.optionToDisplay = menuOptions[index];
}

function closeOptionSelected() {
  optionSelected.isShow = false;
  optionSelected.optionToDisplay = {};
}
</script>
