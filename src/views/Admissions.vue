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
                        <!--            <span class="text-serif text-primary">{{ $t('menu.Philosophy') }}</span>-->
<!--                        <h3 class="heading-center text-primary">{{ $t('view_admission.title') }}</h3>-->
                        <p>
                            {{ $t('view_admission.first_parrafo') }}

                        </p>
                        <p>
                            {{ $t('view_admission.second_parrafo') }}
                        </p>
                        <input @click="$bvModal.show('bv-modal-example')" class="btn btn-primary py-3 px-5" v-bind:value=" $t('make_appointment')"> 
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
input{
  width: 45%;
}

@media screen and (max-width: 425px){
  input{
    width: 100%;
  }

}

</style>
