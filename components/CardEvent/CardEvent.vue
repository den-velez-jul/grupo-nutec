<template>
  <article
    class="grid grid-cols-1 grid-rows-2 bg-light-baby-blue lg:grid-cols-2 lg:grid-rows-1">
    <div
      class="flex flex-col justify-between px-6 py-8 lg:p-10 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3">
      <div>
        <span class="text-blue font-bold md:text-[20px]">EXPO</span>
        <p
          class="text-[#3D3D3D] text-[30px] font-founders-grosteskers font-bold mt-6">
          NUTEC Bickley en Forge Fair 2023
        </p>
      </div>
      <div class="flex justify-between text-blue md:text-[20px]">
        <span>Cleveland, Ohio, USA</span>
        <AnchorIcon :labelBtn="labelBtn" />
      </div>
    </div>
    <div
      class="flex flex-col justify-between items-center py-12 px-6 bg-dark-blue text-white p-8 pb-[60px] md:pb-[40px] lg:pb-[60px] lg:py-[74px] lg:px-[92px] lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2">
      <p
        class="text-[90px] xl:text-[120px] font-bold font-founders-grosteskers">
        24-25
      </p>
      <p class="text-blue text-[30px] font-bold lg:text-[20px]">Mayo 2023</p>
    </div>
  </article>
</template>

<script setup>
const title = "División Fibras";
const paragraph =
  "Conoce nuestro newsroom enfocado en Hornos industriales altamente especializados";
const labelBtn = "Conoce más";
</script>
