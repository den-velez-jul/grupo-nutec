<template>
  <div class="pt-[146px]">
    <TopBanner :labelList="['Carreras', careerData.title[0].text]" />
  </div>
  <section
    class="pt-[80px] pb-[60px] mx-6 md:mx-[50px] lg:pb-0 lg:pt-[150px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <h1>
      <PrismicText
        class="heading3 mb-[80px] text-center text-dark-blue"
        :field="pageTitle" />
    </h1>
    <div class="bg-baby-blue py-[60px] px-6">
      <h2 class="heading3 mb-[90px] text-dark-blue text-center uppercase">
        <PrismicText :field="careerData.title" />
      </h2>
      <div class="flex flex-col">
        <span class="body-bold text-dark-blue"
          ><PrismicText :field="careerData.title"
        /></span>
        <div class="mt-[10px] flex gap-x-[10px]">
          <span class="body-bold">Categoria:</span>
          <PrismicText :field="careerData.category" />
        </div>
        <div class="mt-[10px] flex gap-x-[10px]">
          <span class="body-bold">Ubicación:</span>
          <PrismicText :field="careerData.location" />
        </div>
      </div>
      <div class="mt-10">
        <h3 class="body-bold text-dark-blue">Descripción</h3>
        <PrismicText class="mt-5" :field="careerData.description" />
      </div>
      <div class="mt-10">
        <h3 class="body-bold text-dark-blue">Conocimientos</h3>
        <ul class="mt-5 list-disc ml-4">
          <li v-for="conoc of careerData.knowledge">
            <PrismicText :field="conoc.knowledge_item" />
          </li>
        </ul>
      </div>
      <div class="mt-10">
        <h3 class="body-bold text-dark-blue">Educacion</h3>
        <ul class="mt-5 list-disc ml-4">
          <li v-for="educacion of careerData.education">
            <PrismicText :field="educacion.education_item" />
          </li>
        </ul>
      </div>
      <div class="mt-10">
        <h3 class="body-bold text-dark-blue">Habilidades</h3>
        <ul class="mt-5 list-disc ml-4">
          <li v-for="habilidad of careerData.skills">
            <PrismicText :field="habilidad.skills_item" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section
    class="pt-[80px] pb-[60px] mx-6 md:mx-[50px] lg:pb-0 lg:pt-[150px] lg:mx-[75px] xl:mx-auto max-w-[1920px] xl:px-[100px]">
    <h2 class="heading2 text-dark-blue lg:w-[50%]">
      <PrismicText :field="careerForm.title" />
    </h2>
    <div class="lg:grid lg:grid-cols-[48%_48%] lg:gap-x-5">
      <div>
        <p class="mt-10 body-reg">
          <PrismicText :field="careerForm.description" />
        </p>
        <p class="mt-5 body-bold">
          <PrismicText :field="careerForm.caption" />
        </p>
      </div>
      <form class="mt-[32px]">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <input
            class="bg-baby-blue px-4 py-[10px] body-reg"
            type="text"
            :placeholder="careerFormInputs.es.name" />
          <input
            class="bg-baby-blue px-4 py-[10px] body-reg"
            type="text"
            :placeholder="careerFormInputs.es.country" />
          <input
            class="bg-baby-blue px-4 py-[10px] body-reg"
            type="text"
            :placeholder="careerFormInputs.es.email" />
          <input
            class="bg-baby-blue px-4 py-[10px] body-reg"
            type="text"
            :placeholder="careerFormInputs.es.phone" />
        </div>
        <div class="mt-4 h-[126px]">
          <textarea
            class="bg-baby-blue px-4 py-[10px] body-reg h-full"
            type="text"
            :placeholder="careerFormInputs.es.comments" />
        </div>
        <div
          class="mt-4 bg-blue w-full flex px-4 py-[10px] text-white body-reg">
          <span>{{ careerFormInputs.es.fileLabel }}</span>
          <!-- <textarea type="file" /> -->
        </div>
        <div class="mt-[22px] md:flex md:justify-between">
          <div class="flex flex-col items-center md:items-start md:w-[50%]">
            <span class="text-center body-bold md:text-left">{{
              careerFormInputs.es.caption1
            }}</span>
            <span class="text-center body-bold md:text-left">{{
              careerFormInputs.es.caption2
            }}</span>
            <span class="text-center body-reg mt-5 md:text-left">{{
              careerFormInputs.es.caption3
            }}</span>
          </div>
          <div
            class="flex justify-center items-center mt-10 md:mt-0 md:items-start">
            <button class="bg-dark-blue text-white text-big px-5 py-4">
              {{ careerFormInputs.es.btnLabel }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const { client } = usePrismic();
const route = useRoute();

const { data: careerFeed } = await useAsyncData("careerFeed", () =>
  client.getByUID("career_feed", "careerpage")
);

const careerUID = route.params.career;
const { data: career } = await useAsyncData("career", async () => {
  const document = await client.getByUID("career", careerUID);

  if (document) {
    return document;
  } else {
    null;
  }
});

const careerFeedData = careerFeed.value.data;
const pageTitle = careerFeedData.career_title;
const careerData = career.value.data;

const careerForm = {
  title: careerFeedData.career_form_title,
  description: careerFeedData.career_form_description,
  caption: careerFeedData.career_form_caption,
};

const careerFormInputs = {
  es: {
    name: "Nombre Completo*",
    country: "Pais*",
    email: "Correo*",
    phone: "Teléfono*",
    comments: "Comentarios*",
    fileLabel: "Arrastra archivos para adjuntar¹ o busca*",
    btnLabel: "Enviar Curriculum",
    caption1: "* Campos requeridos",
    caption2:
      "¹ Por favor, sube solo archivos PDF. Los archivos deben ser menores a 2 MB.",
    caption3:
      "Al enviar este formulario, aceptas nuestra política de privacidad.",
  },
  en: {
    name: "Name*",
    country: "Country*",
    email: "Email*",
    phone: "Phone*",
    comments: "Comments*",
    fileLabel: "Drag files to attach or find*",
    btnLabel: "Send Resume",
    caption1: "*Fields required",
    caption2: "¹ Please, only PDF files. File max size must be less than 2 MB.",
  },
};
</script>
