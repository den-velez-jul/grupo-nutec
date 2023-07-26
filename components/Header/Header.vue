<template>
  <header class="flex flex-col">
    <div class="hidden lg:flex justify-end bg-dark-blue px-[75px] py-3">
      <span class="text-white">Español (Global)</span>
    </div>
    <div
      class="px-6 py-[10px] flex items-center justify-between md:px-[50px] lg:px-[75px] lg:py-3 xl:max-w-[1900px] 2xl:mx-auto 2xl:min-w-[1900px]">
      <nuxt-img
        class="mr-3"
        src="/logos/LogoGrupoNutecES.svg"
        alt="logo"
        width="51px"
        height="48px" />
      <nav>
        <ul
          class="hidden lg:grid grid-cols-3 gap-x-12 font-founders-grosteskers font-semibold">
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
        <nuxt-img
          class="mr-3"
          src="/icons/search.svg"
          alt="logo"
          width="24px"
          height="24px" />
        <button @click="() => onShowMenu()">
          <nuxt-img
            class="lg:hidden"
            src="/icons/menu.svg"
            alt="logo"
            width="24px"
            height="24px" />
        </button>
        <NuxtLink
          class="py-3 px-9 bg-dark-blue text-white hidden lg:block capitalize font-founders-grosteskers font-semibold"
          to="https://">
          contacto
        </NuxtLink>
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
