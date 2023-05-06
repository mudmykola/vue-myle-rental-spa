export default {
  state: {
    sliderImage: [
      {
        id: 1,
        img: "slider-car-1.webp",
        alt: "slider-car",
      },
      {
        id: 2,
        img: "slider-car-1.webp",
        alt: "slider-car",
      },
      {
        id: 3,
        img: "slider-car-1.webp",
        alt: "slider-car",
      },
      {
        id: 4,
        img: "slider-car-1.webp",
        alt: "slider-car",
      },
      {
        id: 5,
        img: "slider-car-1.webp",
        alt: "slider-car",
      },
    ],
  },
  getters: {
    GET_SLIDER_IMAGE(state) {
      return state.sliderImage;
    },
  },
};
