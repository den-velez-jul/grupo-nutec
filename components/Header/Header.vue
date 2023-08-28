<template>
  <div
    v-if="showHeaderDetails.isDetailsOpen"
    @mouseover="onCloseHeaderDetails()"
    @click="onCloseHeaderDetails()"
    class="fixed inset-0 z-[19]"></div>
  <div
    v-if="showHeaderDetails.isMenuOpen"
    @click="onShowMenu()"
    class="fixed inset-0 z-[19]"></div>
  <header class="flex flex-col fixed bg-white inset-x-0 top-0 z-20">
    <div class="hidden lg:flex justify-end bg-dark-blue px-[75px] py-3">
      <div class="relative flex flex-col bg-dark-blue">
        <div class="relative flex items-center" @click="openLangSwithcher()">
          <span class="text-white font-bold"
            >{{ showHeaderDetails.localeLabel }} (Global)</span
          >
          <img
            class="ml-1"
            src="~assets/icons/dropdown-arrow.svg"
            alt="arrow icon"
            width="10px"
            height="auto" />
        </div>
        <div
          v-if="showHeaderDetails.showLocales"
          class="absolute flex flex-col gap-2 left-[-20px] top-9 bg-dark-blue text-white text-left font-bold py-4 w-[180px] z-[999]">
          <button
            v-if="showHeaderDetails.localeLabel != 'English'"
            @click="langSwitcher('en')">
            English (Global)
          </button>
          <button
            v-if="showHeaderDetails.localeLabel != 'Español'"
            @click="langSwitcher('es')">
            Español (Global)
          </button>
        </div>
      </div>
    </div>
    <div
      class="px-6 py-3 h-[96px] flex items-center justify-between md:px-[50px] lg:px-[75px] lg:py-3 xl:max-w-[1920px] 2xl:mx-auto 2xl:min-w-[1900px]">
      <a href="/" class="h-full">
        <img
          class="mr-3 h-full w-auto min-w-[51px]"
          :src="showHeaderDetails.logo.url"
          :alt="showHeaderDetails.logo.alt"
          width="51px"
          height="48px" />
      </a>
      <nav class="flex-grow flex justify-center ml-[150px]">
        <ul
          class="hidden max-w-[600px] lg:grid grid-cols-3 gap-x-12 font-founders-grosteskers text-med text-dark-blue justify-items-center">
          <li>
            <button
              class="text-[14px] xl:text-[20px]"
              @mouseover="onShowHeaderDetails('about')"
              @click="onShowHeaderDetails('about')">
              {{ showHeaderDetails.firstOption.navLabel[0].text }}
            </button>
          </li>
          <li>
            <button
              class="text-[14px] xl:text-[20px]"
              @mouseover="onShowHeaderDetails('company')"
              @click="onShowHeaderDetails('company')">
              {{ showHeaderDetails.secondOption.navLabel[0].text }}
            </button>
          </li>
          <li>
            <button
              class="text-[14px] xl:text-[20px]"
              @mouseover="onShowHeaderDetails('resources')"
              @click="onShowHeaderDetails('resources')">
              {{ showHeaderDetails.thirdOption.navLabel[0].text }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex">
        <img
          class="mr-12 min-w-[24px]"
          src="~assets/icons/search.svg"
          alt="logo"
          width="24px"
          height="24px" />
        <button @click="() => onShowMenu()" class="min-w-[24px]">
          <img
            class="lg:hidden"
            src="~assets/icons/menu.svg"
            alt="logo"
            width="24px"
            height="24px" />
        </button>
        <NuxtLink
          class="py-3 px-9 bg-dark-blue text-white hidden lg:flex items-center justify-center"
          href="/contacto">
          <span class="text-white text-med mt-1">{{
            showHeaderDetails.btnLogo[0].text
          }}</span>
        </NuxtLink>
      </div>
    </div>
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'about'
      "
      :title="showHeaderDetails.headerDetails.title"
      :paragraph="showHeaderDetails.headerDetails.description"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails"
      @close-modal="onCloseHeaderDetails" />
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'company'
      "
      :title="showHeaderDetails.headerDetails.title"
      :paragraph="showHeaderDetails.headerDetails.description"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails"
      :onCloseHeader="onCloseHeaderDetails"
      @close-modal="onCloseHeaderDetails" />
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'resources'
      "
      :title="showHeaderDetails.headerDetails.title"
      :paragraph="showHeaderDetails.headerDetails.description"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails"
      @close-modal="onCloseHeaderDetails" />
    <HeaderMenu
      v-if="showHeaderDetails.isMenuOpen"
      :menuMobileProps="showHeaderDetails.menuProps"
      @close-modal="onShowMenu"
      @lang-es="langSwitcher('es')"
      @lang-en="langSwitcher('en')" />
  </header>
</template>

<script setup>
const { setLocale, localeProperties, locale } = useI18n();
import { useLocaleStore } from "../../store/myStore.js";
const store = useLocaleStore();

const props = defineProps({
  headerData: {
    logo: String,
    btnLogo: String,
    firstOption: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
    secondOption: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
    thirdOption: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
  },
  headerDataEN: {
    logoEN: String,
    btnLogoEN: String,
    firstOptionEN: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
    secondOptionEN: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
    thirdOptionEN: {
      navLabel: String,
      title: String,
      description: String,
      linkUrl: String,
      linkLabel: String,
      linksDetails: Array,
    },
  },
});

const { logo, btnLogo, firstOption, secondOption, thirdOption } =
  props.headerData;

const { logoEN, btnLogoEN, firstOptionEN, secondOptionEN, thirdOptionEN } =
  props.headerDataEN;

const menuProps = {
  buttonLabels: [
    firstOption.navLabel[0].text,
    secondOption.navLabel[0].text,
    thirdOption.navLabel[0].text,
  ],
  menuOptions: [firstOption, secondOption, thirdOption],
};

const menuPropsEN = {
  buttonLabels: [
    firstOptionEN.navLabel[0].text,
    secondOptionEN.navLabel[0].text,
    thirdOptionEN.navLabel[0].text,
  ],
  menuOptions: [firstOptionEN, secondOptionEN, thirdOptionEN],
};

let showHeaderDetails = reactive({
  localeLabel: localeProperties.value.localeName,
  showLocales: false,
  optionSelected: "",
  isDetailsOpen: false,
  isMenuOpen: false,
  headerDetails: {},
  logo: locale.value == "en" ? logoEN : logo,
  btnLogo: locale.value == "en" ? btnLogoEN : btnLogo,
  firstOption: locale.value == "en" ? firstOptionEN : firstOption,
  secondOption: locale.value == "en" ? secondOptionEN : secondOption,
  thirdOption: locale.value == "en" ? thirdOptionEN : thirdOption,
  menuProps: locale.value == "en" ? menuPropsEN : menuProps,
});

function onShowHeaderDetails(optionSelected) {
  switch (optionSelected) {
    case "about":
      showHeaderDetails.headerDetails =
        locale.value == "en" ? firstOptionEN : firstOption;
      break;
    case "company":
      showHeaderDetails.headerDetails =
        locale.value == "en" ? secondOptionEN : secondOption;
      break;
    case "resources":
      showHeaderDetails.headerDetails =
        locale.value == "en" ? thirdOptionEN : thirdOption;
      break;
    default:
      break;
  }

  if (showHeaderDetails.optionSelected == optionSelected) {
    showHeaderDetails.isDetailsOpen = false;
    showHeaderDetails.optionSelected = "";
  } else {
    showHeaderDetails.optionSelected = optionSelected;
    showHeaderDetails.isDetailsOpen = true;
  }
}

function onCloseHeaderDetails() {
  showHeaderDetails.isDetailsOpen = false;
  showHeaderDetails.optionSelected = "";
}

function onShowMenu() {
  const newValue = !showHeaderDetails.isMenuOpen;

  showHeaderDetails.isMenuOpen = newValue;
}

function openLangSwithcher() {
  const newValue = !showHeaderDetails.showLocales;
  showHeaderDetails.showLocales = newValue;
}

const langSwitcher = (value) => {
  if (value === "es") {
    showHeaderDetails.localeLabel = "Español";
    showHeaderDetails.logo = logo;
    showHeaderDetails.btnLogo = btnLogo;
    showHeaderDetails.firstOption = firstOption;
    showHeaderDetails.secondOption = secondOption;
    showHeaderDetails.thirdOption = thirdOption;
    showHeaderDetails.menuProps = menuProps;
  } else {
    showHeaderDetails.localeLabel = "English";
    showHeaderDetails.logo = logoEN;
    showHeaderDetails.btnLogo = btnLogoEN;
    showHeaderDetails.firstOption = firstOptionEN;
    showHeaderDetails.secondOption = secondOptionEN;
    showHeaderDetails.thirdOption = thirdOptionEN;
    showHeaderDetails.menuProps = menuPropsEN;
  }
  setLocale(value);
  store.setLocale(value);
  openLangSwithcher();
};

if (store.locale != locale.value) {
  store.setLocale(locale.value);
}
</script>
