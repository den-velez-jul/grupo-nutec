<template>
  <footer
    class="px-6 pt-6 pb-[80px] text-dark-blue font-semibold md:px-[50px] lg:px-[100px] lg:py-[150px]">
    <div
      class="flex flex-col items-center md:grid lg:grid-cols-4 md:content-center md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 md:gap-y-[60px] lg:gap-y-0">
      <div class="flex flex-col items-center justify-center xl:pr-14">
        <img
          :src="logo.url"
          :alt="logo.alt"
          class="w-[120px] h-full object-cover" />
        <span class="hidden w-full lg:text-center body-bold lg:block lg:mt-3">
          {{ logoLabel[0].text }}
        </span>
      </div>
      <div
        class="grid grid-cols-[25px_25px_25px_25px] gap-x-6 my-[60px] md:my-0 md:self-start lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2">
        <a :href="linkedIn.url" target="_blank">
          <img
            src="~assets/icons/icon-linkendln.svg"
            alt="logo linkedIn"
            width="25px"
            height="25px" />
        </a>
        <a :href="facebook.url" target="_blank">
          <img
            src="~assets/icons/icon-facebook.svg"
            alt="logo facebook"
            width="25px"
            height="25px" />
        </a>
        <a :href="xUrl.url" target="_blank">
          <img
            src="~assets/icons/icon-twitter.svg"
            alt="logo twitter"
            width="25px"
            height="25px" />
        </a>
        <a href="mailto:gruponutec@nutec.com? subject=Feedback&body= Message">
          <img
            src="~assets/icons/icon-email.svg"
            alt="logo email"
            width="25px"
            height="25px" />
        </a>
      </div>
      <ul
        class="body-bold grid grid-rows-4 gap-y-1 mt-[60px] md:mt-0 justify-items-center md:justify-items-start lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:p-0">
        <li v-if="store.locale == 'es'" v-for="item of navigationArray1ES">
          <NuxtLink :to="item.url">
            {{ item.label }}
          </NuxtLink>
        </li>
        <li v-if="store.locale == 'en'" v-for="item of navigationArray1EN">
          <NuxtLink :to="item.url">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <ul
        class="body-bold grid grid-rows-4 gap-y-1 mt-6 md:mt-0 justify-items-center md:justify-items-start lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
        <li v-if="store.locale == 'es'" v-for="item of navigationArray2ES">
          <NuxtLink :to="item.url">
            {{ item.label }}
          </NuxtLink>
        </li>
        <li v-if="store.locale == 'en'" v-for="item of navigationArray2EN">
          <NuxtLink :to="item.url">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <span
      class="block my-[60px] md:mt-20 md:mb-0 lg:my-0 text-center lg:text-left body-bold lg:mt-3 lg:hidden"
      >{{ logoLabel[0].text }}</span
    >
  </footer>
</template>

<script setup>
import { useLocaleStore } from "../../store/myStore.js";
const store = useLocaleStore();

const props = defineProps({
  footerData: {
    logo: Object,
    logoLabel: Object,
    navLink: Array,
    linkedIn: String,
    facebook: String,
    xUrl: String,
  },
});

const { logo, logoLabel, linkedIn, facebook, xUrl } = props.footerData;

const navigationArray1ES = [
  {
    label: "Inicio",
    url: "/es/",
  },
  {
    label: "Nosotros",
    url: "/es/nosotros",
  },
  {
    label: "Nutec",
    url: "/es/fibras",
  },
  {
    label: "Nutec Bickley",
    url: "/es/bickley",
  },
];
const navigationArray2ES = [
  {
    label: "Contacto",
    url: "/es/contacto",
  },
  {
    label: "Newsroom",
    url: "/es/newsroom",
  },
  {
    label: "Carreras",
    url: "/es/carreras",
  },
  {
    label: "Política de Privacidad",
    url: "/es/politicas-privacidad",
  },
];

const navigationArray1EN = [
  {
    label: "Home",
    url: "/en",
  },
  {
    label: "About Us",
    url: "/en/nosotros",
  },
  {
    label: "Nutec",
    url: "/en/fibras",
  },
  {
    label: "Nutec Bickley",
    url: "/en/bickley",
  },
];
const navigationArray2EN = [
  {
    label: "Contact",
    url: "/en/contacto",
  },
  {
    label: "Newsroom",
    url: "/en/newsroom",
  },
  {
    label: "Carrers",
    url: "/en/carreras",
  },
  {
    label: "Privacy Policies",
    url: "/en/politicas-privacidad",
  },
];
</script>
