<template>
  <div class="pt-[96px] lg:pt-[146px]">
    <TopBanner v-if="lang == 'es'" :labelList="['Contacto']" />
    <TopBanner v-if="lang == 'en'" :labelList="['Contact']" />
  </div>
  <Hero
    :title="hero.title"
    :topLabel="hero.topLabel"
    :ctaLabel="null"
    :ctaLink="null"
    :bgMedia="hero.bgMedia" />

  <section class="bg-dark-blue py-12 lg:pt-[150px] lg:pb-[100px]">
    <div
      class="xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <div>
        <h2 class="text-white heading2">
          <PrismicText :field="formLabelsData.title" />
        </h2>
      </div>
      <div
        class="mt-[50px] lg:mt-[50px] xl:mt-[40px] lg:grid lg:grid-cols-2 lg:gap-[100px]">
        <div class="">
          <p class="text-white xl:text-[18px]">
            <PrismicText :field="formLabelsData.description" />
          </p>
          <h3 class="mt-[60px] text-light-blue heading3">
            <PrismicText :field="formLabelsData.moreWays" />
          </h3>
          <div class="grid grid-col-1 gap-5 mt-[32px]">
            <div
              v-for="way of formLabelsData.otherWays"
              class="flex items-center">
              <img :src="way.icon.url" />
              <p class="body-reg text-white ml-5">
                <span><PrismicText :field="way.text" /></span>
              </p>
            </div>
          </div>
        </div>
        <form class="mt-8 lg:mt-0">
          <div>
            <div class="grid grid-cols-1 gap-[14px] md:grid-cols-2">
              <input
                v-for="item of formLabelsData.inputsLabels"
                class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
                type="text"
                :placeholder="item" />
            </div>
            <div class="mt-[14px] grid grid-cols-1 gap-[14px]">
              <input
                type="text"
                :placeholder="formLabelsData.inputsLabels2"
                class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4" />
              <textarea
                type="text"
                :placeholder="formLabelsData.textArea"
                class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4 min-h-[120px]" />
            </div>
          </div>
          <div
            class="flex flex-col mt-[50px] text-white font-bold md:flex-row md:justify-between">
            <div class="grid grid-cols-1 gap-4">
              <p class="text-center md:text-left">*Campos requeridos</p>
              <p class="text-center md:text-left">
                Al enviar este formulario, aceptas nuestros Términos y
                Condiciones
              </p>
            </div>
            <div class="mt-[60px] flex justify-center md:mt-0">
              <button
                class="py-[10px] px-4 bg-white text-dark-blue font-bold font-founders-grosteskers lg:bg-mid-blue lg:text-white">
                Enviar Formulario
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section
    class="py-[75px] lg:pb-[60px] lg:pt-[100px] xl:pt-[150px] xl:py-[100px] xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
    <h3 class="heading3 text-dark-blue">
      <PrismicText :field="contactData.label_companias" />
    </h3>
    <h2 class="heading2 text-dark-blue mt-5">
      <PrismicText :field="contactData.titulo_companias" />
    </h2>
    <div class="mt-[60px] mb-[50px] grid grid-cols-1 gap-10 md:grid-cols-2">
      <div v-for="division of companiesList" class="flex flex-col">
        <div
          class="w-full h-[240px] bg-baby-blue flex justify-center items-center">
          <img :src="division.iimagen_companias.url" />
        </div>
        <div class="flex-grow p-8 md:flex md:flex-col md:justify-between">
          <div class="mb-10">
            <h3 class="heading3 text-dark-blue">
              <PrismicText :field="division.sub_companias" />
            </h3>
            <p class="body-bold text-dark-blue mt-2">
              <PrismicText :field="division.label_sub_companias" />
            </p>
            <p class="body-reg text-dark-blue mt-[30px] lg:mt-[40px]">
              <PrismicRichText :field="division.descripcion_compania" />
            </p>
          </div>
          <div>
            <AnchorIcon
              :label-btn="division.link_cta_label[0].text"
              :url-to="division.link_cta.url" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-baby-blue py-12 xl:py-[60px]">
    <div
      class="xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
      <h3
        class="heading3 text-center mb-10 lg:mb-[60px] xl:mb-[80px] text-dark-blue">
        <PrismicText :field="mapsData.title" />
      </h3>
      <div class="flex justify-center relative min-h-[380px]">
        <img :src="mapsData.image.url" />
        <div
          class="lg:hidden absolute inset-0 flex justify-center items-center">
          <LocationCard :locationProps="locations.bickleyGlobal" />
        </div>
        <div class="hidden lg:block absolute top-[30%] left-[48%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="bickleyEU"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'bickleyEU'"
            :locationProps="locations.bickleyEU" />
        </div>
        <div class="hidden lg:block absolute top-[38%] left-[46%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="procal"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'procal'"
            :locationProps="locations.procal" />
        </div>
        <div class="hidden lg:block absolute top-[35%] left-[14%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="bickleyUSA"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'bickleyUSA'"
            :locationProps="locations.bickleyUSA" />
        </div>
        <div class="hidden lg:block absolute top-[40%] left-[26%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="nutecInc"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'nutecInc'"
            :locationProps="locations.nutecInc" />
        </div>
        <div class="hidden lg:block absolute top-[44%] left-[21%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="nutecNPC"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'nutecNPC'"
            :locationProps="locations.nutecNPC" />
        </div>
        <div class="hidden lg:block absolute top-[46%] left-[19%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="nutecFibras"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'nutecFibras'"
            :locationProps="locations.nutecFibras" />
        </div>
        <div class="hidden lg:block absolute bottom-[28%] left-[34%]">
          <button @click="(e) => onClickLocation(e.target.id)">
            <img
              id="nutecIbar"
              src="~assets/icons/icon-ubication.svg"
              alt="location icon" />
          </button>
          <LocationCard
            v-if="showLocationDetails.locationShoed == 'nutecIbar'"
            :locationProps="locations.nutecIbar" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();

