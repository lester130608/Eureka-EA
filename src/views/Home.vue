<template>
  <div class="home">
      <LanguagePickerCmp/>
      <div class="site-wrap">

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
                                  <span class="h4 d-block">San Francisco</span>
                                  <span class="caption-text">Mountain View, Fake st., CA</span>
                              </div>
                          </div>

                      </div>
                      <div class="col-lg-3 d-none d-lg-block">
                          <div class="quick-contact-icons d-flex  second">
                              <div class="icon align-self-start">
                                  <span class="icon-phone text-primary"></span>
                              </div>
                              <div class="text">
                                  <a href="tel:+13054206690" class="h4 d-block">305 420 6690</a>
                                  <a class="caption-text">Fax: 305 420 5708 </a>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 d-none d-lg-block">
                          <div class="quick-contact-icons d-flex third">
                              <div class="icon align-self-start">
                                  <span class="icon-envelope text-primary"></span>
                              </div>
                              <div class="text">
                                  <a href="mailto:info@theeurekaakademy.com?Subject=Contacting" target="_blank" class="h4 d-block">info@theeurekaakademy.com</a>
                                  <a href="mailto:mriera@theeurekaakademy.com?Subject=Contacting" target="_blank" class="h4 d-block">mriera@theeurekaakademy.com</a>
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
                                              <li class="active">
                                                  <a href="index.html" class="nav-link text-left">{{ $t('menu.Home') }}</a>
                                              </li>
                                              <li>
                                                  <a href="about.html" class="nav-link text-left">{{ $t('menu.AboutUs') }}</a>
                                              </li>
                                              <li>
                                                  <a href="services.html" class="nav-link text-left">{{ $t('menu.Philosophy') }}</a>
                                              </li>
                                              <li>
                                                  <a href="testimonials.html" class="nav-link text-left">{{ $t('menu.Theraphy') }}</a>
                                              </li>
                                              <li><a href="blog.html" class="nav-link text-left">{{ $t('menu.Scholaships') }}</a></li>
                                              <li>
                                                  <a href="contact.html" class="nav-link text-left">{{ $t('menu.Admissions') }}</a>
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

          <div class="hero-slide owl-carousel site-blocks-cover">
              <div class="intro-section slide-1"
                   style="background-position: bottom;"
                   v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
                  <div class="container">
                      <div class="row " style="padding-top: 100px;">
                          <div class="text-center" data-aos="fade-up" style="z-index: 9999;">
                              <h1>Aqui va el titulo del slide principal</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
                              <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>
                          </div>
                      </div>
<!--                      <div class="row align-items-center">-->
<!--                          <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">-->
<!--                              <h1>Enjoy The Ocean With Your Family</h1>-->
<!--                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>-->
<!--                              <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>-->
<!--                          </div>-->
<!--                      </div>-->
                  </div>
              </div>
              <div class="intro-section slide-2"
                   style="background: bottom;background-repeat: no-repeat;"
                   v-bind:style="{ 'background-image': 'url(' + './default/images/home/childs-2.svg' + ')' }" >
