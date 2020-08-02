<template>
    <div class="theraphy">
        <div class="intro-section"
             style="background-position: bottom"
             v-bind:style="{ 'background-image': 'url(' + './default/images/home/slide-0.jpg' + ')' }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mx-auto text-center" data-aos="fade-up">
                        <h1>Theraphy</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <!--            <span class="text-serif text-primary">{{ $t('menu.Philosophy') }}</span>-->
                        <h3 class="heading-center text-primary">{{ $t('menu.Theraphy') }}</h3>
                        <p>
                            Eureka Educational Academy provides a full complement of therapy services
                            which will be integrated within the regular school day.
                        </p>
                        <div class="site-section ">
                            <div class="container-fluid">
                                <div class="row justify-content-center mb-5">
                                    <div class="col-md-7 text-center">
<!--                                        <span class="text-serif text-primary">Therapies provided:</span>-->
                                        <h4 class="text-primary text-center">Therapies provided:</h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 mb-4">
                                        <div class="service-39381">
                                            <img src="../../public/default/images/services/aba-theraphy.jpg" alt="Image" class="img-fluid">
                                            <div class="p-4">
                                                <h4 class="text-primary"> ABA therapy </h4>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mb-4">
                                        <div class="service-39381">
                                            <img src="../../public/default/images/services/speech-theraphy.jpg" alt="Image" class="img-fluid">
                                            <div class="p-4">
                                                <h4 class="text-primary">Speech & Language Therapy</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mb-4">
                                        <div class="service-39381">
                                            <img src="../../public/default/images/services/occupational-theraphy.jpg" alt="Image" class="img-fluid">
                                            <div class="p-4">
                                                <h4 class="text-primary">Occupational Therapy</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mb-4">
                                        <div class="service-39381">
                                            <img src="../../public/default/images/services/physical-theraphy.jpg" alt="Image" class="img-fluid">
                                            <div class="p-4">
                                                <h4 class="text-primary">Physical Therapy</h4>
                                            </div>
                                        </div>
                                    </div>
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
    export default {
        name: 'Theraphy',
        components: {}
    }
</script>
<style lang="scss">
    .theraphy {
        .site-section {
            padding: 2em 0;
            p {
                font-size: 1.3em;;
            }
        }

        .intro-section {
            min-height: 400px;
        }
    }

</style>
