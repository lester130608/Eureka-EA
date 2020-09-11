<template>
  <div class="footer bg-light-dark">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <p class="mb-4">
              <img id="footer-logo" src="../../public/default/images/logo-eureka.svg" alt="Image"
                   class=" img-fluid maxWidth animated tada"></p>
<!--          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>-->
<!--          <p><a href="#">Learn More</a></p>-->
        </div>
        <div class="col-lg-9 ">
             <div class="row">
                 <div class="col-lg-6 bottom-footer text-left">
                     <h1 class="footer-heading">{{ $t('foot_contact.text') }}</h1>
                     <div class="mdquick-contact-icons d-flex second">
                         <div class="icon align-self-start">
                             <span class="icon-phone text-primary"></span>
                         </div>
                         <div class="text">
                             <a href="tel:+13054206690" class="d-block">Phone: 305 420 6690</a>
                         </div>
                     </div>

                     <div class="mdquick-contact-icons d-flex second">
                         <div class="icon align-self-start">
                             <span class="icon-phone text-primary"></span>
                         </div>
                         <div class="text">
                             <a href="tel:+13054206690" class="d-block">Fax: 305 420 5708</a>
                         </div>
                     </div>

                     <div class="quick-contact-icons d-flex third">
                         <div class="icon align-self-start">
                             <span class="icon-envelope text-primary"></span>
                         </div>
                         <div class="text">
                             <a href="mailto:info@theeurekaakademy.com?Subject=Contacting" target="_blank" class="d-block">info@theeurekaakademy.com</a>
                         </div>
                     </div>
                     <div class="quick-contact-icons d-flex third">
                         <div class="icon align-self-start">
                             <span class="icon-envelope text-primary"></span>
                         </div>
                         <div class="text">
                             <a href="mailto:mriera@theeurekaakademy.com?Subject=Contacting" target="_blank" class="d-block">mriera@theeurekaakademy.com</a>
                         </div>
                     </div>
                 </div>
                 <div class="col-lg-3 text-right">
<!--                     <h3 class="footer-heading"><span>{{ $t('menu.ContactUs') }}</span></h3>-->
                     <ul class="list-unstyled">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Contact Us</a></li>
                     </ul>
                 </div>
                 <div class="col-lg-3 text-right">
<!--                     <h3 class="footer-heading"><span>{{ $t('foot_contact.our_services') }}</span></h3>-->
                     <ul class="list-unstyled">
                         <li><a href="#">Philosophy</a></li>
                         <li><a href="#">Therapy</a></li>
                         <li><a href="#">Scholarships</a></li>
                         <li><a href="#">Admissions</a></li>
                     </ul>
                 </div>

            </div>
        </div>
        </div>
      </div>

<!--        <div class="col-lg-3">-->
<!--          <h3 class="footer-heading"><span>Contact</span></h3>-->
<!--          <ul class="list-unstyled">-->
<!--            <li><a href="#">Help Center</a></li>-->
<!--            <li><a href="#">Support Community</a></li>-->
<!--            <li><a href="#">Press</a></li>-->
<!--            <li><a href="#">FAQ</a></li>-->
<!--            <li><a href="#">Our Partners</a></li>-->
<!--          </ul>-->
<!--        </div>-->


    <div class="container-fluid">
      <div class="row copyright-container">
        <div class="col-12">
          <div class="copyright">
            <p>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy; All rights reserved | <a href="https://eurekaacademy.com" target="_blank" >Eureka Educational Academy</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import LanguagePickerCmp from '@/components/LanguagePickerCmp.vue'

  export default {
    name: 'Footer',
    components: { }
  }
</script>
<style lang="scss">
  .copyright-container{
    background-color: #1b2229;
  }
</style>
