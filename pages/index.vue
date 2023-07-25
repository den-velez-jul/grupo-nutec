<template>
  <div class="text-3xl font-bold underline">
    <h1>{{ title.text }}</h1>
    <button>link here</button>
    <!-- <p>{{ home.data }}</p> -->
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);

const perro = "dog";
console.log(perro);
console.log(home.value.data);

const title = home.value.data.title[0];
console.log(title);
</script>

<script></script>
