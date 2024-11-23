import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
//const api = axios.create({ baseURL: "http://localhost:5046" });
const api = axios.create({ baseURL: "http://68.183.142.21" });
const api_peliculas = axios.create({ baseURL: "https://api.themoviedb.org" });
const imagenes = axios.create({ baseURL: "https://image.tmdb.org/t/p/w500" });

//const api3 = axios.create({ baseURL: ": https://api.themoviedb.org" });

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$api_peliculas = api_peliculas;
  app.config.globalProperties.$imagenes = imagenes;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
export { api_peliculas };
export { imagenes };
