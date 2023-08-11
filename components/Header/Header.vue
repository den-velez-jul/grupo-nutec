<template>
  <header class="flex flex-col">
    <div class="hidden lg:flex justify-end bg-dark-blue px-[75px] py-3">
      <span class="text-white">Español (Global)</span>
    </div>
    <div
      class="px-6 py-3 h-[96px] flex items-center justify-between md:px-[50px] lg:px-[75px] lg:py-3 xl:max-w-[1920px] 2xl:mx-auto 2xl:min-w-[1900px]">
      <img
        class="mr-3 h-full w-auto"
        src="~assets/logos/LogoGrupoNutecES.svg"
        alt="logo"
        width="51px"
        height="48px" />
      <nav class="flex-grow flex justify-center ml-[150px]">
        <ul
          class="hidden max-w-[500px] lg:grid grid-cols-3 gap-x-12 font-founders-grosteskers font-semibold text-dark-blue">
          <li>
            <button @click="onShowHeaderDetails()">Que hacemos</button>
          </li>
          <li>
            <button @click="onShowHeaderDetails()">Compañia</button>
          </li>
          <li>
            <button @click="onShowHeaderDetails()">Recursos</button>
          </li>
        </ul>
      </nav>
      <div class="flex">
        <img
          class="mr-12"
          src="~assets/icons/search.svg"
          alt="logo"
          width="24px"
          height="24px" />
        <button @click="() => onShowMenu()">
          <img
            class="lg:hidden"
            src="~assets/icons/menu.svg"
            alt="logo"
            width="24px"
            height="24px" />
        </button>
        <button
          class="py-3 px-9 bg-dark-blue text-white hidden lg:flex items-center justify-center"
          href="https://">
          <span class="text-white text-med mt-1">Contacto</span>
        </button>
      </div>
    </div>
    <HeaderDetails
      v-if="showHeaderDetails.isDetailsOpen"
      :title="headerDetails1.title"
      :paragraph="headerDetails1.paragraph"
      :moreDetails="headerDetails1.moreDetails"
      :links="headerDetails1.links" />
    <HeaderMenu
      v-if="showHeaderDetails.isMenuOpen"
      :title="headerDetails1.title"
      :paragraph="headerDetails1.paragraph"
      :moreDetails="headerDetails1.moreDetails"
      :links="headerDetails1.links" />
  </header>
</template>

<script setup>
const headerDetails1 = {
  title: "Qué Hacemos",
  paragraph:
    "Una amplia gama de productos y soluciones de aislamiento de alta temperatura para afrontar los retos térmicos más exigentes.",
  moreDetails: {
    label: "CONOCE MÁS SOBRE QUE HACEMOS",
    url: "/",
  },
  links: [
    {
      label: "NUTEC FIBRAS",
      url: "/",
    },
    {
      label: "NUTEC Bicley",
      url: "/",
    },
  ],
};

let showHeaderDetails = reactive({ isDetailsOpen: false, isMenuOpen: false });

function onShowHeaderDetails() {
  const newValue = !showHeaderDetails.isDetailsOpen;

  showHeaderDetails.isDetailsOpen = newValue;
}

function onShowMenu() {
  const newValue = !showHeaderDetails.isMenuOpen;

  showHeaderDetails.isMenuOpen = newValue;
}
</script>
