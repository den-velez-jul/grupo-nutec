<template>
  <div class="pt-[96px] lg:pt-[146px]">
    <TopBanner v-if="lang == 'es'" :labelList="['Eventos']" />
    <TopBanner v-if="lang == 'en'" :labelList="['Events']" />
  </div>
  <div
    v-if="events"
    class="mx-6 md:mx-[50px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <section class="py-[60px] lg:px-5 xl:px-[225px]">
      <h4
        v-if="lang == 'es'"
        class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-[100px]">
        Próximos Eventos
      </h4>
      <h4
        v-if="lang == 'en'"
        class="heading3 mb-[50px] text-center text-dark-blue md:mb-[72px] lg:mb-[100px]">
        Upcoming Events
      </h4>

      <CardEvent :cardEventProps="event" />
    </section>
  </div>
</template>

<script setup>
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();

const lang = locale.value;

const { data: events } = await useAsyncData("events", () =>
  client.getAllByType("event", { lang: localeIso })
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
