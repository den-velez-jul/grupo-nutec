<script setup lang="ts">
import { Content } from "@prismicio/client";
const { locale } = useI18n();
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import axios from "axios";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FormularioSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

let showLocationDetails = reactive({
  formMessage: "",
});

const formLabels = {
  name: locale.value == "es" ? "Nombre*" : "Name*",
  lastname: locale.value == "es" ? "Apellido*" : "LastName*",
  phone: locale.value == "es" ? "Telefóno*" : "Phone*",
  email: locale.value == "es" ? "Correo*" : "Email*",
  country: locale.value == "es" ? "País*" : "Country*",
  state: locale.value == "es" ? "Estado*" : "State*",
  city: locale.value == "es" ? "Ciudad*" : "City*",
  company: locale.value == "es" ? "Nombre de la empresa*" : "Company name*",
  requiredLabel:
    locale.value == "es" ? "*Campos requeridos" : "*Required fields",
  formLabel:
    locale.value == "es"
      ? "Al enviar este formulario, aceptas nuestros Términos y Condiciones"
      : "When submitting this form, you agree to our Terms and Conditions",
  btnLabel: locale.value == "es" ? "Enviar Formulario" : "Form Submit",
};

const schema = yup.object({
  name: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required().email(),
  country: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  company: yup.string().required(),
  source: yup.string(),
  comments: yup.string(),
});
function onSubmit(values, { resetForm }) {
  const payload = {
    ...values,
    language: locale.value,
    page: "article",
  };

  resetForm();
  axios
    .post("/.netlify/functions/send-email", { payload })
    .then((response) => {
      showLocationDetails.formMessage = "success";
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
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-mid-blue mt-[60px] py-20 px-6 md:px-[50px] md:py-[80px] lg:px-[75px] xl:px-[100px] xl:py-[100px] xl:mt-[80px]">
    <div>
      <h2 class="heading1 text-dark-blue">
        <PrismicRichText :field="slice.primary.form_title" />
      </h2>
    </div>
    <div
      class="px-6 pt-10 pb-[80px] flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[80px]">
      <div class="text-dark-blue">
        <p class="body-reg text-dark-blue">
          <PrismicRichText :field="slice.primary.form_description" />
        </p>
      </div>
      <Form class="" @submit="onSubmit" :validation-schema="schema">
        <div
          class="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-4 md:gap-x-3">
          <div class="flex flex-col">
            <Field
              name="name"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.name" />
            <ErrorMessage name="name" class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="lastname"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.lastname" />
            <ErrorMessage
              name="lastname"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="phone"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="number"
              :placeholder="formLabels.phone" />
            <ErrorMessage
              name="phone"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="email"
              type="email"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              :placeholder="formLabels.email" />
            <ErrorMessage
              name="email"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="country"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.country" />
            <ErrorMessage
              name="country"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="state"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.state" />
            <ErrorMessage
              name="state"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="city"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.city" />
            <ErrorMessage name="city" class="text-[#FF0000] text-[10px] px-2" />
          </div>
          <div class="flex flex-col">
            <Field
              name="company"
              class="bg-white text-dark-blue font-founders-grosteskers font-bold py-[10px] px-4"
              type="text"
              :placeholder="formLabels.company" />
            <ErrorMessage
              name="company"
              class="text-[#FF0000] text-[10px] px-2" />
          </div>
        </div>
        <div
          class="relative flex flex-col items-center md:flex-row md:justify-between">
          <div
            v-if="showLocationDetails.formMessage == 'success'"
            class="absolute inset-0 p-4 flex items-center bg-baby-blue text-dark-blue">
            <img src="~assets/icons/success.svg" class="w-[50px] h-[50px]" />

            <span class="text-dark-blue body-reg ml-3">Has been sent</span>
          </div>
          <div
            v-if="showLocationDetails.formMessage == 'error'"
            class="absolute inset-0 p-4 flex items-center bg-baby-blue text-dark-blue">
            <img src="~assets/icons/error.svg" class="w-[50px] h-[50px]" />
            <span class="text-dark-blue body-reg ml-3">Please, try again</span>
          </div>
          <div
            class="mt-[40px] flex flex-col items-center md:items-start text-dark-blue">
            <span class="body-bold text-center md:text-left">{{
              formLabels.requiredLabel
            }}</span>
            <span
              class="mt-5 body-reg text-center max-w-[400px] md:text-left"
              >{{ formLabels.formLabel }}</span
            >
          </div>
          <button class="mt-[40px] lg:hidden text-big bg-white px-5 py-4">
            <span class="text-dark-blue">{{ formLabels.btnLabel }}</span>
          </button>
          <button class="hidden lg:block text-big bg-dark-blue px-5 py-4">
            <span class="text-white">{{ formLabels.btnLabel }}</span>
          </button>
        </div>
      </Form>
    </div>
  </section>
</template>
