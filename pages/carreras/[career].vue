<template>
  <div class="pt-[96px] lg:pt-[146px]">
    <TopBanner
      v-if="lang == 'es'"
      :labelList="['Carreras', careerData.title[0].text]" />
    <TopBanner
      v-if="lang == 'en'"
      :labelList="['Carrers', careerData.title[0].text]" />
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
      <Form class="mt-[32px]" @submit="onSubmit" :validation-schema="schema">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          <div class="flex flex-col">
            <Field
              name="name"
              class="bg-baby-blue text-dark-blue body-reg py-[10px] px-4"
              type="text"
              :placeholder="formLabels.name" />
            <ErrorMessage name="name" class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="country"
              class="bg-baby-blue text-dark-blue body-reg py-[10px] px-4"
              type="text"
              :placeholder="formLabels.country" />
            <ErrorMessage
              name="country"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="email"
              type="email"
              class="bg-baby-blue text-dark-blue body-reg py-[10px] px-4"
              :placeholder="formLabels.email" />
            <ErrorMessage
              name="email"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="phone"
              class="bg-baby-blue text-dark-blue body-reg py-[10px] px-4"
              type="number"
              :placeholder="formLabels.phone" />
            <ErrorMessage
              name="phone"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col"></div>
        </div>
        <div class="mt-4 h-[126px]">
          <Field v-model="comment" v-slot="{ field }" name="comments">
            <textarea
              v-bind="field"
              name="comments"
              type="text"
              :placeholder="formLabels.comments"
              class="bg-baby-blue text-dark-blue body-reg py-[10px] px-4 min-h-[120px]" />
          </Field>
        </div>
        <div
          id="drop-area"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
          @dragover="handleDragOver"
          @drop="handleDrop"
          @click="triggerFileInput"
          class="mt-4 bg-blue w-full flex px-4 py-[10px] text-white body-reg border-dashed border-[2px] border-black cursor-pointer">
          <div class="h-4 flex items-center">
            <span>{{ careerFormInputs.es.fileLabel }}</span>
            <button @click="triggerFileInput">
              <img src="~assets/icons/attach.svg" alt="attach icon" />
            </button>
          </div>
          <Field
            name="resume"
            type="file"
            :rules="{ size: 2000, ext: ['pdf'] }"
            id="fileInput"
            ref="fileInput"
            accept=".pdf"
            @change="handleFileSelect"
            class="hidden" />
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
      </Form>
    </div>
  </section>
</template>

<script setup>
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import FormData from "form-data";
const route = useRoute();
const lang = locale.value;

const { data: careerFeed } = await useAsyncData("careerFeed", () =>
  client.getByUID("career_feed", "careerpage", { lang: localeIso })
);

const careerUID = route.params.career;
const { data: career } = await useAsyncData("career", async () => {
  const document = await client.getByUID("career", careerUID, {
    lang: localeIso,
  });

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

let showLocationDetails = reactive({
  formMessage: "",
  isDragging: false,
});

const formLabels = {
  name: locale.value == "es" ? "Nombre Completo*" : "Full Name*",
  country: locale.value == "es" ? "País*" : "Country*",
  email: locale.value == "es" ? "Correo*" : "Email*",
  phone: locale.value == "es" ? "Telefóno*" : "Phone*",
  comments: locale.value == "es" ? "Comentarios" : "Comments",
  requiredLabel:
    locale.value == "es" ? "*Campos requeridos" : "*Required fields",
  requiredLabel2:
    locale.value == "es"
      ? "*Por favor, sube solo archivos PDF. Los archivos deben ser menores a 2 MB."
      : "*Please, justo PDF files. The file must be less than 2 MB.",
  formLabel:
    locale.value == "es"
      ? "Al enviar este formulario, aceptas nuestros Términos y Condiciones"
      : "When submitting this form, you agree to our Terms and Conditions",
  btnLabel: locale.value == "es" ? "Enviar Formulario" : "Form Submit",
};

const schema = yup.object({
  name: yup.string().required(),
  country: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  comments: yup.string(),
});

function onSubmit(values, { resetForm }) {
  const file = values.resume;
  delete values.resume;
  const payload = {
    ...values,
    language: locale.value,
    page: "career",
  };

  axios
    .post("/.netlify/functions/career-email", { payload })
    .then((response) => {
      showLocationDetails.formMessage = "success";
      resetForm();
      setTimeout(() => {
        showLocationDetails.formMessage = "";
      }, 3000);
    })
    .catch((error) => {
      showLocationDetails.formMessage = "error";
      setTimeout(() => {
        showLocationDetails.formMessage = "";
      }, 3000);
    });
}

function handleDragEnter(e) {
  e.preventDefault();
  showLocationDetails.isDragging = true;
}

function handleDragLeave(e) {
  console.log("handleDragLeave");
  e.preventDefault();
  showLocationDetails.isDragging = false;
}
function handleDragOver(e) {
  console.log("handleDragOver");
  e.preventDefault();
}

function handleDrop(e) {
  console.log("handledrop");
  e.preventDefault();
  showLocationDetails.isDragging = false;

  const files = e.dataTransfer.files;
  processFiles(files);
}

function handleFileSelect() {
  const files = fileInput.files;
  processFiles(files);
}

function triggerFileInput() {
  fileInput.click();
}

function processFiles(files) {
  for (const file of files) {
    if (file.type === "application/pdf" && file.size <= 2 * 1024 * 1024) {
      // Handle the valid PDF file here
      console.log("PDF file selected:", file.name);
    } else {
      alert("Please select a PDF file less than 2MB.");
    }
  }
}
</script>
