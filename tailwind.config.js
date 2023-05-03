module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      c100: " #31353A",
      c200: " #AFB5BD",
      c300: " #201918",
      c400: " #F8F9FA",
      c500: " #F4F4F4",
      c600: " #81C4FF",
      c700: " #464A4E",
      c800: " #F5C473",
      c900: " #3772E1",
      g100: " #61B3F2",
      g200: " #5566D9",
      default: " #fff",
    },
    fontWeight: {
      "font-r": "400",
      "font-m": "500",
      "font-b": "700",
      "font-eb": "800",
    },
    fontSize: {
      14:'14px',
      16: "16px",
      18: "18px",
      20: '20px',
      24: "24px",
      32: "32px",
      48: "48px",
    },
    lineHeight: {
      18: '18px',
      20: "20px",
      22: "22px",
      28: "28px",
      36: "36px",
      52: "52px",
    },
    boxShadow: {
      "border-ef": "0px 2px 10px rgba(48, 36, 35, 0.2)",
    },
    borderRadius: {
      "rounded-30": "30px",
      "rounded-50": "50px",
    },
    width: {
      128: '128px',
      150: "150px",
      160: '160px',
      270: "270px",
      320: "320px",
      371: "371px",
      400: "400px",
      "w-470": "470px",
      513: '513px',
      584: '584px',
      655: "655px",
      672: "672px",
      847: "847px",
      "w-940": "940px",
    },
    height: {
      44: '44px',
      64: '64px',
    },
    borderWidth: {
      100: "100px",
    },
    borderRadius: {
      4: '4px',
      8: '8px',
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};