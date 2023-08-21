<template>
  <header class="flex flex-col">
    <div class="hidden lg:flex justify-end bg-dark-blue px-[75px] py-3">
      <span class="text-white">Español (Global)</span>
    </div>
    <div
      class="px-6 py-3 h-[96px] flex items-center justify-between md:px-[50px] lg:px-[75px] lg:py-3 xl:max-w-[1920px] 2xl:mx-auto 2xl:min-w-[1900px]">
      <img
        class="mr-3 h-full w-auto"
        :src="logo.url"
        :alt="logo.alt"
        width="51px"
        height="48px" />
      <nav class="flex-grow flex justify-center ml-[150px]">
        <ul
          class="hidden max-w-[500px] lg:grid grid-cols-3 gap-x-12 font-founders-grosteskers font-semibold text-dark-blue">
          <li>
            <button @click="onShowHeaderDetails('about')">
              {{ firstOption.navLabel[0].text }}
            </button>
          </li>
          <li>
            <button @click="onShowHeaderDetails('company')">
              {{ secondOption.navLabel[0].text }}
            </button>
          </li>
          <li>
            <button @click="onShowHeaderDetails('resources')">
              {{ thirdOption.navLabel[0].text }}
            </button>
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
        <NuxtLink
          class="py-3 px-9 bg-dark-blue text-white hidden lg:flex items-center justify-center"
          href="contacto">
          <span class="text-white text-med mt-1">{{ btnLogo[0].text }}</span>
        </NuxtLink>
      </div>
    </div>
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'about'
      "
      :title="showHeaderDetails.headerDetails.title[0].text"
      :paragraph="showHeaderDetails.headerDetails.description[0].text"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails" />
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'company'
      "
      :title="showHeaderDetails.headerDetails.title[0].text"
      :paragraph="showHeaderDetails.headerDetails.description[0].text"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails" />
    <HeaderDetails
      v-if="
        showHeaderDetails.isDetailsOpen &&
        showHeaderDetails.optionSelected == 'resources'
      "
      :title="showHeaderDetails.headerDetails.title[0].text"
      :paragraph="showHeaderDetails.headerDetails.description[0].text"
      :moreDetails="{
        url: showHeaderDetails.headerDetails.linkUrl.url,
        label: showHeaderDetails.headerDetails.linkLabel[0].text,
      }"
      :links="showHeaderDetails.headerDetails.linksDetails" />
    <HeaderMenu
      v-if="showHeaderDetails.isMenuOpen"
      :menuMobileProps="menuProps" />
  </header>
</template>

<script setup>
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
});

const { logo, btnLogo, firstOption, secondOption, thirdOption } =
  props.headerData;

let showHeaderDetails = reactive({
  optionSelected: "",
  isDetailsOpen: false,
  isMenuOpen: false,
  headerDetails: {},
});

function onShowHeaderDetails(optionSelected) {
  let newHeaderDetails;

  switch (optionSelected) {
    case "about":
      showHeaderDetails.headerDetails = firstOption;
      break;
    case "company":
      showHeaderDetails.headerDetails = secondOption;
      break;
    case "resources":
      showHeaderDetails.headerDetails = thirdOption;
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
    console.log(showHeaderDetails.headerDetails);
  }
}

function onShowMenu() {
  const newValue = !showHeaderDetails.isMenuOpen;

  showHeaderDetails.isMenuOpen = newValue;
}

const menuProps = {
  buttonLabels: [
    firstOption.navLabel[0].text,
    secondOption.navLabel[0].text,
    thirdOption.navLabel[0].text,
  ],
  menuOptions: [firstOption, secondOption, thirdOption],
};
</script>
