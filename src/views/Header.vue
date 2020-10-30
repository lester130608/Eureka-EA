<template>
  <div class="header">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <div class="header-top bg-light">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6 col-lg-3">
            <a id="logo" href="/">
              <img src="../../public/default/images/eureka-logo.png" alt="Image" class="img-fluid">
              <!-- <strong>Water</strong>Boat -->
            </a>
          </div>
          <div class="col-lg-3 d-none d-lg-block ">

            <div class="quick-contact-icons d-flex first">
              <div class="icon align-self-start">
                <span class="icon-location-arrow text-primary"></span>
              </div>
              <div class="text">
                <span class="h4 d-block">Florida,US</span>
                <span class="caption-text">9745 SW 184th St. Palmetto Bay, FL 33184</span>
              </div>
            </div>

          </div>
          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons d-flex  second">
              <div class="icon align-self-start">
                <span class="icon-phone text-primary"></span>
              </div>
              <div class="text">
                <a href="tel:+13054206690" class="h4 d-block">Phone: 305 420 6690</a>
                <a class="h4 d-block">Fax: 305 420 5708 </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons d-flex third">
              <div class="icon align-self-start">
                <span class="icon-envelope text-primary"></span>
              </div>
              <div class="text">
                <a href="mailto:info@theeurekaacademy.com?Subject=Contacting" target="_blank" class="h4 d-block">info@theeurekaacademy.com</a>
                <a href="mailto:mriera@theeurekaacademy.com?Subject=Contacting" target="_blank" class="h4 d-block">mriera@theeurekaacademy.com</a>
              </div>
            </div>
          </div>

          <div class="col-6 d-block d-lg-none text-right">
            <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                    class="icon-menu h3"></span></a>
          </div>
        </div>
      </div>
      <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

        <div class="container-fluid padding-none">
          <div class="row">
            <div class="col-2 container-logo d-none">
              <a class="logo animated slideInDown" href="/" >
                <img src="../../public/default/images/logo-eureka-left.svg" alt="Image" class="img-fluid">
                <!-- <strong>Water</strong>Boat -->
              </a>
            </div>
            <div class="col-12 container-menu">
              <div id="container-menu" class="d-flex align-items-center">

                <div class="mx-auto">
                  <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                      <li >
                        <router-link class="nav-link text-left" to="/">{{ $t('menu.Home') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/about">{{ $t('menu.AboutUs') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/philosophy">{{ $t('menu.Philosophy') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/theraphy">{{ $t('menu.Theraphy') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/scholarships">{{ $t('menu.Scholarships') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/admissions">{{ $t('menu.Admissions') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/contact">{{ $t('menu.ContactUs') }}</router-link>
                      </li>
                    </ul>
                  </nav>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  // import LanguagePickerCmp from '@/components/LanguagePickerCmp.vue'

  export default {
    name: 'Header',
    components: { }
  }
</script>
<style lang="scss">
  /*.animated{*/
  /*  animation-duration: .3ms !important;*/
  /*}*/
  .main-lang{
    position: absolute;
    top: 5px;
    right: 15px;
    strong {
      color: #c0c3c5 !important;
      padding: 3px;
    }
  }
</style>
