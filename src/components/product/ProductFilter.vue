<template>
  <h6>Filtros</h6>
  <div class="category-filter">
    <q-page class="q-pa-md">
      <q-form @submit="consultar">
        <!-- Selector de Fecha -->
        <q-input
          v-model="selectedDate"
          label="Fecha inicio"
          mask="####-##-##"
          hint="YYYY-MM-DD"
          outlined
          readonly
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="selectedDate"
              mask="YYYY-MM-DD"
              @input="updateInput"
            />
          </q-popup-proxy>
        </q-input>

        <q-input
          v-model="selectedDate2"
          label="Fecha fin"
          mask="####-##-##"
          hint="YYYY-MM-DD"
          outlined
          readonly
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="selectedDate2"
              mask="YYYY-MM-DD"
              @input="updateInput2"
            />
          </q-popup-proxy>
        </q-input>

        <!-- Botón de Consultar -->
        <q-btn
          label="Consultar"
          color="primary"
          icon="search"
          class="q-mt-md"
          @click="consultar"
        />
      </q-form>

      <!-- Resultado -->
      <div v-if="resultado" class="q-mt-lg">
        <q-banner color="info" class="q-mb-md">
          Fecha incio: {{ selectedDate }} Fecha fin:
          {{ selectedDate2 }}
        </q-banner>
        <p>{{ resultado }}</p>
      </div>
    </q-page>
  </div>
</template>

<style></style>

<script>
export default {
  name: "ProductFilter",
  emits: ["categoriaCambiada", "fecha1", "fecha2"],
  data() {
    return {
      selectedDate: "",
      selectedDate2: "",
      resultado: null, // Resultado de la consulta
      categorySelected: null,
      adultoSelected: null,
    };
  },
  created() {
    // Inicializa `selectedDate` con la fecha actual al montar el componente
    this.selectedDate = this.getTodayDate();
    this.selectedDate2 = this.getTodayDate();
  },
  mounted() {
    //this.cargarCategorias();
  },
  methods: {
    getTodayDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`; // Devuelve la fecha en formato YYYY-MM-DD
    },
    consultar() {
      if (!this.selectedDate) {
        this.$q.notify({
          type: "negative",
          message: "Por favor, selecciona una fecha antes de consultar.",
        });
        return;
      }
      this.$emit("categoriaCambiada", this.selectedDate);

      this.$emit("fecha1", this.selectedDate);
      this.$emit("fecha2", this.selectedDate2);

      this.resultado =
        `Has consultado fecha inicio: ${this.selectedDate}` +
        ` y fecha fin: ${this.selectedDate2}`;
    },
    updateInput(value) {
      this.selectedDate = value; // Asegura que el input y el datepicker estén sincronizados
    },
    updateInput2(value) {
      this.selectedDate2 = value; // Asegura que el input y el datepicker estén sincronizados
    },
  },
};
</script>
