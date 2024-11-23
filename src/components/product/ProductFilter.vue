<template>
  <h6>Filtros</h6>
  <div class="category-filter">
    <q-select
      label="Idioma"
      v-model="categorySelected"
      filled
      :options="categories"
      option-value="id"
      option-label="description"
      @update:model-value="onChange"
    />
    ----
    <q-select
      label="Adulto"
      v-model="adultoSelected"
      filled
      :options="adulto"
      option-value="id"
      option-label="description"
      @update:model-value="onChange2"
    />
  </div>
</template>

<style></style>

<script>
export default {
  name: "ProductFilter",
  emits: ["categoriaCambiada", "adultoCambiada"],
  data() {
    return {
      minimo: 0,
      maximo: 0,
      model: null,
      categories: [
        { id: "es", description: "Español" },
        { id: "en", description: "Ingles" },
      ],
      adulto: [
        { id: "true", description: "Si" },
        { id: "false", description: "No" },
      ],
      categorySelected: null,
      adultoSelected: null,
    };
  },
  mounted() {
    //this.cargarCategorias();
  },
  methods: {
    onChange(value) {
      console.log("El valor seleccionado es: ", value.id);
      this.$emit("categoriaCambiada", value.id);
    },
    onChange2(value) {
      console.log("El valor seleccionado Adulto es: ", value.id);
      this.$emit("adultoCambiada", value.id);
    },
  },
};
</script>
