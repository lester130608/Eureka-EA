<template>
    <div class="contact-form">
        <form action="" class="row" @submit="onSubmit">
            <div class="form-group col-md-12">
                <label for="input-1">{{ $t('full_name')}}:</label>
                <input type="text" v-model="fullName" name="fullname" class="form-control" id="input-1">
            </div>
            <div class="form-group col-md-6">
                <label for="input-6">{{ $t('email_address')}}</label>
                <input type="email" v-model="email" name="email" class="form-control" id="input-6">
            </div>

            <div class="form-group col-md-6">
                <label for="input-7">{{ $t('phone_number')}}</label>
                <input type="tel" v-model="phoneNumber" name="phoneNumber" class="form-control" id="input-7">
            </div>


            <div class="form-group col-md-12">
                <label for="input-8">{{ $t('message')}}</label>
                <textarea v-model="message" name="message" id="input-8" cols="30" rows="3"
                          class="form-control"></textarea>
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
                showAlertError: false
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
                    headers: {Authorization: "Basic b2FjZXZlZG86dGVzdGluZw=="}
                };
                let formdata = new FormData();
                formdata.append("fullname", this.fullName);
                formdata.append("email", this.email);
                formdata.append("phoneNumber", this.phoneNumber);
                formdata.append("message", this.message);
                axios.post(
                    this.stateStore.config[process.env.NODE_ENV].emailUrl,
                    formdata, auth
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
    }
</style>
