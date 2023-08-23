<script lang="ts" setup>
const { localeProperties } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();
import { useLocaleStore } from "../store/myStore.js";
const store = useLocaleStore();

const { data: footerES } = await useAsyncData("footerES", () =>
  client.getByUID("footer", "footer", { lang: "es-mx" })
);

const { data: footerEN } = await useAsyncData("footerEN", () =>
  client.getByUID("footer", "footer", { lang: "en-us" })
);

const { data: headerEN } = await useAsyncData("headerEN", () =>
  client.getByUID("header", "header", { lang: "en-us" })
);

const { data: headerES } = await useAsyncData("headerES", () =>
  client.getByUID("header", "header", { lang: "es-mx" })
);

const footerDataES = footerES.value ? footerES.value.data : {};
const footerDataEN = footerEN.value ? footerEN.value.data : {};

const headerDataES = headerES.value ? headerES.value.data : {};
const headerDataEN = headerEN.value ? headerEN.value.data : {};

const footerDataPropsES = {
  logo: footerDataES.footer_logo,
  logoLabel: footerDataES.footer_logo_label,
  navLink: footerDataES.footer_navigation,
  linkedIn: footerDataES.linkedin_url,
  facebook: footerDataES.facebook_url,
  xUrl: footerDataES.x_url,
};

const footerDataPropsEN = {
  logo: footerDataEN.footer_logo,
  logoLabel: footerDataEN.footer_logo_label,
  navLink: footerDataEN.footer_navigation,
  linkedIn: footerDataEN.linkedin_url,
  facebook: footerDataEN.facebook_url,
  xUrl: footerDataEN.x_url,
};

const headerDataPropsES = {
  logo: headerDataES.header_logo,
  btnLogo: headerDataES.header_boton_label,
  firstOption: {
    navLabel: headerDataES.header_nav_1,
    title: headerDataES.header_title_1,
    description: headerDataES.header_description_1,
    linkUrl: headerDataES.header_link_url_1,
    linkLabel: headerDataES.header_link_label_1,
    linksDetails: headerDataES.header_details_1,
  },
  secondOption: {
    navLabel: headerDataES.header_nav_2,
    title: headerDataES.header_title_2,
    description: headerDataES.header_description_2,
    linkUrl: headerDataES.header_link_url_2,
    linkLabel: headerDataES.header_link_label_2,
    linksDetails: headerDataES.header_details_2,
  },
  thirdOption: {
    navLabel: headerDataES.header_nav_3,
    title: headerDataES.header_title_3,
    description: headerDataES.header_description_3,
    linkUrl: headerDataES.header_link_url_3,
    linkLabel: headerDataES.header_link_label_3,
    linksDetails: headerDataES.header_details_3,
  },
};

const headerDataPropsEN = {
  logoEN: headerDataEN.header_logo,
  btnLogoEN: headerDataEN.header_boton_label,
  firstOptionEN: {
    navLabel: headerDataEN.header_nav_1,
    title: headerDataEN.header_title_1,
    description: headerDataEN.header_description_1,
    linkUrl: headerDataEN.header_link_url_1,
    linkLabel: headerDataEN.header_link_label_1,
    linksDetails: headerDataEN.header_details_1,
  },
  secondOptionEN: {
    navLabel: headerDataEN.header_nav_2,
    title: headerDataEN.header_title_2,
    description: headerDataEN.header_description_2,
    linkUrl: headerDataEN.header_link_url_2,
    linkLabel: headerDataEN.header_link_label_2,
    linksDetails: headerDataEN.header_details_2,
  },
  thirdOptionEN: {
    navLabel: headerDataEN.header_nav_3,
    title: headerDataEN.header_title_3,
    description: headerDataEN.header_description_3,
    linkUrl: headerDataEN.header_link_url_3,
    linkLabel: headerDataEN.header_link_label_3,
    linksDetails: headerDataEN.header_details_3,
  },
};
</script>

<template>
  <div class="static">
    <Header :headerData="headerDataPropsES" :headerDataEN="headerDataPropsEN" />
    <slot />
    <div class="max-w-[1900px] mx-auto">
      <Footer
        :footerData="footerDataPropsES"
        :footerDataEN="footerDataPropsEN" />
    </div>
  </div>
</template>

<style scoped></style>
