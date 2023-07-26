<template>
  <div class="text-3xl font-bold underline h-[400px]"></div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getByUID("home", "homepage")
);
</script>

<script></script>
