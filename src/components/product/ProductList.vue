<template>
  <h5>Listado de Nasa</h5>
  <div class="product-list">
    <div class="product-grid">
      <div
        class="product-item"
        v-for="item in filtrarProductoPorCategoria"
        :key="item.id"
      >
        <ProductItem :product="item" />
      </div>
    </div>
  </div>
</template>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import ProductItem from "src/components/product/ProductItem.vue";

export default {
  name: "ProductList",
  components: { ProductItem },
  computed: {
    filtrarProductoPorCategoria() {
      return this.products.filter(
        (product) => product.media_type === this.selectedCategory
      );
    },
  },
  props: {
    categoriaFiltrada: {
      type: String,
      default: null,
    },
    fechaInicio: {
      type: String,
      default: null,
    },
    fechaFin: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedCategory: "image",
      products: [],
      fecha1: "2024-11-01",
      fecha2: "2024-11-26",
    };
  },
  mounted() {
    this.cargarProductos();
  },
  watch: {
    // Watch para detectar cambios en las fechas
    fechaInicio(newFechaInicio) {
      this.fecha1 = newFechaInicio;
      //console.log("Nueva fecha de inicio:", newFechaInicio);
      this.cargarProductos();
      // Aquí puedes hacer algo cuando cambie la fecha de inicio, si es necesario
    },
    fechaFin(newFechaFin) {
      this.fecha2 = newFechaFin;
      this.cargarProductos();
      //console.log("Nueva fecha de fin:", newFechaFin);
      // Aquí puedes hacer algo cuando cambie la fecha de fin, si es necesario
    },
  },
  methods: {
    cargarProductos() {
      console.log(this.fecha1);

      //let endpointURL = "/api/product";
      let token = "Kq7QlegRS4l0pL1wsHv3iGAj5lWjNOoBbjaUsm2l";
      let endpointURL =
        "/planetary/apod?api_key=" +
        token +
        "&start_date=" +
        this.fecha1 +
        "&end_date=" +
        this.fecha2;

      let headers = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      this.$api_nasa
        .get(endpointURL, "")
        .then((response) => {
          //console.log(endpointURL);
          //console.log(JSON.stringify(response));
          this.products = response.data;
          //console.log("RESULTS: " + JSON.stringify(this.products));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
