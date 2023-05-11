import { createStore } from "vuex";
import services from "./modules/services";
import features from "./modules/features";
import slider from "./modules/slider";
import pricing from "./modules/pricing";
import asked from "./modules/asked";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    services,
    features,
    slider,
    pricing,
    asked,
  },
});
