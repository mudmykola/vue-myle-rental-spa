export default {
  state: {
    servicesTitle: [
      {
        id: 1,
        title: "Convenience",
        icon: "serbices-icon-1.webp",
        altIcon: "services-icon",
        img: "services-img-1.webp",
        altImg: "services-img-1",
        text1: "Curb side and airport deliveries available",
        text2: "Unlimited daily mileage",
        text3: "Foldable wheelchairs available",
        text4: "Car seats available",
      },
      {
        id: 2,
        title: "Safety ",
        icon: "serbices-icon-2.webp",
        altIcon: "services-icon",
        img: "services-img-2.webp",
        altImg: "services-img-2",
        text1:
          "Crash Tested Detailed demonstration of the ramp system and vehicle settings ",
        text2:
          "All vehicles come equipped with easy-to-use retractable tie downs ",
        text3:
          "Bypass unknown drivers and unidentified vehicles by renting your own",
        text4: "ADA compliant Wheelchair minivan",
      },
      {
        id: 3,
        title: "Assistance  ",
        icon: "serbices-icon-3.webp",
        altIcon: "services-icon",
        img: "services-img-3.webp",
        altImg: "services-img-3",
        text1: "24/7 Support",
        text2: "24/7 Roadside assistance  ",
        text3: " 24/7 Pick-up/drop-off options",
        text4: "24/7 Training available",
      },
    ],
  },
  getters: {
    GET_SERVICES_TITLE(state) {
      return state.servicesTitle;
    },
  },
};
