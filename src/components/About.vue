<template>
  <div id="about" class="about bg-default mt-32 mb-32 pt-10 pb-10  ">
    <div class="container-x ">
      <AboutContent class="about-content" :title="aboutTitle" :desc="aboutDesc"/>
    </div>
  </div>
</template>
<script>

export default {
  name: "TheAbout",
  props: {
    aboutTitle: {
      type: String,
      required: true,
      default: "About Us",
    },
    aboutDesc: {
      type: String,
      required: true,
      default:
          "Being an industry leader, we have recognized the difficulties encountered by our private use clients nationwide in need of a wheelchair accessible vehicle rental. We set out to provide comfortable, reliable options for you, your family, and your travel needs. We help alleviate those stresses with our wide range of ADA compliant vehicles and unique rental options.",
    },
  },

};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
// 768

@media (max-width: 768px) {
  #about {
    width: 768px;
    margin: 80px 0;
  }
  .about {
    width: 100%;
    &-content {
      width: 740px;
    }
  }
}

// 600
@media (max-width: 600px) {

  #about {
    width: 600px;
    margin: 80px 0;
  }
  .about {
    width: 100%;
    &-content {
      width: 570px;

      h2 {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
}

// 480
@media (max-width: 480px) {
  #about {
    width: 480px;
    margin: 80px 0;
  }
  .about {
    &-content {
      width: 450px;
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }

}

// 320
@media (max-width: 320px) {

  #about {
    width: 320px;
    margin: 80px 0;
  }
  .about {
    &-content {
      width: 280px;
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }

}

</style>