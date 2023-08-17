<script setup lang="ts">
import { Content } from "@prismicio/client";

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

const inputList = [
  "Nombre Completo*",
  "Apellido*",
  "Teléfono*",
  "Correo*",
  "País*",
  "Estado*",
  "Ciudad*",
  "Nombre de empresa*",
];
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-mid-blue mt-[60px] py-20 px-6 md:px-[50px] md:py-[80px] lg:px-[75px] xl:px-[100px] xl:py-[100px] xl:mt-[80px]">
    <div>
      <h2 class="heading1">¿Quieres Saber Más?</h2>
    </div>
    <div
      class="px-6 pt-10 pb-[80px] flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-[80px]">
      <div class="text-dark-blue">
        <p class="body-reg text-dark-blue">
          En Grupo NUTEC, estamos comprometidos a brindarte contenido de valor
          que te permita tomar las mejores decisiones para tu negocio. Gracias
          por dedicar tu valioso tiempo en leer esta entrada, esperamos que ésta
          te haya brindado información que te sea de utilidad en tus
          operaciones.
        </p>
        <p class="body-reg mt-[30px] text-dark-blue">
          Si tienes alguna pregunta o deseas obtener más información sobre
          nuestros productos, no dudes en contactarnos.
        </p>
        <p class="body-reg mt-[30px] text-dark-blue">
          Para comunicarte con nosotros, simplemente completa el formulario y
          uno de nuestros expertos se pondrá en contacto contigo lo antes
          posible.
        </p>
      </div>
      <form class="">
        <div
          class="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-4 md:gap-x-3">
          <input
            v-for="formInp of inputList"
            class="bg-white p-4 body-reg"
            :placeholder="formInp" />
        </div>
        <div class="flex flex-col items-center md:flex-row md:justify-between">
          <div
            class="mt-[40px] flex flex-col items-center md:items-start text-dark-blue">
            <span class="body-bold text-center md:text-left"
              >*Campos requeridos</span
            >
            <span class="mt-5 body-reg text-center max-w-[400px] md:text-left"
              >Al enviar este formulario, aceptas nuestros Términos y
              Condiciones</span
            >
          </div>
          <button class="mt-[40px] lg:hidden text-big bg-white px-5 py-4">
            <span class="text-dark-blue">Enviar Formulario</span>
          </button>
          <button class="hidden lg:block text-big bg-dark-blue px-5 py-4">
            <span class="text-white">Enviar Formulario</span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
