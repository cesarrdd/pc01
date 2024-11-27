<template>
  <div class="product-page">
    <div class="product-filter q-ml-md q-mr-xl">
      <ProductFilter
        @categoriaCambiada="actualizarCategoria"
        @fecha1="actualizarFecha1"
        @fecha2="actualizarFecha2"
      />
    </div>
    <div class="product-list q-mr-md">
      <ProductList
        :categoriaFiltrada="categoriaSeleccionada"
        :fechaInicio="fecha1"
        :fechaFin="fecha2"
      />
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
      categoriaSeleccionada: null,
      fecha1: null,
      fecha2: null,
    };
  },
  methods: {
    actualizarCategoria(categoria) {
      console.log("La categoria recibida es: " + categoria);
      this.categoriaSeleccionada = categoria;
    },
    actualizarFecha1(fecha) {
      console.log("La fechas ini es: " + fecha + " / ");
      //this.fecha1 = fecha1;
      this.fecha1 = fecha;
    },
    actualizarFecha2(fecha) {
      console.log("La fechas fin es: " + fecha + " / ");
      //this.fecha1 = fecha1;
      this.fecha2 = fecha;
    },
  },
};
</script>
