<template>
  <div class="product-page">
    <div class="product-filter q-ml-md q-mr-xl">
      <ProductFilter @categoriaCambiada="actualizarCategoria" />
    </div>
    <div class="product-list q-mr-md">
      <ProductList :categoriaFiltrada="categoriaSeleccionada" />
    </div>
  </div>
</template>

<style>
.product-page {
  display: flex;
  justify-content: space-between;
}

.product-filter {
  width: 25%;
}

.product-list {
  width: 75%;
}
</style>

<script>
import ProductFilter from "src/components/product/ProductFilter.vue";
import ProductList from "src/components/product/ProductList.vue";

export default {
  name: "ProductPage",
  components: { ProductFilter, ProductList },
  data() {
    return {
      categoriaSeleccionada: null
    }
  },
  methods: {
    actualizarCategoria(categoria) {
      console.log("La categoria recibida es: " + categoria);
      this.categoriaSeleccionada = categoria;
    },
  }
};
</script>
