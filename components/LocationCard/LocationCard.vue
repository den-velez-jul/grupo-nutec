<template>
  <div
    class="absolute bg-dark-blue p-8 pb-10 flex flex-col text-white text-[30px] lg:w-[430px] z-10">
    <h2 class="font-founders-grosteskers font-bold text-[24px]">
      {{ title }}
    </h2>
    <h3 class="mt-2 font-founders-grosteskers font-bold text-[24px]">
      {{ subtitle }}
    </h3>
    <h3 class="mt-8 font-bold text-mid-blue text-[20px]">
      {{ location }}
    </h3>
    <p class="mt-6 body-reg text-[20px]">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  locationProps: {
    title: String,
    subtitle: String,
    location: String,
    text: String,
  },
});

const { title, subtitle, location, text } = props.locationProps;
</script>
