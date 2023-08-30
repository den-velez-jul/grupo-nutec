<template>
  <div class="relative">
    <div
      class="absolute top-[100px] min-w-[100%] w-full h-10 grid grid-cols-2 px-10 z-[99999]">
      <button
        v-if="timelineBtns.showBackward"
        class="h-10 text-[40px] left-0"
        @click="scrollBackward">
        <img
          src="~assets/icons/arrow-white.svg"
          class="h-10 w-10 rotate-180 col-start-1" />
      </button>
      <button
        v-if="timelineBtns.showForward"
        class="h-10 text-[40px] col-start-2 justify-self-end"
        @click="scrollForward">
        <img src="~assets/icons/arrow-white.svg" class="h-10 w-10" />
      </button>
    </div>
    <div
      class="flex overflow-x-scroll h-[980px]"
      @scroll="handleScroll"
      ref="timeline">
      <div class="relative text-white bg-dark-blue h-full flex flex-col">
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
                class="text-center mb-3" />
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
              <div class="flex flex-col mt-[16px]">
                <PrismicText
                  :field="item.timeline_year"
                  class="mb-2 text-[70px] leading-[60px] font-founders-grosteskers font-semibold text-center" />
                <PrismicRichText
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
              <PrismicRichText
                :field="item.timeline_description"
                class="text-center mb-3" />
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
              <div class="flex flex-col mt-[16px]">
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

const timeline = ref(null);
let timelineBtns = reactive({
  scrollLeft: 0,
  showBackward: false,
  showForward: true,
});

const handleScroll = () => {
  if (timeline.value) {
    timelineBtns.scrollLeft = timeline.value.scrollLeft;
  }
  if (timeline.value.scrollLeft >= 6000) {
    timelineBtns.showForward = false;
  }
  if (timeline.value.scrollLeft < 6000) {
    timelineBtns.showForward = true;
  }
  if (timeline.value.scrollLeft <= 400) {
    timelineBtns.showBackward = false;
  }
  if (timeline.value.scrollLeft > 300) {
    timelineBtns.showBackward = true;
  }
};

const scrollBackward = () => {
  if (timeline.value) {
    timelineBtns.showForward = true;
    timeline.value.scrollLeft -= 400;
  }
  if (timeline.value.scrollLeft <= 400) {
    timelineBtns.showBackward = false;
  }
};

const scrollForward = () => {
  console.log(timeline.value.scrollWidth - timeline.value.scrollLeft);
  if (timeline.value) {
    timelineBtns.showBackward = true;
    timeline.value.scrollLeft += 400;
  }
  if (timeline.value.scrollWidth - timeline.value.scrollLeft <= 100) {
    timelineBtns.showForward = false;
  }
};
</script>
