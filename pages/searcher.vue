<template>
  <div class="pt-[96px] lg:pt-[146px]"></div>
  <div
    class="py-[80px] xl:max-w-[1920px] xl:mx-auto mx-6 md:mx-[50px] lg:mx-[75px] xl:px-[100px]">
    <h1 class="heading1 text-center text-dark-blue mb-[36px] lg:mb-[48px]">
      {{ labels.title }}
    </h1>
    <div>
      <p class="text-blue heading3 mb-3 md:mb-4 lg:mb-5 xl:mb-6">
        {{ labels.labelInput }}
      </p>
      <input
        ref="searcherInput"
        @input="handleInput"
        @keydown.enter="handleEnterKey"
        type="text"
        :placeholder="labels.placeholder"
        class="text-dark-blue bg-baby-blue heading2 py-3 px-6 md:py-4 md:px-8 lg:py-5 xl:px-10" />
    </div>
    <div class="py-8 mt-8 lg:mt-12">
      <h1 v-if="results.articles.length > 0" class="text-crimson heading2">
        {{ labels.titleArticle }}
      </h1>
      <div
        class="mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        <CardArticle
          v-for="article of results.articles"
          :title="article.article_title"
          :image="article.article_image"
          :author="article.article_author"
          :date="article.article_date"
          :ctaLabel="article.article_cta_label"
          :ctaLink="article.article_cta_link" />
      </div>
    </div>
    <div class="py-8 mt-8 lg:mt-12">
      <h1 v-if="results.products.length > 0" class="text-crimson heading2">
        {{ labels.titleProduct }}
      </h1>
      <div
        class="mt-6 md:mt-8 lg:mt-10 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        <CardProduct
          v-for="product of results.products"
          :companyProps="product.productProps"
          :redTitle="product.redTitle"
          :anchorLeft="product.anchorLeft"
          :title="product.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { es } from "date-fns/locale";
const { localeProperties, locale } = useI18n();
const localeIso = localeProperties.value.iso;
const { client } = usePrismic();

const labels = {
  title: locale.value == "es" ? "Busqueda" : "Search",
  labelInput:
    locale.value == "es" ? "Resultados de la busqueda:" : "Search results for:",
  placeholder:
    locale.value == "es" ? "¿Que esta buscando?" : "What are you looking for?",
  titleProduct:
    locale.value == "es" ? "Productos y Servicios" : "Products and Services",
  titleArticle: locale.value == "es" ? "Articulos" : "Articles",
};

const { data: products } = await useAsyncData("products", () =>
  client.getAllByType("product", { lang: localeIso })
);

const { data: articles } = await useAsyncData("articles", () =>
  client.getAllByType("article", { lang: localeIso })
);

let searcherInput = ref("");

let results = reactive({
  searcher: "",
  articles: [],
  products: [],
  inputTimer: null,
  delayedInput: "",
});

const productList = products.value;
const articleList = articles.value;

const searcher = () => {
  if (results.searcher.length < 3) {
    results.products = [];
    results.articles = [];
    return;
  }
  const newResultProducts = [];
  const newResultArticles = [];
  productList.forEach((product) => {
    const title = product.data.product_name[0].text.toLocaleLowerCase();
    if (title.includes(results.searcher)) {
      const productItem = {
        productProps: {
          cta_link1: product.data.product_cta_link,
          cta_label1: product.data.product_cta_label[0].text,
          imagen: product.data.producto_image,
          description: product.data.product_description,
        },
        title: product.data.product_name[0].text,
        redTitle: false,
        anchorLeft: true,
        position: product.data.product_sort_post,
      };

      newResultProducts.push(productItem);
    }
  });

  articleList.forEach((article) => {
    const title = article.data.article_title[0].text.toLocaleLowerCase();
    if (title.includes(results.searcher)) {
      const dateToTransfom = article.data.article_date
        ? new Date(article.data.article_date)
        : new Date();

      const dateUpdated = format(dateToTransfom, "dd/MM/yyyy", {
        locale: es,
      });

      const dataUpdated = {
        ...article.data,
        article_date: dateUpdated,
      };

      newResultArticles.push(dataUpdated);
    }
  });

  results.products = newResultProducts;
  results.articles = newResultArticles;
};

function handleEnterKey(e) {
  results.searcher = searcherInput.value.value;
  searcher();
}

function handleInput(event) {
  // Clear the previous timer, if it exists
  if (results.inputTimer) {
    clearTimeout(results.inputTimer);
  }

  // Set a new timer to delay the input processing
  results.inputTimer = setTimeout(() => {
    results.searcher = searcherInput.value.value;
    results.delayedInput = event.target.value;
    searcher();
  }, 500); // 500 milliseconds delay
}
</script>