<!--                  <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">-->
                  <div class="container">
                      <div class="row " style="padding-top: 100px;">
                          <div class="text-center" data-aos="fade-up" style="z-index: 9999;">
                              <h1>Aqui va el titulo del segundo slide</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
                              <p><a href="#" class="btn btn-primary py-3 px-5">Read More</a></p>
                          </div>
                      </div>
                  </div>
              </div>


          </div>
          <!-- END slider -->

          <div class="site-section">
              <div class="container">
                  <div class="row">
                      <div class="col-md-6">
                          <img src="../../public/default/images/hero_2.jpg" alt="Image" class="img-fluid">
                      </div>
                      <div class="col-md-6">
                          <span class="text-serif text-primary">About Us</span>
                          <h3 class="heading-92913 text-black">Welcome To Our Website</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum, quasi. Odit velit deserunt eligendi unde, enim. Enim fugiat.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius ullam impedit architecto debitis facilis!</p>
                          <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>
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

          <div class="site-section bg-image overlay" style="background-image: url('../../public/default/images/hero_1.jpg');">
              <div class="container">
                  <div class="row">
                      <div class="col">
                          <div class="counter-39392">
                              <h3>349</h3>
                              <span>Number of Yacht</span>
                          </div>
                      </div>
                      <div class="col">
                          <div class="counter-39392">
                              <h3>7000+</h3>
                              <span>Customers Satisfied</span>
                          </div>
                      </div>
                      <div class="col">
                          <div class="counter-39392">
                              <h3>120</h3>
                              <span>Number of Staffs</span>
                          </div>
                      </div>
                      <div class="col">
                          <div class="counter-39392">
                              <h3>493</h3>
                              <span>Sea Destinations</span>
                          </div>
                      </div>
                      <div class="col">
                          <div class="counter-39392">
                              <h3>230</h3>
                              <span>Professional Sailors</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="site-section bg-light">
              <div class="container">
                  <div class="row justify-content-center mb-5">
                      <div class="col-md-7 text-center">
                          <span class="text-serif text-primary">Destination</span>
                          <h3 class="heading-92913 text-black text-center">Our Destinations</h3>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_2.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_2.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-6 col-lg-4 mb-4">
                          <div class="service-39381">
                              <img src="../../public/default/images/hero_2.jpg" alt="Image" class="img-fluid">
                              <div class="p-4">
                                  <h3><a href="#"><span class="icon-room mr-1 text-primary"></span> Croatia &mdash; Columbia</a></h3>
                                  <div class="d-flex">
                                      <div class="mr-auto">
                                          <span class="icon-date_range"></span>
                                          Sep. 05 &mdash; Oct. 15
                                      </div>
                                      <div class="ml-auto price">
                                          <span class="bg-primary">$600</span>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          <div class="site-section">
              <div class="container">
                  <div class="row">
                      <div class="col-md-7">
                          <p><img src="../../public/default/images/hero_1.jpg" alt="Image" class="img-fluid"></p>
                      </div>
                      <div class="col-md-5">
                          <span class="text-serif text-primary">Book Now</span>
                          <h3 class="heading-92913 text-black">Book A Yacht</h3>
                          <form action="#" class="row">
                              <div class="form-group col-md-6">
                                  <label for="input-1">Full Name:</label>
                                  <input type="text" class="form-control" id="input-1">
                              </div>
                              <div class="form-group col-md-6">
                                  <label for="input-2">Number of People:</label>
                                  <input type="text" class="form-control" id="input-2">
                              </div>

                              <div class="form-group col-md-6">
                                  <label for="input-3">Date From:</label>
                                  <input type="text" class="form-control datepicker" id="input-3">
                              </div>
                              <div class="form-group col-md-6">
                                  <label for="input-4">Date To:</label>
                                  <input type="text" class="form-control datepicker" id="input-4">
                              </div>

                              <div class="form-group col-md-12">
                                  <label for="input-5">Yacht You're Interested in:</label>
                                  <select name="" id="input-5" class="form-control">
                                      <option value="">Motor Yacht</option>
                                      <option value="">Hi-Speed Yacht</option>
                                      <option value="">Premium Yacht</option>
                                      <option value="">Presidential Yacht</option>
                                  </select>
                              </div>

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
                                  <textarea name="" id="input-8" cols="30" rows="5" class="form-control"></textarea>
                              </div>

                              <div class="form-group col-md-12">
                                  <input type="submit" class="btn btn-primary py-3 px-5" value="Book Now">
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
                          <span class="text-serif text-primary">Team</span>
                          <h3 class="heading-92913 text-black text-center">Our Team</h3>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-3 col-md-6 mb-lg-0">
                          <div class="person">
                              <figure>
                                  <img src="../../public/default/images/person_1.jpg" alt="Image" class="img-fluid">
                                  <div class="social">
                                      <a href="#"><span class="icon-facebook"></span></a>
                                      <a href="#"><span class="icon-twitter"></span></a>
                                      <a href="#"><span class="icon-linkedin"></span></a>
                                  </div>
                              </figure>
                              <div class="person-contents">
                                  <h3>Craig Daniel</h3>
                                  <span class="position">Engineer</span>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 col-md-6 mb-lg-0">
                          <div class="person">
                              <figure>
                                  <img src="../../public/default/images/person_2.jpg" alt="Image" class="img-fluid">
                                  <div class="social">
                                      <a href="#"><span class="icon-facebook"></span></a>
                                      <a href="#"><span class="icon-twitter"></span></a>
                                      <a href="#"><span class="icon-linkedin"></span></a>
                                  </div>
                              </figure>
                              <div class="person-contents">
                                  <h3>Craig Daniel</h3>
                                  <span class="position">Engineer</span>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 col-md-6 mb-lg-0">
                          <div class="person">
                              <figure>
                                  <img src="../../public/default/images/person_3.jpg" alt="Image" class="img-fluid">
                                  <div class="social">
                                      <a href="#"><span class="icon-facebook"></span></a>
                                      <a href="#"><span class="icon-twitter"></span></a>
                                      <a href="#"><span class="icon-linkedin"></span></a>
                                  </div>
                              </figure>
                              <div class="person-contents">
                                  <h3>Craig Daniel</h3>
                                  <span class="position">Engineer</span>
                              </div>
                          </div>
                      </div>

                      <div class="col-lg-3 col-md-6 mb-lg-0">
                          <div class="person">
                              <figure>
                                  <img src="../../public/default/images/person_4.jpg" alt="Image" class="img-fluid">
                                  <div class="social">
                                      <a href="#"><span class="icon-facebook"></span></a>
                                      <a href="#"><span class="icon-twitter"></span></a>
                                      <a href="#"><span class="icon-linkedin"></span></a>
                                  </div>
                              </figure>
                              <div class="person-contents">
                                  <h3>Craig Daniel</h3>
                                  <span class="position">Engineer</span>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          <div class="site-section">
              <div class="container">
                  <div class="row justify-content-center mb-5">
                      <div class="col-md-7 text-center">
                          <span class="text-serif text-primary">Testimonial</span>
                          <h3 class="heading-92913 text-black text-center">What Customer Saying...</h3>
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
                                      <img src="../../public/default/images/person_3_sq.jpg" alt="Image" class="img-fluid">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">John Doe</strong>
                                      <span>CEO and Co-Founder</span>
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
                                      <img src="../../public/default/images/person_4_sq.jpg" alt="Image" class="img-fluid">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">John Doe</strong>
                                      <span>CEO and Co-Founder</span>
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
                                      <img src="../../public/default/images/person_3_sq.jpg" alt="Image" class="img-fluid">
                                  </div>
                                  <div class="text">
                                      <strong class="d-block">John Doe</strong>
                                      <span>CEO and Co-Founder</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="site-section bg-image overlay" style="background-image: url('../../public/default/images/hero_2.jpg');">
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


          <div class="footer bg-light">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3">
                          <p class="mb-4"><img src="../../public/default/images/logo-eureka.svg" alt="Image" class="img-fluid"></p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
                          <p><a href="#">Learn More</a></p>
                      </div>
                      <div class="col-lg-3">
                          <h3 class="footer-heading"><span>Our Company</span></h3>
                          <ul class="list-unstyled">
                              <li><a href="#">About</a></li>
                              <li><a href="#">News</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="#">Our Team</a></li>
                              <li><a href="#">Careers</a></li>
                              <li><a href="#">Projects</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-3">
                          <h3 class="footer-heading"><span>Our Services</span></h3>
                          <ul class="list-unstyled">
                              <li><a href="#">Industrial</a></li>
                              <li><a href="#">Construction</a></li>
                              <li><a href="#">Remodeling</a></li>
                          </ul>
                      </div>
                      <div class="col-lg-3">
                          <h3 class="footer-heading"><span>Contact</span></h3>
                          <ul class="list-unstyled">
                              <li><a href="#">Help Center</a></li>
                              <li><a href="#">Support Community</a></li>
                              <li><a href="#">Press</a></li>
                              <li><a href="#">FAQ</a></li>
                              <li><a href="#">Our Partners</a></li>
                          </ul>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-12">
                          <div class="copyright">
                              <p>
                                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                  Copyright &copy; All rights reserved | <a href="https://eurekaacademy.com" target="_blank" >Eureka</a>
                                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LanguagePickerCmp from '@/components/LanguagePickerCmp.vue'

export default {
  name: 'Home',
  components: {
      LanguagePickerCmp
  }
}
</script>
<style lang="scss">
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