const lang = locale.value;

const { data: contact } = await useAsyncData("contacto", () =>
  client.getByUID("contact", "contact", { lang: localeIso })
);

const contactData = contact.value.data;

const hero = {
  title: contactData.top_title[0].text,
  topLabel: contactData.top_label[0].text,
  bgMedia: [{ image: { ...contactData.top_image }, video: {} }],
};

const formLabelsData = {
  title: contactData.form_title,
  description: contactData.form_description,
  moreWays: contactData.more_ways_title,
  otherWays: contactData.more_ways,
  btnLabel: contactData.form_button_label,
  inputsLabels: [
    "Nombre*",
    "Apellido*",
    "Telefono*",
    "Correo*",
    "País*",
    "Estado*",
    "Ciudad*",
    "Nombre de la empresa",
  ],
  inputsLabels2: "¿Cómo se enteró de Grupo NUTEC?",
  textArea: "Comentarios",
};
const companiesList = contactData.companias;

const mapsData = {
  title: contactData.map_label,
  image: contactData.world_map,
};

const locations = {
  bickleyUSA: {
    id: "bickleyEU",
    title: contactData.nutec_bickley_title[0].text,
    subtitle: contactData.nutec_bickley_subtitle[0].text,
    location: contactData.nutec_bickley_location[0].text,
    text: contactData.nutec_bickley_description[0].text,
  },
  bickleyEU: {
    title: contactData.nutec_bickley_eu_title[0].text,
    subtitle: contactData.nutec_bickley_eu_subtitle[0].text,
    location: contactData.nutec_bickley_eu_location[0].text,
    text: contactData.nutec_bickley_eu_description[0].text,
  },
  bickleyGlobal: {
    title: contactData.nutec_global_title[0].text,
    subtitle: contactData.nutec_global_subtitle[0].text,
    location: contactData.nutec_global_location[0].text,
    text: contactData.nutec_global_description[0].text,
  },
  procal: {
    title: contactData.nutec_procal_title[0].text,
    subtitle: contactData.nutec_procal_subtitle[0].text,
    location: contactData.nutec_procal_location[0].text,
    text: contactData.nutec_procal_description[0].text,
  },
  nutecInc: {
    title: contactData.nutec_inc_title[0].text,
    subtitle: contactData.nutec_inc_subtitle[0].text,
    location: contactData.nutec_inc_location[0].text,
    text: contactData.nutec_inc_description[0].text,
  },
  nutecNPC: {
    title: contactData.nutec_npc_title[0].text,
    subtitle: contactData.nutec_npc_subtitle[0].text,
    location: contactData.nutec_npc_location[0].text,
    text: contactData.nutec_npc_description[0].text,
  },
  nutecFibras: {
    title: contactData.nutec_fibras_title[0].text,
    subtitle: contactData.nutec_fibras_subtitle[0].text,
    location: contactData.nutec_fibras_location[0].text,
    text: contactData.nutec_fibras_description[0].text,
  },
  nutecIbar: {
    title: contactData.nutec_ibar_title[0].text,
    subtitle: contactData.nutec_ibar_subtitle[0].text,
    location: contactData.nutec_ibar_location[0].text,
    text: contactData.nutec_ibar_description[0].text,
  },
};

let showLocationDetails = reactive({ locationShoed: "" });

function onClickLocation(idLocation) {
  let newValue;

  if (showLocationDetails.locationShoed == idLocation) {
    newValue = "";
  } else {
    newValue = idLocation;
  }
  showLocationDetails.locationShoed = newValue;
}
</script>
