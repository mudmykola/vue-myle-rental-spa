export default {
  state: {
    featuresList: [
      {
        id: 1,
        text: "-2 wheelchair pax’s, 4 pax, + driver",
      },
      {
        id: 2,
        text: "-2 wheelchair pax’s, 3 pax, + drive",
      },
      {
        id: 3,
        text: "-1 wheelchair, 4 pax, + driver ",
      },
      {
        id: 4,
        text: "-1 wheelchair, 3 pax, + driver ",
      },
    ],
  },
  getters: {
    GET_FEATURES_LIST(state) {
      return state.featuresList;
    },
  },
};
