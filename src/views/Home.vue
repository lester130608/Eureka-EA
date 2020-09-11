<template>
  <div class="home">
          <Slides />

          <div class="site-section">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-6">
                          <img src="../../public/default/images/home/cloud-letters.png" alt="Image" class="img-fluid">
                      </div>
                      <div class="col-md-6 center-info">
                          <div class="">
                              <span class="text-serif text-primary objectColor">{{ $t('view_home.about_us') }}</span>
                              <h3 class="heading-92913 text-black text-color-yellow">{{ $t('view_home.welcome') }}</h3>
                              <p>{{ $t('view_about.first_parrafo') }}</p>
                              <p>{{ $t('view_home.second_parrafo') }}</p>
                              <!--                          <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>-->
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      <div class="site-section bg-image overlay" v-bind:style="{ 'background-image': 'url(' + './default/images/home/corazon.jpg' + ')' }">
          <div class="container">
              <div class="row">
                  <div class="col">
                      <div class="counter-39392">
                          <h3>8035+</h3>
                          <span>Casos atendidos</span>
                      </div>
                  </div>
                  <div class="col">
                      <div class="counter-39392">
                          <h3>850+</h3>
                          <span>Admiciones</span>
                      </div>
                  </div>
                  <div class="col">
                      <div class="counter-39392">
                          <h3>860+</h3>
                          <span>Becas asignadas</span>
                      </div>
                  </div>
                  <div class="col">
                      <div class="counter-39392">
                          <h3>7624+</h3>
                          <span>Resultados satisfactorios</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

          <div class="py-5">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6 col-lg-4">
                          <div class="service-29283">
              <span class="wrap-icon-39293">
                <span class="flaticon-yacht"></span>
              </span>
                              <h3>Luxuries Yacht</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4">
                          <div class="service-29283">
              <span class="wrap-icon-39293">
                <span class="flaticon-shield"></span>
              </span>
                              <h3>30 Years of Experience</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4">
                          <div class="service-29283">
              <span class="wrap-icon-39293">
                <span class="flaticon-captain"></span>
              </span>
                              <h3>Good Captain</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsa, ad ratione quos distinctio unde.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


          <div class="site-section bg-light">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-4 col-12">
                          <p><img src="../../public/default/images/home/contact.jpg"
                                  alt="Image" class="img-fluid border-img"></p>
                      </div>
                      <div class="col-md-8 col-12">
<!--                          <span class="text-serif text-primary">Book Now</span>-->
                          <h3 class="heading-92913 text-black">{{ $t('view_home.data')}}</h3>
                          <form action="#" class="row">
                              <div class="form-group col-md-6">
                                  <label for="input-1">Full Name:</label>
                                  <input type="text" class="form-control" id="input-1">
                              </div>
                              <div class="form-group col-md-6">
                                  <label for="input-2">Number of People:</label>
                                  <input type="text" class="form-control" id="input-2">
                              </div>

<!--                              <div class="form-group col-md-6">-->
<!--                                  <label for="input-3">Date From:</label>-->
<!--                                  <input type="text" class="form-control datepicker" id="input-3">-->
<!--                              </div>-->
<!--                              <div class="form-group col-md-6">-->
<!--                                  <label for="input-4">Date To:</label>-->
<!--                                  <input type="text" class="form-control datepicker" id="input-4">-->
<!--                              </div>-->

<!--                              <div class="form-group col-md-12">-->
<!--                                  <label for="input-5">Yacht You're Interested in:</label>-->
<!--                                  <select name="" id="input-5" class="form-control">-->
<!--                                      <option value="">Motor Yacht</option>-->
<!--                                      <option value="">Hi-Speed Yacht</option>-->
<!--                                      <option value="">Premium Yacht</option>-->
<!--                                      <option value="">Presidential Yacht</option>-->
<!--                                  </select>-->
<!--                              </div>-->

                              <div class="form-group col-md-6">
                                  <label for="input-6">Email Address</label>
                                  <input type="text" class="form-control" id="input-6">
                              </div>

                              <div class="form-group col-md-6">
                                  <label for="input-7">Phone Number</label>
                                  <input type="text" class="form-control" id="input-7">
                              </div>


                              <div class="form-group col-md-12">
                                  <label for="input-8">Notes</label>
                                  <textarea name="" id="input-8" cols="30" rows="3" class="form-control"></textarea>
                              </div>

                              <div class="form-group col-md-12">
                                  <input type="submit" class="btn btn-primary py-3 px-5" value="Contact Now">
                              </div>

                          </form>
                      </div>
                  </div>
              </div>
          </div>


          <div class="site-section">
              <div class="container">
                  <div class="row justify-content-center mb-5">
                      <div class="col-md-7 text-center">
                          <span class="text-serif text-primary">{{ $t('view_home.testimonial')}}</span>
                          <h3 class="heading-92913 text-black text-center">{{ $t('view_home.what_customer_saying')}}...</h3>
                      </div>
                  </div>
                  <div class="row">
                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">
                          <div class="testimony-39291">
                              <blockquote>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>
                              </blockquote>
                              <div class="d-flex vcard align-items-center">
                                  <div class="pic mr-3">
                                      <img src="../../public/default/images/person_5.jpg" alt="Image" class="">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">Jane Doe</strong>
                                      <span>Madre de Emma Stepheson(Terapia)</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">
                          <div class="testimony-39291">
                              <blockquote>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>
                              </blockquote>
                              <div class="d-flex vcard align-items-center">
                                  <div class="pic mr-3">
                                      <img src="../../public/default/images/person_4_sq.jpg" alt="Image" class="">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">John Doe</strong>
                                      <span>Padre de Jhonas Martinez (Admissions)</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="mb-4 mb-lg-0 col-md-6 col-lg-4">
                          <div class="testimony-39291">
                              <blockquote>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laborum cumque commodi, unde doloribus.</p>
                              </blockquote>
                              <div class="d-flex vcard align-items-center">
                                  <div class="pic mr-3">
                                      <img src="../../public/default/images/person_1.jpg" alt="Image" class="">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">Carolina Ruiz</strong>
                                      <span>Madre de Ruth Martin(Speech & Language Therapy)</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="site-section bg-image overlay backgroundChange" v-bind:style="{ 'background-image': 'url(' + './default/images/services/contact.jpg' + ')' }">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-md-7 text-center">
                          <h2 class="text-white">Get In Touch With Us</h2>
                          <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p class="mb-0"><a href="#" class="btn btn-warning py-3 px-5 text-white">Contact Us</a></p>
                      </div>
                  </div>
              </div>
          </div>



      </div>

</template>

<script>
// @ is an alias to /src
import Slides from '@/views/Slides.vue'

export default {
  name: 'Home',
  components: {
      Slides
  }
}
</script>
<style lang="scss">

</style>
