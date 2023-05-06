import { createStore } from "vuex";
import services from "./modules/services";
import features from "./modules/features";
import slider from "./modules/slider";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    services,
    features,
    slider,
  },
});
