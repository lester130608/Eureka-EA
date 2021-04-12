<template>
  <div class="contact-form">
    <h6 class="msg-error" v-if="errorValidation">{{$t(txtErrorValidation) }}</h6>
    <form action="" class="row" @submit="onSubmit">
      <template v-if="activeStep === 0">
        <div class="form-group col-md-12">
          <label class="default" for="input-1">{{ $t('parent_name') }}:<strong>*({{ $t('required') }})</strong></label>
          <input required type="text" v-model="parentName" name="parentName" class="form-control" id="input-1">
        </div>
        <!--                <div class="form-group col-md-6">-->
        <!--                    <label class="default" for="input-1">{{ $t('last_name')}}:</label>-->
        <!--                    <input type="text" v-model="lastName" name="lastname" class="form-control" id="input-2">-->
        <!--                </div>-->
        <div class="form-group col-12 col-md-6">
          <label class="default" for="input-6">{{ $t('email_address') }}<strong>*({{ $t('required') }})</strong></label>
          <input required type="email" v-model="email" name="email" class="form-control" id="input-6">
        </div>
        <div class="form-group col-12 col-md-6">
          <label class="default" for="input-7">{{ $t('phone_number') }}<strong>*({{ $t('required') }})</strong></label>
          <input required type="number" v-model="phoneNumber" name="phoneNumber" class="form-control"
                 id="input-7">
        </div>
        <div class="form-group col-md-12">
          <label class="default" for="input-8">{{ $t('message') }}<strong>*({{ $t('required') }})</strong></label>
          <textarea required  v-model="message" name="message" class="form-control"
                    id="input-8"></textarea>
        </div>
      </template>


      <div class="form-group col-md-12 buttons-container">
        <input  type="submit" class="btn btn-primary py-3 px-5"
               v-bind:value=" $t('send')">
      </div>
    </form>
    <div v-if="showAlertContact" class="alert alert-success animated bounceIn" role="alert">
      <h2 class="alert-heading">
        <img width="40px" src="../../public/default/images/contact.svg" alt="">
        {{ $t('view_home.well_done') }}!</h2>
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
        <img width="40px" src="../../public/default/images/error.svg" alt="">
        {{ $t('view_home.error') }}!</h2>
      <button type="button" class="close"
              style="position: absolute;  top: 5px; right: 8px;"
              data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <hr>
      <p v-html="$t('view_home.error_message')"></p>

    </div>
    <!--        <div v-html="this.message"></div>-->
  </div>

</template>
<script>
import axios from 'axios'
import {isUndefinedOrNullOrEmpty} from "bootstrap-vue/src/utils/inspect";

export default {
  name: "SendEmailContact",
  data() {
    return {
      parentName: '',
      fullName: '',
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      phoneNumber: '',
      stateStore: this.$store.state,
      showAlertContact: false,
      showAlertError: false,
      activeStep: 0,
      maxStep: 2,
      interestedCuestionary: '',
      scholarshipCuestionary: '',
      scholarshipOtherCuestionary: '',
      startSchoolCuestionary: '',
      startSchoolOtherCuestionary: '',
      interestedApplyCuestionary: '',
      bestTimeHoursCuestionary: '',
      bestTimeFormCuestionary: '',
      bestTimeDaysCuestionary: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      bestTimeDaysAnyCuestionary: 'Anyone',
      optionsDays: [
        {text: 'Mon', value: 'Monday'},
        {text: 'Tue', value: 'Tuesday'},
        {text: 'Wed', value: 'Wednesday'},
        {text: 'Thu', value: 'Thursday'},
        {text: 'Fri', value: 'Friday'},
        {text: 'Sat', value: 'Saturday'},
        {text: 'Sun', value: 'Sunday'}
      ],
      errorValidation: false,
      txtErrorValidation: '',
    };
  },
  watch: {
    // whenever question changes, this function will run
    // bestTimeDaysAnyCuestionary: function (newValue, oldValue) {
    //     console.log('ANY',newValue)
    //     if(newValue === 'Anyone'){
    //         this.bestTimeDaysCuestionary = [];
    //     }
    //
    // },
    bestTimeDaysCuestionary: function (newValue, oldValue) {
      // console.log(newValue, oldValue);
      // if(oldValue.length > 0){
      //     this.bestTimeDaysAnyCuestionary = false;
      // }

    }
  },
  methods: {
    validateStep() {
      const emailPatter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!isUndefinedOrNullOrEmpty(this.parentName)&&
          (!isUndefinedOrNullOrEmpty(this.email) && emailPatter.test(this.email) && !isUndefinedOrNullOrEmpty(this.phoneNumber))) {
     return true;
      } else {
        this.showAlertErrorValidation();
        return false;
      }
      return true;
    },
    onSubmit(e) {
      try {
        if(this.validateStep()){
          console.log('SENDING EMAIL', {
            parentName: this.parentName,
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
        }
        else{
          e.preventDefault();
          e.stopPropagation();
        }
      }catch (err){
        console.log(' ERRROR ',err);
      }


    },
    showAlert() {
      const scope = this;
      this.showAlertContact = true;
      setTimeout(function () {
        scope.showAlertContact = false;
      }, 6000);
    },
    showAlertErrorValidation(msg) {
      const scope = this;
      this.errorValidation = true;
      this.txtErrorValidation = (!msg) ? 'errorData' : msg;
      setTimeout(function () {
        scope.errorValidation = false;
        this.txtErrorValidation = '';
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

.btn.previous {
  margin-right: 15px;
  background-color: white !important;
  color: #0095d9;
}

btn.btn-primary {
  min-width: 250px;
}

.form-group, .cuestionary-form {
  position: relative;
  &.animated {
    animation-duration: .3s;
  }
  strong {
    color: #d21717;
    font-size: .7em;
  }
}

.msg-error {
  color: #d21717;
  font-weight: 600;
}

.contact-form {
  p strong {
    font-weight: 700;
  }

  .alert {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 180px;
    left: 0;
    right: 0;
    margin: auto;
  }

  label.default {
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
