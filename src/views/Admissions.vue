<template>
    <div class="admissions">
        <div class="intro-section"
             style="background-position: bottom"
             v-bind:style="{ 'background-image': 'url(' + './default/images/admissions/home1.jpg' + ')' }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
                        <h1>{{ $t('view_admission.title') }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p>
                            {{ $t('view_admission.first_paragraph') }}
                        </p>
                        <p>
                            {{ $t('view_admission.second_paragraph') }}
                        </p>
                        <router-link to="/admissions/apply" class="btn btn-primary py-3 px-5">
                            {{ $t('start_application') }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Admissions"
    }
</script>
<style scoped>
.btn-primary {
  width: 45%;
}
@media screen and (max-width: 425px){
  .btn-primary {
    width: 100%;
  }
}
</style>
