<template>
  <div class="lg:grid lg:grid-cols-[48%_48%] lg:gap-x-10">
    <div class="mb-[80px]">
      <h1>
        <PrismicText
          :field="title"
          class="text-dark-blue text-center mt-10 mb-5 lg:text-left lg:mt-0 lg:mb-10" />
      </h1>
      <div class="flex justify-center lg:justify-start">
        <PrismicLink :field="linkUrl" class="flex items-center text-dark-blue"
          ><span class="font-bold md:text-[20px] xl:text-[30px]">
            <PrismicText :field="linkLabel" />
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3"
        /></PrismicLink>
      </div>
    </div>
    <div>
      <img src="~assets/images/dummy.png" class="w-full h-[430px]" />
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
