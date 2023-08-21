<script lang="ts" setup>
const { client } = usePrismic();

const { data: footer } = await useAsyncData("footer", () =>
  client.getByUID("footer", "footer")
);

const { data: header } = await useAsyncData("header", () =>
  client.getByUID("header", "header")
);

const footerData = footer.value ? footer.value.data : {};

const headerData = header.value ? header.value.data : {};

const footerDataProps = {
  logo: footerData.footer_logo,
  logoLabel: footerData.footer_logo_label,
  navLink: footerData.footer_navigation,
  linkedIn: footerData.linkedin_url,
  facebook: footerData.facebook_url,
  xUrl: footerData.x_url,
};

const headerDataProps = {
  logo: headerData.header_logo,
  btnLogo: headerData.header_boton_label,
  firstOption: {
    navLabel: headerData.header_nav_1,
    title: headerData.header_title_1,
    description: headerData.header_description_1,
    linkUrl: headerData.header_link_url_1,
    linkLabel: headerData.header_link_label_1,
    linksDetails: headerData.header_details_1,
  },
  secondOption: {
    navLabel: headerData.header_nav_2,
    title: headerData.header_title_2,
    description: headerData.header_description_2,
    linkUrl: headerData.header_link_url_2,
    linkLabel: headerData.header_link_label_2,
    linksDetails: headerData.header_details_2,
  },
  thirdOption: {
    navLabel: headerData.header_nav_3,
    title: headerData.header_title_3,
    description: headerData.header_description_3,
    linkUrl: headerData.header_link_url_3,
    linkLabel: headerData.header_link_label_3,
    linksDetails: headerData.header_details_3,
  },
};
</script>

<template>
  <div>
    <Header :headerData="headerDataProps" />
    <slot />
    <div class="max-w-[1900px] mx-auto">
      <Footer :footerData="footerDataProps" />
    </div>
  </div>
</template>

<style scoped></style>
