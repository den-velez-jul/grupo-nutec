<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PrivacyHeadlineSlice>([
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
    :data-slice-variation="slice.variation">
    <PrismicRichText
      :field="slice.primary.headline"
      class="text-black body-bold text-5 mt-10 lg:text-[18px] xl:text-[20px]" />
  </section>
</template>
