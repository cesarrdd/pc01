<template>
  <h5>Listado de Peliculas</h5>
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
        (product) => product.original_language === this.categoriaFiltrada
      );
      //this.cargarProductos(this.categoriaFiltrada);
      /*
      return this.products.filter((product) => {
        const matchesLanguage =
          product.original_language === this.categoriaFiltrada;
        const matchesAdulto = product.adult === this.adultoFiltrada;
        //this.cargarProductos(this.categoriaFiltrada);

        return matchesLanguage && matchesAdulto;
      });
      */

      /*
      if (Array.isArray(this.products)) {
        const filtrados = this.products.filter(
          (product) => product.original_language === this.categoriaFiltrada
        );
        console.log("Productos filtrados:", filtrados);
        return filtrados;
      } else {
        console.error("this.products no es un arreglo:", this.products);
        return [];
      }
    */
    },
  },
  props: {
    categoriaFiltrada: {
      type: String,
      default: null,
    },
    adultoFiltrada: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.cargarProductos();
  },
  methods: {
    cargarProductos() {
      //let endpointURL = "/api/product";
      let endpointURL = "/3/discover/movie";

      //if (item != "") {
      //  endpointURL = "/3/discover/movie?language=" + item;
      //}

      //  /3/discover/movie?include_adult=false&include_video=false&language=es-PE&page=1&sort_by=popularity.desc'

      //let token = JSON.parse(localStorage.getItem("userData")).data.token;
      let token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2MxYTQ2ZWRiOWU3NDYwYjFhODYzY2JhY2VkZmI2NiIsIm5iZiI6MTczMjM3MjkzOS4xODU5NCwic3ViIjoiNjc0MWU4OWYxY2Q4YzI0M2U2YmU4NjJhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VrIEKBbr-RqEKR35psrjLkElKQrN9EVhfEq9jRR8zD8";

      let headers = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      this.$api_peliculas
        .get(endpointURL, headers)
        .then((response) => {
          console.log(endpointURL);
          console.log(JSON.stringify(response));
          this.products = response.data.results;
          //console.log("RESULTS: " + JSON.stringify(this.products));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
