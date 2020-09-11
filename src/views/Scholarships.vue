<template>
    <div class="scholarships">
        <div class="intro-section"
             style="background-position: bottom"
             v-bind:style="{ 'background-image': 'url(' + './default/images/Scholarships/mujer_nino.jpg' + ')' }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
                        <h1>{{ $t('view_scholarships.title') }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <!--            <span class="text-serif text-primary">{{ $t('menu.Philosophy') }}</span>-->
                        <h3 class="heading-center text-primary">{{ $t('view_scholarships.title') }}</h3>
                        <p>
                            {{ $t('view_scholarships.description') }}
                        </p>
                        <h4>STEP UP FOR STUDENTS</h4>
                        <p> Florida Tax Credit Scholarship (income based)</p>
                        <p> Gardener Scholarship (Special Needs)</p>

                        <h4>John McKay Scholarship (Special Needs, previously attended public school)</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Scholarships"
    }
</script>

<style scoped>

</style>