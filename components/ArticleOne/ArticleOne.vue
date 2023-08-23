<template>
  <div class="lg:grid lg:grid-cols-[48%_48%] lg:gap-x-10">
    <div class="mb-[80px]">
      <h1>
        <PrismicText
          :field="title"
          class="heading1 text-dark-blue text-center mt-10 mb-5 lg:text-left lg:mt-0 lg:mb-10" />
      </h1>
      <div class="flex justify-center lg:justify-start">
        <a :href="linkUrl.url" class="flex items-center text-dark-blue"
          ><span class="text-big">
            <PrismicText :field="linkLabel" />
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3"
        /></a>
      </div>
    </div>
    <div>
      <img :src="image.url" class="w-full h-[430px] object-cover" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  descriptionProps: {
    title: String,
    image: String,
    linkLabel: String,
    linkUrl: String,
  },
});

const { title, image, linkLabel, linkUrl } = props.descriptionProps;
</script>
