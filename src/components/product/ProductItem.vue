<template>
  <q-card class="product-card">
    <q-card-section>
      <q-img :src="imageUrl" alt="Imagen del producto" />
    </q-card-section>
    <q-card-section>
      <q-card-title class="text-h6 font-weight-bold">{{
        product.title
      }}</q-card-title>
      <div>Calificación Promedio: {{ product.vote_average }}</div>
      <div>Número de Votos: {{ product.vote_count }}</div>
    </q-card-section>
  </q-card>
</template>

<style>
.product-card {
  width: 300px;
}
.product-card q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      urlImage: "https://gebelesebeti.ge/front/asset/img/default-product.png",
    };
  },
  computed: {
    imageUrl() {
      const baseUrl = this.$imagenes.defaults.baseURL;
      //console.log(baseUrl +''+this.product.poster_path);

      return `${baseUrl}${this.product.poster_path}`;
    },
  },
};
</script>
