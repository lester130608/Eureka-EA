<template>
  <div class="philosophy">
    <div class="intro-section"
         style="background-position: bottom"
         v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">
            <h1>Philosophy</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
<!--            <span class="text-serif text-primary">{{ $t('menu.Philosophy') }}</span>-->
            <h3 class="heading-center text-primary">{{ $t('menu.Philosophy') }}</h3>
            <p>
              The Academy’s main goal is to foster the students’ growth academically, socially,
              and physically in order to reach the individual’s maximum potential. The focus is to
              develop the whole child through an integrated process that involves academic systems
              as well as therapeutic services provided as needed.

            </p>
            <p>The Academy will provide various educational methodologies and research
              based curriculums in order to develop an individualized learning plan which meets each
              individual’s educational needs. We will perform regular assessments in order to
              evaluate and provide real time performance data to establish the instructional plan of
              each student. In addition, the Academy will implement a blended learning approach
              which includes and one-to-one device and various educational software to achieve
              maximum results and effectiveness in student performance.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Philosophy',
    components: { }
  }
</script>
<style lang="scss">
  .philosophy{
    .site-section{
      p{
        font-size: 1.3em;;
      }
    }
    .intro-section{
      min-height: 400px;
    }
  }

</style>
