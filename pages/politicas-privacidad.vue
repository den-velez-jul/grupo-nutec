<template>
  <main
    class="pt-[140px] lg:pt-[200px] pb-[80px] xl:py-[100px] xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
    <h1
      v-if="title"
      class="heading2 text-dark-blue mb-5 max-w-[800px] lg:mx-auto xl:mb-10">
      <PrismicText :field="title" />
    </h1>
    <section class="max-w-[800px] lg:mx-auto">
      <slice-zone
        wrapper="section"
        :components="components"
        :slices="privacyPolitics.data.slices" />
    </section>
  </main>
</template>

<script setup>
const { localeProperties } = useI18n();
const localeIso = localeProperties.value.iso;
import { components } from "~/slices";
const { client } = usePrismic();

const { data: privacyPolitics } = await useAsyncData(
  "privacyPolitics",
  async () => {
    const document = await client.getByUID(
      "privacy_policy",
      "politica-de-privacidad",
      { lang: localeIso }
    );

    if (document) {
      return document;
    } else {
      null;
    }
  }
);

const title = privacyPolitics ? privacyPolitics.value.data.title : null;
</script>
