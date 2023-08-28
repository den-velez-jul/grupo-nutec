<template>
  <div class="hidden lg:flex px-[80px] py-[45px]">
    <div class="flex flex-col max-w-[604px] pl-[40px] pr-[20px]">
      <h3 class="text-[35px] text-dark-blue mb-5 font-bold">
        <PrismicRichText :field="title" />
      </h3>
      <PrismicRichText class="body-reg" :field="paragraph" />
      <!-- <NuxtLink class="uppercase text-[18px]">{{ moreDetails.label }}</NuxtLink> -->
    </div>
    <div
      class="flex flex-col text-left font-bold pl-[30px] pt-3 text-[18px] text-dark-blue">
      <button
        class="mb-3 text-left"
        v-for="link of links"
        @click="sendData(link.internal_path)">
        {{ link.label[0].text }}
      </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close-modal"]);
const router = useRouter();
const props = defineProps({
  title: String,
  paragraph: String,
  moreDetails: {
    label: String,
    url: String,
  },
  links: {
    type: Array,
    default: () => [],
  },
});

const sendData = (path) => {
  router.push(path);
  emits("close-modal");
};

const { title, paragraph, moreDetails, links } = props;
</script>
