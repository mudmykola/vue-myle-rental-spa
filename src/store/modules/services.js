export default {
  state: {
    servicesTitle: [
      {
        id: 1,
        title: "Convenience",
        icon: "serbices-icon-1.webp",
        alt: "services-icon",
      },
    ],
    convenienceList: [
      {
        id: 1,
        text: "Curb side and airport deliveries available ",
      },
      {
        id: 2,
        text: " Unlimited daily mileage ",
      },

      {
        id: 3,
        text: " Foldable wheelchairs available ",
      },
      {
        id: 4,
        text: "  Car seats available",
      },
    ],
  },
  getters: {
    GET_SERVICES_TITLE(state) {
      return state.servicesTitle;
    },
    GET_CONVENIENCE_LIST(state) {
      return state.convenienceList;
    },
  },
};
