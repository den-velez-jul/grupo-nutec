<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArticleQuoteSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-dark-blue mt-[60px] py-20 px-6 md:px-[100px] md:py-[80px] lg:px-[150px] xl:px-[300px] xl:py-[100px] xl:mt-[80px]">
    <PrismicText :field="slice.primary.quote" class="heading3 text-mid-blue" />
    <PrismicText
      :field="slice.primary.author"
      class="pt-10 text-white body-bold" />
  </section>
</template>
