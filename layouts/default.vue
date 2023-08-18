<script lang="ts" setup>
const { client } = usePrismic();

const { data: footer } = await useAsyncData("footer", () =>
  client.getByUID("footer", "footer")
);

const footerData = footer.value ? footer.value.data : {};

const footerDataProps = {
  logo: footerData.footer_logo,
  logoLabel: footerData.footer_logo_label,
  navLink: footerData.footer_navigation,
  linkedIn: footerData.linkedin_url,
  facebook: footerData.facebook_url,
  xUrl: footerData.x_url,
};

console.log(footerDataProps);
</script>

<template>
  <div>
    <Header />
    <slot />
    <div class="max-w-[1900px] mx-auto">
      <Footer :footerData="footerDataProps" />
    </div>
  </div>
</template>

<style scoped></style>
