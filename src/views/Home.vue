<template>
    <div class="home">
        <Slides/>

        <div class="site-section">
            <div class="container-fluid">
                <div class="row d-flex">
                    <div class="col-md-6">
<!--                        <img src="../../public/default/images/home/cloud-letters.png" alt="Image" class="img-fluid">-->
                      <p>{{ $t('view_home.first_block')}}</p>
                      <input v-on:click="$router.push('/theraphy')"  class="bottom-button btn btn-primary py-3 px-5" v-bind:value=" $t('readmore')">
                    </div>
                    <div class="col-md-6">
                      <div>
                        <!--                            <span class="text-serif text-primary objectColor">{{ $t('view_home.about_us') }}</span>-->
                        <!--                            <h3 class="heading-92913 text-black text-color-yellow">{{ $t('summary_text') }}</h3>-->
                        <!--                            <p>{{ $t('view_home.second_paragraph') }}</p>-->
                        <!--                            <p>{{ $t('view_therapy.first_paragraph') }}</p>-->
                        <!--                            <p>{{ $t('view_therapy.second_paragraph') }}</p>-->
                        <!--                            <p>{{ $t('view_scholarships.description') }}</p>-->
                        <p>{{ $t('view_home.second_block') }}</p>

                        <ul>
                          <li>{{ $t('view_scholarships.florida_tax_credit') }}</li>
                          <li>{{ $t('view_scholarships.gardiner_scholarship') }}</li>
                          <li>{{ $t('view_scholarships.john_mcKay_scholarship') }}</li>
                        </ul>
                        <input v-on:click="$router.push('/scholarships')"  class="bottom-button button-how-apply btn btn-primary py-3 px-5" v-bind:value=" $t('how_to_apply')">
                        <!--                          <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>-->
                      </div>
                    </div>
                </div>
            </div>
        </div>
      <!--               TODO FOTO DE NIÑOS CON COLOR AZUL-->
<!--        <div class="site-section bg-image overlay"-->
<!--             v-bind:style="{ 'background-image': 'url(' + './default/images/home/section1.jpg' + ')' }">-->
<!--            <div class="container">-->
<!--                <div class="row">-->

<!--                    <h1 class="color-white">{{ $t('summary.text')}} </h1>-->

                    <!--                  <div class="col">-->
                    <!--                      <div class="counter-39392">-->
                    <!--                          <h3>8035+</h3>-->
                    <!--                          <span>{{ $t('summary.cases_attended')}}</span>-->
                    <!--                      </div>-->
                    <!--                  </div>-->
                    <!--                  <div class="col">-->
                    <!--                      <div class="counter-39392">-->
                    <!--                          <h3>850+</h3>-->
                    <!--                          <span>{{ $t('summary.admissions')}}</span>-->
                    <!--                      </div>-->
                    <!--                  </div>-->
                    <!--                  <div class="col">-->
                    <!--                      <div class="counter-39392">-->
                    <!--                          <h3>860+</h3>-->
                    <!--                          <span>{{ $t('summary.scholarships_assigned')}}</span>-->
                    <!--                      </div>-->
                    <!--                  </div>-->
                    <!--                  <div class="col">-->
                    <!--                      <div class="counter-39392">-->
                    <!--                          <h3>7624+</h3>-->
                    <!--                          <span>{{ $t('summary.satisfactory_results')}}</span>-->
                    <!--                      </div>-->
                    <!--                  </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <!--      Seccion de iconos home-->
        <!--          <div class="py-5">-->
        <!--              <div class="container">-->
        <!--                  <div class="row">-->
        <!--                      <div class="col-md-6 col-lg-4">-->
        <!--                          <div class="service-29283">-->
        <!--              <span class="wrap-icon-39293">-->
        <!--                <span class="flaticon-yacht"></span>-->
        <!--              </span>-->
        <!--                              <h3>Luxuries Yacht</h3>-->
        <!--                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                      <div class="col-md-6 col-lg-4">-->
        <!--                          <div class="service-29283">-->
        <!--              <span class="wrap-icon-39293">-->
        <!--                <span class="flaticon-shield"></span>-->
        <!--              </span>-->
        <!--                              <h3>30 Years of Experience</h3>-->
        <!--                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                      <div class="col-md-6 col-lg-4">-->
        <!--                          <div class="service-29283">-->
        <!--              <span class="wrap-icon-39293">-->
        <!--                <span class="flaticon-captain"></span>-->
        <!--              </span>-->
        <!--                              <h3>Good Captain</h3>-->
        <!--                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                  </div>-->
        <!--              </div>-->
        <!--          </div>-->

        <!--TODO REQUEST FORM borrado tempralmente MIENTRAS OSCAR ARREGLA CORS-->
