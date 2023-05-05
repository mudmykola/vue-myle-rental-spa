import { createStore } from "vuex";
import services from "./modules/services";
import features from "./modules/features";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    services,
    features,
  },
});
