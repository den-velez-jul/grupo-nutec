<template>
  <article
    class="grid grid-cols-1 grid-rows-2 bg-light-baby-blue lg:grid-cols-2 lg:grid-rows-1">
    <div
      class="flex flex-col justify-between px-6 py-8 lg:p-10 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3">
      <div>
        <span class="text-blue font-bold md:text-[20px]">
          <PrismicText :field="topLabel" />
        </span>
        <p
          class="text-[#3D3D3D] text-[30px] font-founders-grosteskers font-bold mt-6">
          <PrismicText :field="title" />
        </p>
      </div>
      <div class="flex justify-between text-blue md:text-[20px]">
        <span><PrismicText :field="place" /></span>
        <AnchorIcon :labelBtn="ctaLabel" :urlTo="ctaLink.url" />
      </div>
    </div>
    <div
      class="flex flex-col justify-between items-center py-12 px-6 bg-dark-blue text-white p-8 pb-[60px] md:pb-[40px] lg:pb-[60px] lg:py-[74px] lg:px-[92px] lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2">
      <p
        class="text-[90px] xl:text-[120px] font-bold font-founders-grosteskers">
        {{ dayRangeTitle }}
      </p>
      <p class="text-blue text-[30px] font-bold lg:text-[20px]">
        {{ dateTitle }}
      </p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  cardEventProps: {
    title: String,
    topLabel: String,
    place: String,
    dateStart: String,
    dateEnd: String,
    ctaLabel: String,
    ctaLink: String,
  },
});

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const { title, topLabel, place, dateStart, dateEnd, ctaLabel, ctaLink } =
  props.cardEventProps;

const yearStart = dateStart.slice(0, 4);
const monthStart = parseInt(dateStart.slice(5, 7), 10) - 1;
const dateTitle = months[monthStart] + " " + yearStart;

const dayRangeTitle = dateStart.slice(8, 10) + "-" + dateEnd.slice(8, 10);
</script>
