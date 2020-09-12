<template>
    <div id="section-scholarchips" class="scholarships">
        <div class="intro-section"
             style="background-position: inherit"
             v-bind:style="{ 'background-image': 'url(' + './default/images/scholarships/home2.jpg' + ')' }">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 mx-auto text-center txt-info" data-aos="fade-up">
                        <h1>{{ $t('view_scholarships.title') }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div   class="site-section ">
            <div class="container-fluid">
                <div class="row justify-content-center mb-5">
                    <div class="col-md-7 text-center">
                        <h3 class="heading-center text-primary">{{ $t('view_scholarships.title') }}</h3>
                        <p>
                            {{ $t('view_scholarships.description') }}
                        </p>
                        <h4 class="text-primary text-center">{{ $t('view_scholarships.subtitle') }}</h4>

                    </div>
                </div>
                <div class="row">

                    <div class="col-md-4 mb-4">
                        <div class="service-39381">
                            <img src="../../public/default/images/scholarships/1.jpg" alt="Image" class="img-fluid">
                            <div class="p-4">
                                <h4 class="text-primary">{{ $t('view_scholarships.florida_tax_credit') }}</h4>
                                <h6><span class="badge badge-primary">{{ $t('view_scholarships.income_based') }}</span></h6>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-39381">
                            <img src="../../public/default/images/scholarships/2.jpg" alt="Image" class="img-fluid">
                            <div class="p-4">
                                <h4 class="text-primary">{{ $t('view_scholarships.gardiner_scholarship') }}</h4>
                                <h6><span class="badge badge-primary">{{ $t('view_scholarships.special_needs') }}</span></h6>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-39381">
                            <img src="../../public/default/images/scholarships/3.jpg" alt="Image" class="img-fluid">
                            <div class="p-4">
                                <h4 class="text-primary">{{ $t('view_scholarships.john_mcKay_scholarship') }}</h4>
                                <h6>
                                    <span class="badge badge-primary">{{ $t('view_scholarships.income_based') }}</span>
                                    <span class="badge badge-primary">{{ $t('view_scholarships.previously_attended') }}</span>
                                    </h6>

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
        name: "Scholarships"
    }
</script>

<style scoped>

</style>
