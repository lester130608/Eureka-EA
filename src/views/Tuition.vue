<template>
  <div class="tuition">
    <div
      class="intro-section"
      style="background-position: top center"
      v-bind:style="{
        'background-image': 'url(' + './default/images/tuition.jpg' + ')',
      }"
    >
      <div class="container">
        <div class="row align-items-center text-middle">
          <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
            <h1>{{ $t("menu.Tuition") }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2>{{ $t("tuition.title") }}</h2>
            <p>{{ $t("tuition.first_paragraph") }}</p>
            <p>{{ $t("tuition.second_paragraph") }}</p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name of Tuition</th>
                  <th scope="col">Grades</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tuition</td>
                  <td>PK, K, 1, 2, 3, 4, 5</td>
                  <td>$20,800.00</td>
                </tr>
              </tbody>
            </table>
            <h3>{{ $t("tuition.fees") }}</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Fee Category</th>
                  <th scope="col">Name of Fee</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Registration</td>
                  <td>Registration Fee</td>
                  <td>$150.00</td>
                </tr>
                <tr>
                  <td>Books</td>
                  <td>Curriculum Fee</td>
                  <td>$350.00</td>
                </tr>
              </tbody>
            </table>
          
            <p>{{ $t("tuition.sixth_paragraph") }}</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tuition",
  components: {},
};
</script>
<style lang="scss">
.txt-info {
  background-color: rgba(0, 0, 0, 0.45);
}

.tuition {
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


