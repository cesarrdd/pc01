<template>
  <q-card class="product-card">
    <q-card-section>
      <q-img :src="product.url" alt="Imagen del producto" />
    </q-card-section>
    <q-card-section>
      <h6 class="text-h6 font-weight-bold">{{ product.title }}</h6>
      <div>Fecha: {{ product.date }}</div>
      <div>Version: {{ product.service_version }}</div>
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

      return `${baseUrl}${this.product.url}`;
    },
  },
};
</script>
