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
      <span
        class="bg-mid-blue px-9 py-3 font-founders-grosteskers text-[20px] font-bold"
        >Contacto</span
      >
    </div>
    <div
      class="flex flex-col items-center bg-blue px-[50px] py-[40px] text-white text-[12px] font-bold font-founders-grosteskers">
      <span class="mb-6">Español Global</span>
      <span>Ingles Global</span>
    </div>
  </div>
  <div v-if="optionSelected.isShow" class="flex flex-col bg-light-baby-blue">
    <button
      @click="() => closeOptionSelected()"
      class="flex items-center px-[50px] py-[40px] font-bold text-dark-blue text-[30px]">
      <img src="~assets/icons/arrow-dark-blue.svg" class="-scale-100" />
      <span class="ml-6">
        {{ optionSelected.optionToDisplay.title }}
      </span>
    </button>
    <div class="py-[50px] px-[40px] h-[500px]">
      <!-- <p class="text-[20px] font-semibold">
        {{ optionSelected.optionToDisplay.paragraph }}
      </p> -->
      <div
        class="flex flex-col md:flex-row justify-around font-semibold text-[20px] py-[50px] px-[40px]">
        <NuxtLink
          class="uppercase mb-3"
          v-for="link of optionSelected.optionToDisplay.links"
          to="">
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const buttonLabels = ["Que hacemos", "Compañia", "Recursos"];

const dataButton = [
  {
    title: "Que hacemos",
    paragraph:
      "Una amplia gama de productos y soluciones de aislamiento de alta temperatura para afrontar los retos térmicos más exigentes.",
    moreDetails: {
      label: "CONOCE MÁS SOBRE QUE HACEMOS",
      url: "/",
    },
    links: [
      {
        label: "NUTEC Fibras",
        url: "/",
      },
      {
        label: "NUTEC Bickley",
        url: "/",
      },
    ],
  },
  {
    title: "Que hacemos",
    paragraph:
      "Una amplia gama de productos y soluciones de aislamiento de alta temperatura para afrontar los retos térmicos más exigentes.",
    moreDetails: {
      label: "CONOCE MÁS SOBRE QUE HACEMOS2",
      url: "/",
    },
    links: [
      {
        label: "NUTEC Fibras",
        url: "/",
      },
      {
        label: "NUTEC Bickley",
        url: "/",
      },
    ],
  },
  {
    title: "Que hacemos",
    paragraph:
      "Una amplia gama de productos y soluciones de aislamiento de alta temperatura para afrontar los retos térmicos más exigentes.",
    moreDetails: {
      label: "CONOCE MÁS SOBRE QUE HACEMOS3",
      url: "/",
    },
    links: [
      {
        label: "NUTEC Fibras",
        url: "/",
      },
      {
        label: "NUTEC Bickley",
        url: "/",
      },
    ],
  },
];

let optionSelected = reactive({ isShow: false, optionToDisplay: {} });

function onShowOptionSelected(index) {
  optionSelected.isShow = true;
  optionSelected.optionToDisplay = dataButton[index];
}

function closeOptionSelected() {
  optionSelected.isShow = false;
  optionSelected.optionToDisplay = {};
}
</script>
