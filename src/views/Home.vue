<template>
  <div class="home">
      <Slides/>

      <div class="site-section">
          <div class="container-fluid">
              <div class="row d-flex">
                  <div class="col-md-6">
                    <p>{{ $t('view_home.first_block')}}</p>
                    <input v-on:click="$router.push('/theraphy')"  class="bottom-button btn btn-primary py-3 px-5" v-bind:value=" $t('readmore')">
                  </div>
                  <div class="col-md-6">
                    <div>
                      <p>{{ $t('view_home.second_block') }}</p>
                      <ul>
                        <li>{{ $t('view_scholarships.florida_tax_credit') }}</li>
                        <li>{{ $t('view_scholarships.gardiner_scholarship') }}</li>
                        <li>{{ $t('view_scholarships.john_mcKay_scholarship') }}</li>
                      </ul>
                      <input v-on:click="$router.push('/scholarships')"  class="bottom-button button-how-apply btn btn-primary py-3 px-5" v-bind:value=" $t('how_to_apply')">
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Donorbox Donation Form -->
      <section class="donorbox-section">
        <h2>Support Our Summer Program</h2>
        <div class="donorbox-embed">
          <iframe src="https://donorbox.org/embed/summer-camp-at-eureka-academy?"
                  name="donorbox"
                  allowpaymentrequest="allowpaymentrequest"
                  seamless="seamless"
                  frameborder="0"
                  scrolling="no"
                  height="900px"
                  width="100%"
                  style="max-width: 500px; min-width: 250px; max-height:none!important"
                  allow="payment">
          </iframe>
        </div>
      </section>

  </div>
</template>

<script>
  import Slides from '@/views/Slides.vue'
  import SendEmailContactCmp from '@/components/SendEmailContactCmp'
  import SendEmailRequestInfo from "@/components/SendEmailRequestInfo";

  export default {
      name: 'Home',
      components: {
        SendEmailRequestInfo,
        Slides,
        SendEmailContactCmp
      },
      mounted() {
          // Cargar script de Donorbox
          const script = document.createElement('script');
          script.src = "https://donorbox.org/widget.js";
          script.setAttribute("paypalExpress", "false");
          document.body.appendChild(script);
      }
  }
</script>

<style lang="scss">
.contact-form{
   p strong{
       font-weight: 700;
   }
}
p{
 font-size: 1.2em !important;
}
ul{
 margin: 0 0 1rem 0 !important;
 padding: 0 !important;
 font-size: 1em !important;
 list-style: none;
}
.button-how-apply{
 width: 55%;
}
.bottom-button {
 margin-bottom: 20px;
}
.site-section .bg-light{
 background-color: #e0f0ff!important;
}

@media screen and (max-width: 425px){
 .button-how-apply{
   width: 100%;
 }
}

.donorbox-section {
  text-align: center;
  padding: 40px 20px;

  h2 {
    margin-bottom: 20px;
    font-size: 1.6em;
  }

  .donorbox-embed {
    display: flex;
    justify-content: center;
  }
}
</style>
