<template>
   <div class="about">
      <div
         class="intro-section"
         style="background-position: bottom"
         v-bind:style="{
         'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')',
         }"
         >
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
                  <h1>{{ $t("view_about.title") }}</h1>
                  <!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>-->
                  <!--            <p>-->
                  <!--              <router-link class="btn btn-primary py-3 px-5" to="/contact">{{ $t('menu.ContactUs') }}</router-link>-->
                  <!--            </p>-->
               </div>
            </div>
         </div>
      </div>
      <div class="site-section">
         <!--      <div class="row justify-content-center mb-5">-->
         <!--        <div class="col-md-7 text-center">-->
         <!--          <h3 class="heading-92913 text-black text-center">{{ $t('view_about.welcome')}}</h3>-->
         <!--        </div>-->
         <!--      </div>-->
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-3">
                  <img
                     src="../../public/default/images/eureka-logo.png"
                     alt="Image"
                     class="img-fluid"
                     />
               </div>
               <div class="col-md-9 text-left">
                  <!--            <span class="text-serif text-primary">About Us</span>-->
                  <p>{{ $t("view_about.first_paragraph") }}</p>
                  <p>{{ $t("view_about.second_paragraph") }}</p>
                  <!--            <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>-->
                  <input
                     class="btn btn-primary py-3 px-5"
                     @click="$bvModal.show('bv-modal-example')"
                     v-bind:value="$t('learn_more')"
                     />
               </div>
            </div>
         </div>
      </div>
      <div class="site-section">
         <div class="container-fluid">
            <div class="row justify-content-center">
               <div class="col-md-7 text-center">
                  <h3 class="heading-92913 text-black text-center">
                      {{ $t("view_about.missconduct_title") }}
                  </h3>
               </div>
            </div>
            <div class="row">
               <div class="offset-md-3 text-left">
                  <p>
                     {{ $t("view_about.missconduct_first_paragraph") }}
                  </p>
                  <p>
                    {{ $t("view_about.missconduct_second_paragraph") }} 
                  </p>
                     <ul class="font-weight-bold">
                        <li>{{ $t("view_about.missconduct_item_1") }}</li>
                        <li>{{ $t("view_about.missconduct_item_2") }}</li>
                        <li>{{ $t("view_about.missconduct_item_3") }}</li>
                        <li>{{ $t("view_about.missconduct_item_4") }}</li>
                        <li>{{ $t("view_about.missconduct_item_5") }}</li>
                        <li>{{ $t("view_about.missconduct_item_6") }}</li>
                        <li>{{ $t("view_about.missconduct_item_7") }}</li>
                        <li>{{ $t("view_about.missconduct_item_8") }}</li>
                     </ul>
                     <p>
                        {{ $t("view_about.missconduct_third_paragraph") }} <span class="font-weight-bold">{{ $t("view_about.missconduct_fourth_paragraph") }}</span>
                     </p>
                     <p>
                        {{ $t("view_about.missconduct_fifth_paragraph") }}
                     <ul>
                        <li><span>{{ $t("view_about.name") }}</span>: DAMARYS CLEMENT</li>
                        <li><span>{{ $t("view_about.title_2") }}</span>: DIRECTOR </li>
                        <li><span>{{ $t("view_about.phone") }}</span>: 305 420 6690</li>
                     </ul>
                     </p>
               </div>
            </div>
         </div>
      </div>
      <div class="site-section">
                     <div class="container">
                        <div class="row">
                           <div class="col-12 text-left">
                              <h3 class="heading-92913 text-black text-center">{{ $t("view_about.conduct_title") }}</h3>
                              <p>{{ $t("view_about.conduct_first_paragraph") }}</p>
                              <p>{{ $t("view_about.conduct_second_paragraph") }}</p>
                              <p>{{ $t("view_about.conduct_third_paragraph") }}</p>
                              <a
                                 href="/default/docs/Ethical Conduct - Eureka.pdf"
                                 download="Ethical Conduct - Eureka.pdf"
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
  name: "About",
  components: {},
};
</script>