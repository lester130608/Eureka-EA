<template>
  <div class="about">
    <div class="intro-section"
         style="background-position: bottom"
         v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">
            <h1>About Eureka Educational Academy </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
            <p>
              <router-link class="btn btn-primary py-3 px-5" to="/contact">{{ $t('menu.ContactUs') }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img src="../../public/default/images/eureka-logo.png" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-9 text-left">
            <span class="text-serif text-primary">About Us</span>
            <h3 class="heading-92913 text-black">Welcome To Our Website</h3>
            <p>Eureka Educational Academy was founded by a group of educators and health care
              professionals with over 75 years of experience in providing services to school age
              children in the South Florida area.
            </p>
            <p>The main goal of the academy is to provide students
              with a complete educational experience which will meet the social, emotional and
              behavioral needs of each individual student. The team has created a clean, safe and
              innovative campus which will provide a “feel good” experience for both students and
              parents alike.</p>
            <p><a href="#" class="btn btn-primary py-3 px-4">Learn More</a></p>
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
  </div>
</template>
<script>
  export default {
    name: 'About',
    components: { }
  }
</script>
