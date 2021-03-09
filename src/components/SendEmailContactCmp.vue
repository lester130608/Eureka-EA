<template>
    <div class="contact-form">
        <form action="" class="row" @submit="onSubmit">
            <div class="form-group col-md-12">
                <label class="default" for="input-1">{{ $t('full_name')}}:</label>
                <input type="text" v-model="fullName" name="fullname" class="form-control" id="input-1">
            </div>
            <div class="form-group col-md-6">
                <label class="default" for="input-6">{{ $t('email_address')}}</label>
                <input type="email" v-model="email" name="email" class="form-control" id="input-6">
            </div>

            <div class="form-group col-md-6">
                <label class="default" for="input-7">{{ $t('phone_number')}}</label>
                <input type="tel" v-model="phoneNumber" name="phoneNumber" class="form-control" id="input-7">
            </div>


            <div class="form-group col-md-12">
<!--                <label for="input-8">{{ $t('message')}}</label>-->
<!--                <textarea v-model="message" name="message" id="input-8" cols="30" rows="3"-->
<!--                          class="form-control"></textarea>-->
                <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
                    <h2 class="bulgy-radios-title">I am interested in the following program(s):</h2>
                    <div class="container-options">
                        <label>
                            <input type="radio" name="options" v-model="interestedCuestionary" />
                            <span class="radio"></span>
                            <span class="label">School only</span>
                        </label>
                        <label>
                            <input type="radio" name="options" v-model="interestedCuestionary" />
                            <span class="radio"></span>
                            <span class="label">School & Therapy</span>
                        </label>
                    </div>
                    <h2 class="bulgy-radios-title">What scholarship program does your child participate in?</h2>
                    <div class="container-options">
                        <label>
                            <input type="radio" value="McKay" name="options" v-model="scholarshipCuestionary"  />
                            <span class="radio"></span>
                            <span class="label">McKay</span>
                        </label>
                        <label>
                            <input type="radio" value="Step Up" name="options" v-model="scholarshipCuestionary" />
                            <span class="radio"></span>
                            <span class="label">Step Up</span>
                        </label>
                        <label>
                            <input type="radio" value="Gardiner" name="options" v-model="scholarshipCuestionary" />
                            <span class="radio"></span>
                            <span class="label">Gardiner</span>
                        </label>
                        <label>
                            <input type="radio" value="other" name="options" v-model="scholarshipCuestionary" />
                            <span class="radio"></span>
                            <span class="label">Other</span>
                        </label>
                        <input v-if="scholarshipCuestionary === 'other'" type="text" v-model="scholarshipCuestionary" name="scholarshipCuestionary" class="form-control" id="input-7">
                    </div>
                </div>


            </div>

            <div class="form-group col-md-12">
                <input type="submit" class="btn btn-primary py-3 px-5" v-bind:value=" $t('send')">
            </div>

        </form>
        <div v-if="showAlertContact" class="alert alert-success animated bounceIn" role="alert">
            <h2 class="alert-heading">
                <img width="40px"  src="../../public/default/images/contact.svg" alt="">
                {{ $t('view_home.well_done')}}!</h2>
            <button type="button" class="close"
                    style="position: absolute;  top: 5px; right: 8px;"
                    data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <hr>
            <p v-html="$t('view_home.data_response')"></p>

        </div>
        <div v-if="showAlertError" class="alert alert-danger animated shake" role="alert">
            <h2 class="alert-heading">
                <img width="40px"  src="../../public/default/images/error.svg" alt="">
                {{ $t('view_home.error')}}!</h2>
            <button type="button" class="close"
                    style="position: absolute;  top: 5px; right: 8px;"
                    data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <hr>
            <p v-html="$t('view_home.error_message')"></p>

        </div>
    </div>

</template>
<script>
    import axios from 'axios'

    export default {
        name: "SendEmailContact",
        data() {
            return {
                fullName: '',
                email: '',
                message: '',
                phoneNumber: '',
                stateStore: this.$store.state,
                showAlertContact: false,
                showAlertError: false,
                interestedCuestionary: '',
                scholarshipCuestionary: ''
            };
        },
        methods: {
            onSubmit(e) {
                console.log('SENDING EMAIL', {
                    fullName: this.fullName,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    message: this.message
                });
                e.preventDefault();
                const auth = {
                    headers: {
                        Authorization: "Basic b2FjZXZlZG86dGVzdGluZw==",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",//"Origin, X-Requested-With, Content-Type, Accept",
                        "Access-Control-Allow-Methods": "*",//"GET, PUT, POST, DELETE",
                        "Access-Control-Max-Age": "86400",
                        'Content-Type': 'application/json'
                    }
                };
                let formdata = new FormData();
                formdata.append("fullname", this.fullName);
                formdata.append("email", this.email);
                formdata.append("phoneNumber", this.fullName);
                formdata.append("message", this.message);
                axios.post(
                    this.stateStore.config[process.env.NODE_ENV].emailUrl,
                    {
                        "fullname": this.fullName,
                        "phoneNumber": this.fullName,
                        "email": this.email,
                        "message": this.message
                    }, auth
                )
                    .then(res => {
                        console.log('AQUI EN SEND EMAIL');
                        this.showAlert();
                    })
                    .catch(error => {
                        console.log('ERROR', error);
                      this.showAlertErrorSending();
                    });
            },
            showAlert() {
              const scope = this;
                this.showAlertContact = true;
                setTimeout(function () {
                  scope.showAlertContact = false;
                }, 6000);
            },
            showAlertErrorSending() {
              const scope = this;
                this.showAlertError = true;
                setTimeout(function () {
                  scope.showAlertError = false;
                }, 6000);
            }
        }
    };
</script>
<style lang="scss">
    @import "../assets/scss/variables";
    .contact-form {
        p strong {
            font-weight: 700;
        }
      .alert{
        position: absolute;
        top: 0;
        bottom: 0;
        height: 180px;
        left: 0;
        right: 0;
        margin: auto;
      }
        label.default{
            width: 100%;
            text-align: left;
        }
    }
    @media (max-width: 575.98px) {
        .contact-form .alert {
            height: 250px;
        }
    }

</style>
