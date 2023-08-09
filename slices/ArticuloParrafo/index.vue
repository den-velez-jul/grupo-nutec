<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ArticuloParrafoSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { slice, index, slices, context } = props;

const textColor = slice.variation === "default" ? "text-black" : "text-blue";
const parragrahStyles = `${textColor} 
      grid
      gap-y-[22px]
      font-bold
      leading-[22px]
      text-[16px]
      xl:text-[20px]
      xl:leading-[28px]
      xl:gap-y-[28px]`;
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="pt-[40px] px-6 md:px-[100px] lg:pt-[60px] lg:px-[150px] xl:px-[300px]">
    <PrismicRichText :field="slice.primary.parrafo" :class="parragrahStyles" />
  </section>
</template>
