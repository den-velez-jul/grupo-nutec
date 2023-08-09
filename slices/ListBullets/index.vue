<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ListBulletsSlice>([
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
    class="pl-10 pt-[40px] pr-6 md:pl-[120px] md:pr-[100px] lg:pt-[60px] lg:pl-[170px] lg:pr-[150px] xl:pl-[320px] xl:pr-[300px]">
    <ul class="list-disc">
      <li v-for="item of slice.items">
        <PrismicText :field="item.list_item" />
      </li>
    </ul>
  </section>
</template>
