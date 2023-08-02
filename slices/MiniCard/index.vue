<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MiniCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const stylesSS = "grid md:flex";
</script>

<template>
  <div
    :class="stylesSS"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation">
    <div
      v-for="item of slice.items"
      class="flex font-bold font-founders-grosteskers lg:max-w-[500px] lg:ml-[70px] max-w-[1900px] CACA">
      <div class="w-[160px] h-[32px]">
        <img
          :style="{ width: '160px' }"
          :src="item.logoImg.url"
          alt=""
          class="w-[160px] h-full object-cover"
          fit="cover" />
      </div>
      <div
        :style="{
          marginLeft: '20px',
        }">
        <PrismicRichText :field="item.description" />
        <div class="flex justify-end">
          <a :href="item.url" class="flex items-center">
            <PrismicRichText
              class="font-semibold text-dark-blue"
              :field="item.anchorLabel" />
            <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
