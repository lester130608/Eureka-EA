<template>
  <div class="header">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body">
        <!--        MOBILE MENU-->
        <ul class="site-nav-wrap">
          <li>
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
            <router-link class="nav-link text-left" to="/procurement">{{ $t('menu.Procurement') }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-left" to="/tuition">{{ $t('menu.Tuition') }}</router-link>
          </li>
          <li>
            <router-link class="nav-link text-left" to="/admissions">{{ $t('menu.Admissions') }}</router-link>
          </li>
          <li class="js-menu-toggle">
            <b-link class="nav-link text-left contact-nav" @click="$bvModal.show('bv-modal-example')">{{
                $t('menu.ContactUs')
              }}</b-link>

          </li>
          <li>
            <router-link class="nav-link text-left" to="/faq">{{ $t('menu.FAQ') }}</router-link>
          </li>
        </ul>
      </div>
      <div class="full-modal">
        <b-modal id="bv-modal-example" hide-footer centered>
          <template #modal-title>
            {{ $t('modal_contact.title') }}
          </template>
          <div class="modal-design">
            <div class="img-style">
              <img width="70%" class="img-thumbnail" src="../../public/default/images/contact.svg" alt=""/>
            </div>
            <div class="d-block d-block-fix text-center">
              <h4> {{ $t('modal_contact.call') }} <a href="tel:+13054206690" class="h4 d-block d-block-fix">Phone: 305 420 6690</a>
              </h4>
              <h4> {{ $t('modal_contact.or_email') }} <a href="mailto:info@theeurekaacademy.com?Subject=Contacting"
                                                         target="_blank"
                                                         class="h4 d-block d-block-fix">info@theeurekaacademy.com</a></h4>
            </div>
          </div>


        </b-modal>
      </div>
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

            <div class="quick-contact-icons d-flex first d-flex align-items-center">
              <div class="icon ">
                <span class="icon-location-arrow text-primary"></span>
              </div>
              <div class="text">
                <!--                <span class="h4 d-block">Florida,US</span>-->
                <span class="h4 d-block">9745 SW 184th St. Palmetto Bay, FL 33157</span>
              </div>
            </div>

          </div>
          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons d-flex  second d-flex align-items-center">
              <div class="icon ">
                <span class="icon-phone text-primary"></span>
              </div>
              <div class="text">
                <a href="tel:+13054206690" class="h4 d-block">Phone: 305 420 6690</a>
                <a class="h4 d-block">Fax: 305 420 5708 </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-none d-lg-block">
            <div class="quick-contact-icons third d-flex align-items-center">
              <div class="icon ">
                <span class="icon-envelope text-primary"></span>
              </div>
              <div class="text">
                <a href="mailto:info@theeurekaacademy.com?Subject=Contacting" target="_blank" class="h4 d-block">info@theeurekaacademy.com</a>
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
              <a class="logo animated slideInDown" href="/">
                <img src="../../public/default/images/logo-eureka-left.svg" alt="Image" class="img-fluid">
                <!-- <strong>Water</strong>Boat -->
              </a>
            </div>
            <div class="col-12 container-menu">
              <div id="container-menu" class="d-flex align-items-center">

                <div class="mx-auto header-height">
                  <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                      <li>
                        <router-link class="nav-link text-left" to="/">{{ $t('menu.Home') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/about">{{ $t('menu.AboutUs') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/philosophy">{{
                            $t('menu.Philosophy')
                          }}
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/theraphy">{{ $t('menu.Theraphy') }}</router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/scholarships">{{
                            $t('menu.Scholarships')
                          }}
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/procurement">{{
                            $t('menu.Procurement')
                          }}
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/admissions">{{
                            $t('menu.Admissions')
                          }}
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/tuition">{{
                            $t('menu.Tuition')
                          }}
                        </router-link>
                      </li>
                      <li>
                        <b-link class="nav-link text-left contact-nav"
                           @click="$bvModal.show('bv-modal-example')">{{ $t('menu.ContactUs') }}</b-link>
                      </li>
                      <li>
                        <router-link class="nav-link text-left" to="/faq">{{ $t('menu.FAQ') }}</router-link>
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
  components: {}
}
</script>
<style lang="scss">
/*.animated{*/
/*  animation-duration: .3ms !important;*/
/*}*/
@import "src/assets/scss/variables";

.main-lang {
  position: absolute;
  top: 5px;
  right: 15px;

  strong {
    color: #c0c3c5 !important;
    padding: 3px;
  }
}

.header-height {
  height: 65px;
}

.shrink {
  .header-height {
    height: 30px !important;
  }
}

.modal-header {
  background-color: $primary-color;
  color: white;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 16px !important;
  text-align: left;
  align-items: center !important;
}

.modal-design {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.modal-header .close {
  color: white;
}
.img-thumbnail {
  border: none !important;
}

@media screen and (min-width: 1024px) {
  .contact-nav {
    text-transform: uppercase;
    font-size: 16px !important;
    letter-spacing: 0.05rem;
    font-weight: 900;
    color: white;
    font-family: "Oswald", sans-serif;
    text-decoration: none;
  }

}

@media screen and (max-width: 425px) {
  .modal-design {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .d-block-fix {
    font-size: 22px;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .img-style {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }


}

@media screen and (max-width: 320px) {
  .modal-design {
    display: block !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .d-block-fix {
    font-size: 20px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
  }
  .img-style {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
  }


}
</style>
