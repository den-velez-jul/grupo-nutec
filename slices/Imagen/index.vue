<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImagenSlice>([
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
    class="pt-[40px] px-6 md:px-[100px] lg:pt-[60px] lg:px-[150px] xl:px-[300px]">
    <img :src="slice.primary.imagen.url" />
    <PrismicRichText
      :field="slice.primary.imagen_caption"
      class="body-reg pt-6 text-black" />
  </section>
</template>
