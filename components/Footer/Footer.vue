<template>
  <footer
    class="px-6 pt-6 pb-[80px] text-dark-blue font-semibold md:px-[50px] lg:px-[100px] lg:py-[150px]">
    <div
      class="flex flex-col items-center md:grid lg:grid-cols-4 md:content-center md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 md:gap-y-[60px] lg:gap-y-0">
      <div>
        <img :src="logo.url" :alt="logo.alt" width="120px" height="110px" />
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
        <a href="mailto:abc@example.com?subject = Feedback&body = Message">
          <img
            src="~assets/icons/icon-email.svg"
            alt="logo email"
            width="25px"
            height="25px" />
        </a>
      </div>
      <ul
        class="body-bold grid grid-rows-4 gap-y-3 mt-[60px] md:mt-0 justify-items-center md:justify-items-start lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <li v-for="item of navigationArray1">
          <PrismicLink :field="item.link">
            {{ item.label[0].text }}
          </PrismicLink>
        </li>
      </ul>
      <ul
        class="body-bold grid grid-rows-4 gap-y-3 mt-6 md:mt-0 justify-items-center md:justify-items-start lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
        <li v-for="item of navigationArray2">
          <PrismicLink :field="item.link">
            {{ item.label[0].text }}
          </PrismicLink>
        </li>
      </ul>
    </div>
    <span
      class="block my-[60px] md:mt-20 md:mb-0 lg:my-0 text-center lg:text-left body-reg lg:mt-3"
      >{{ logoLabel[0].text }}</span
    >
  </footer>
</template>

<script setup>
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

const { logo, logoLabel, navLink, linkedIn, facebook, xUrl } = props.footerData;

const navigationArray1 = [];
const navigationArray2 = [];

navLink.forEach((item, index) => {
  if (index < 4) {
    navigationArray1.push(item);
  } else {
    navigationArray2.push(item);
  }
});
</script>
