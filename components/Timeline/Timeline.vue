<template>
  <div class="flex overflow-x-scroll h-[980px]">
    <div
      class="relative text-white bg-dark-blue h-full flex flex-col justify-center">
      <div class="flex h-full">
        <div
          v-for="item of firstRangeUpper"
          class="w-[400px] min-w-[400px] px-4">
          <div class="flex flex-col items-center justify-end h-full">
            <PrismicText
              :field="item.timeline_year"
              class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
            <PrismicText
              :field="item.timeline_description"
              class="text-center" />
            <div class="left-[50%] border-r-2 h-3"></div>
            <span class="rounded-lg bg-white mb-[-6px] w-[10px] h-[10px]" />
          </div>
        </div>
      </div>
      <hr class="ml-[200px] text-white text-[2px]" />
      <div class="ml-[200px] flex h-full">
        <div
          v-for="item of firstRangeLower"
          class="w-[400px] min-w-[400px] px-4">
          <div class="flex flex-col items-center">
            <span
              class="rounded-lg bg-white mt-[-6px] w-[10px] h-[10px] z-100" />
            <div class="left-[50%] border-r-2 h-3"></div>
            <div class="flex flex-col">
              <PrismicText
                :field="item.timeline_year"
                class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
              <PrismicText
                :field="item.timeline_description"
                class="text-center" />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute left-[151px] bottom-[98px]">
        <PrismicText
          :field="firstRangeLabel"
          class="text-white font-semibold font-founders-grosteskers text-[30px]" />
      </div>
    </div>
    <div
      class="relative text-white bg-blue h-full flex flex-col justify-center">
      <div class="flex h-full">
        <div
          v-for="item of secondRangeUpper"
          class="w-[400px] min-w-[400px] px-4">
          <div class="flex flex-col items-center justify-end h-full">
            <PrismicText
              :field="item.timeline_year"
              class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
            <PrismicText
              :field="item.timeline_description"
              class="text-center" />
            <div class="left-[50%] border-r-2 h-3"></div>
            <span class="rounded-lg bg-white mb-[-6px] w-[10px] h-[10px]" />
          </div>
        </div>
      </div>
      <hr class="text-white" />
      <div class="ml-[200px] flex h-full">
        <div
          v-for="item of secondRangeLower"
          class="w-[400px] min-w-[400px] px-4">
          <div class="flex flex-col items-center">
            <span
              class="rounded-lg bg-white mt-[-6px] w-[10px] h-[10px] z-100" />
            <div class="left-[50%] border-r-2 h-3"></div>
            <div class="flex flex-col">
              <PrismicText
                :field="item.timeline_year"
                class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
              <PrismicText
                :field="item.timeline_description"
                class="text-center" />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute left-[151px] bottom-[98px]">
        <PrismicText
          :field="secondRangeLabel"
          class="text-white font-semibold font-founders-grosteskers text-[30px]" />
      </div>
    </div>
    <div
      class="text-white bg-mid-green h-full flex flex-col justify-center min-w-[678px]">
      <div class="flex h-full">
        <div class="flex flex-col items-center justify-end h-full w-full">
          <PrismicText
            :field="futureLabel"
            class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
        </div>
      </div>
      <div class="flex items-center pr-[64px] w-full">
        <div class="border-[1px] border-solid border-white w-[814px]" />
        <img src="~assets/icons/leaf.svg" class="ml-3" />
      </div>
      <div class="flex h-full px-[154px]">
        <div class="flex flex-col items-center justify-between pb-[98px]">
          <PrismicText :field="futureDescription" class="text-center" />
          <PrismicText
            :field="futureLowerLabel"
            class="text-white font-semibold font-founders-grosteskers text-[30px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  timelineData: {
    firstRangeUpper: Array,
    firstRangeLower: Array,
    secondRangeUpper: Array,
    secondRangeLower: Array,
    firstRangeLabel: String,
    secondRangeLabel: String,
    futureLabel: String,
    futureDescription: String,
    futureLowerLabel: String,
  },
});

const {
  firstRangeUpper,
  firstRangeLower,
  secondRangeUpper,
  secondRangeLower,
  firstRangeLabel,
  secondRangeLabel,
  futureLabel,
  futureDescription,
  futureLowerLabel,
} = props.timelineData;

// const firstRange = [...timelineData.range_time.splice(0, 8)];
// const secondRange = [...timelineData.range_time];

// const firstRangeUpper = [];
// const firstRangeLower = [];
// const secondRangeUpper = [];
// const secondRangeLower = [];
// const firstRangeLabel = timelineData.range_time_labels[0].range_time_label;
// const secondRangeLabel = timelineData.range_time_labels[1].range_time_label;
// const futureLabel = timelineData.timeline_future_label;
// const futureDescription = timelineData.timeline_future_description;
// const futureLowerLabel = timelineData.timeline_future_low_label;

// firstRange.forEach((item, index) => {
//   const indexFixed = index + 1;
//   if (indexFixed % 2 != 0) {
//     firstRangeUpper.push(item);
//   } else {
//     firstRangeLower.push(item);
//   }
// });

// secondRange.forEach((item, index) => {
//   const indexFixed = index + 1;
//   if (indexFixed % 2 != 0) {
//     secondRangeUpper.push(item);
//   } else {
//     secondRangeLower.push(item);
//   }
// });
</script>
