<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <p>Hello text</p>
</template>
<script setup>
const { client } = usePrismic();

const { data: home } = await useAsyncData("pruebas", () => {
  console.log("indo");
  console.log("den", client);
  const uudd = client.getByUID("page", "pruebas");
  return uudd;
});
</script>
