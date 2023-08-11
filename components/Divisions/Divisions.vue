<template>
  <section
    class="grid lg:flex lg:justify-center grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-x-10 lg:gap-0 gap-y-[30px] py-5 px-6 bg-baby-blue xl:max-w-[1720px] xl:mx-auto">
    <div
      v-for="division of divisions"
      class="flex lg:max-w-[500px] lg:ml-[70px] max-w-[1900px]">
      <div
        class="w-[152px] h-[32px] min-w-[150px] flex justify-center items-center">
        <img
          :src="division.division_logo.url"
          alt=""
          class="w-auto h-auto"
          fit="cover" />
      </div>
      <div class="ml-3 flex flex-col justify-between lg:max-w-[250px]">
        <PrismicText
          :field="division.division_descripcion"
          class="text-small" />
        <div class="flex justify-end">
          <PrismicLink :field="division.division_cta" class="flex items-center">
            <span class="text-med text-dark-blue">
              <PrismicText :field="division.division_cta_label" />
            </span>
            <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3"
          /></PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  divisions: {
    division_logo: String,
    division_descripcion: String,
    division_cta: String,
    division_cta_label: String,
  },
});

const {
  division_logo,
  division_descripcion,
  division_cta,
  division_cta_label,
} = props.divisions;
</script>
