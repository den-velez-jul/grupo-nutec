<template>
  <div>
    <div class="text-3xl font-bold underline"></div>
    <button>link here</button>
    <p>{{ home.data }}</p>
  </div>
</template>
<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);
</script>