<!--        <div class="site-section bg-light ">-->
<!--            <div class="container-fluid">-->
<!--                <div class="row d-flex align-items-center">-->
<!--                    <div class="col-md-3 col-12 d-none d-md-block">-->
<!--                        <p><img src="../../public/default/images/home/doe_logo.png"-->
<!--                                alt="Image" class="img-fluid border-img"></p>-->
<!--                    </div>-->
<!--                    <div class="col-md-9 col-12">-->
<!--                        &lt;!&ndash;                          <span class="text-serif text-primary">Book Now</span>&ndash;&gt;-->
<!--                        <h3 class="heading-92913 text-blue-hight">{{ $t('view_home.data')}}</h3>-->
<!--                        <SendEmailRequestInfo/>-->

<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->


        <!--          <div class="site-section">-->
        <!--              <div class="container">-->
        <!--                  <div class="row justify-content-center mb-5">-->
        <!--                      <div class="col-md-7 text-center">-->
        <!--                          <span class="text-serif text-primary">{{ $t('view_home.testimonial')}}</span>-->
        <!--                          <h3 class="heading-92913 text-black text-center">{{ $t('view_home.what_customer_saying')}}...</h3>-->
        <!--                      </div>-->
        <!--                  </div>-->
        <!--                  <div class="row">-->
        <!--                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">-->
        <!--                          <div class="testimony-39291">-->
        <!--                              <blockquote>-->
        <!--                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>-->
        <!--                              </blockquote>-->
        <!--                              <div class="d-flex vcard align-items-center">-->
        <!--                                  <div class="pic mr-3">-->
        <!--                                      <img src="../../public/default/images/person_5.jpg" alt="Image" class="">-->
        <!--                                  </div>-->
        <!--                                  <div class="text">-->
        <!--                                      <strong class="d-block">Jane Doe</strong>-->
        <!--                                      <span>Madre de Emma Stepheson(Terapia)</span>-->
        <!--                                  </div>-->
        <!--                              </div>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">-->
        <!--                          <div class="testimony-39291">-->
        <!--                              <blockquote>-->
        <!--                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>-->
        <!--                              </blockquote>-->
        <!--                              <div class="d-flex vcard align-items-center">-->
        <!--                                  <div class="pic mr-3">-->
        <!--                                      <img src="../../public/default/images/person_4_sq.jpg" alt="Image" class="">-->
        <!--                                  </div>-->
        <!--                                  <div class="text">-->
        <!--                                      <strong class="d-block">John Doe</strong>-->
        <!--                                      <span>Padre de Jhonas Martinez (Admissions)</span>-->
        <!--                                  </div>-->
        <!--                              </div>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">-->
        <!--                          <div class="testimony-39291">-->
        <!--                              <blockquote>-->
        <!--                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>-->
        <!--                              </blockquote>-->
        <!--                              <div class="d-flex vcard align-items-center">-->
        <!--                                  <div class="pic mr-3">-->
        <!--                                      <img src="../../public/default/images/person_1.jpg" alt="Image" class="">-->
        <!--                                  </div>-->
        <!--                                  <div class="text">-->
        <!--                                      <strong class="d-block">Carolina Ruiz</strong>-->
        <!--                                      <span>Madre de Ruth Martin(Speech & Language Therapy)</span>-->
        <!--                                  </div>-->
        <!--                              </div>-->
        <!--                          </div>-->
        <!--                      </div>-->
        <!--                  </div>-->
        <!--              </div>-->
        <!--          </div>-->
      <!--              TODO FOTO VERDE-->
<!--        <div class="site-section bg-image overlay backgroundChange"-->
<!--             v-bind:style="{ 'background-image': 'url(' + './default/images/home/section2.jpg' + ')' }">-->
<!--            <div class="container">-->

<!--                <div class="row justify-content-center">-->
<!--                    <div class="col-md-7 text-center">-->
<!--                        <h2 class="text-white">{{ $t('view_home.best_choice')}}</h2>-->
<!--                        <p class="lead text-white">{{ $t('view_home.second_paragraph')}}</p>-->
<!--                        <p class="mb-0">-->
<!--                            <a href="mailto:info@theeurekaakademy.com?Subject=Contacting" target="_blank"-->
<!--                               class="btn btn-warning py-3 px-5 text-white">Contact Us</a>-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>

<script>
    // @ is an alias to /src
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
        methods: {
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
</style>
