<template>
  <div class="pt-[146px]">
    <TopBanner :labelList="['Eventos']" />
  </div>
  <div
    v-if="events"
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section class="py-[60px] lg:px-5 xl:px-[225px]">
      <h4
        class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-[100px]">
        Proximos Eventos
      </h4>
      <CardEvent :cardEventProps="event" />
      <div class="mt-8 w-full">
        <a href="/" class="flex items-center">
          <span class="text-big text-dark-blue">
            Conoce eventos anteriores
          </span>
          <img src="~assets/icons/arrow-dark-blue.svg" class="ml-3" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { client } = usePrismic();

const { data: events } = await useAsyncData("events", () =>
  client.getAllByType("event")
);

const latestEvent = events.value[0].data;

const event = {
  title: latestEvent.title,
  topLabel: latestEvent.label,
  place: latestEvent.location,
  dateStart: latestEvent.start_day,
  dateEnd: latestEvent.end_day,
  ctaLabel: latestEvent.event_cta_label[0].text,
  ctaLink: latestEvent.event_cta,
};
</script>
