<template>
  <article>
    <div>
      <img src="~assets/icons/leaf.svg" class="" />
      <h2>Misión</h2>
    </div>
    <p>
      Ser un grupo de clase mundial en la fabricación de aislamientos de alta
      temperatura, Hornos y Hornos, suministrando productos de alta calidad y un
      servicio superior superando las expectativas de los empleados y
      accionistas de nuestros clientes.
    </p>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  description: String,
});

const { title, image, description } = props;
</script>
