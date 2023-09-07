<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TitulosSlice>([
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
    class="pt-[60px] px-6 md:px-[100px] lg:pt-[80px] lg:px-[150px] xl:px-[300px]">
    <h3 class="text-blue heading2">
      <PrismicRichText :field="slice.primary.titulo" />
    </h3>
  </section>
</template>
