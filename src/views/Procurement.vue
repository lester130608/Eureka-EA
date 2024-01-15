<template>
  <div class="procurement">
    <div
      class="intro-section"
      style="background-position: top center"
      v-bind:style="{
        'background-image': 'url(' + './default/images/lunch.jpg' + ')',
      }"
    >
      <div class="container">
        <div class="row align-items-center text-middle">
          <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
            <h1>{{ $t("menu.Procurement") }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>{{ $t("procurement.greetings") }}</h2>
            <p>{{ $t("procurement.first_paragraph") }}</p>
            <p>{{ $t("procurement.second_paragraph") }}</p>
            <p>{{ $t("procurement.third_paragraph") }}</p>
            <p>{{ $t("procurement.fourth_paragraph") }}</p>
            <p>{{ $t("procurement.fifth_paragraph") }}</p>
            <p>{{ $t("procurement.sixth_paragraph") }}</p>
            <p>{{ $t("procurement.seventh_paragraph") }}</p>
            <a
              href="/default/docs/NSLP Vended RFP and Contract.pdf"
              download="NSLP Vended RFP and Contract.pdf"
              class="btn btn-primary py-3 px-5"
            >{{ $t('learn_more') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Procurement",
  components: {}
};
</script>
<style lang="scss">
.txt-info {
  background-color: rgba(0, 0, 0, 0.45);
}

.procurement {
  .site-section {
    padding: 2em 0;

    p {
      font-size: 1.3em;
    }
  }

  .intro-section {
    height: 350px;
  }
}
.text-middle {
  height: 500px !important;
}
</style>


