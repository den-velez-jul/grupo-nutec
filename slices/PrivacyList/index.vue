<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PrivacyListSlice>([
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
    <ul class="list-disc mt-[32px] ml-4">
      <li v-for="item of slice.items">
        <PrismicText
          :field="item.list_item"
          class="body-reg lg:text-[18px] xl:text-[20px]" />
      </li>
    </ul>
  </section>
</template>
