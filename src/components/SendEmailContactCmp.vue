<template>
  <div class="contact-form">
    <form action="" class="row" @submit="onSubmit">
      <template v-if="activeStep === 0">
        <div class="form-group col-md-12">
          <label class="default" for="input-1">{{ $t('parent_name') }}:</label>
          <input required type="text" v-model="parentName" name="firstName" class="form-control" id="input-1">
        </div>
        <!--                <div class="form-group col-md-6">-->
        <!--                    <label class="default" for="input-1">{{ $t('last_name')}}:</label>-->
        <!--                    <input type="text" v-model="lastName" name="lastname" class="form-control" id="input-2">-->
        <!--                </div>-->
        <div class="form-group col-md-12">
          <label class="default" for="input-6">{{ $t('email_address') }}</label>
          <input required type="email" v-model="email" name="email" class="form-control" id="input-6">
        </div>
        <div class="form-group col-md-12">
          <label class="default" for="input-7">{{ $t('phone_number') }}</label>
          <input required type="tel" v-model="phoneNumber" name="phoneNumber" class="form-control"
                 id="input-7">
        </div>
      </template>

      <div class="form-group row animated slideInRight" v-if="activeStep === 1">
        <!--                                <label for="input-8">{{ $t('message')}}</label>-->
        <!--                                <textarea v-model="message" name="message" id="input-8" cols="30" rows="3"-->
        <!--                                          class="form-control"></textarea>-->
        <div class="col-12 col-sm-6 ">
          <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
            <h2 class="bulgy-radios-title">{{ $t('custionary.text1') }}</h2>
            <div class="container-options">
              <label>
                <input type="radio" value="School only" name="interestedSchoolOnly"
                       v-model="interestedCuestionary"/>
                <span class="radio"></span>
                <span class="label">School only</span>
              </label>
              <label>
                <input type="radio" value="School & Therapy" name="interestedSchoolTherapy"
                       v-model="interestedCuestionary"/>
                <span class="radio"></span>
                <span class="label">School & Therapy</span>
              </label>
            </div>
            <h2 class="bulgy-radios-title">{{ $t('custionary.text2') }}</h2>
            <div class="container-options">
              <label>
                <input type="radio" value="McKay" name="scholarshipMcKay"
                       v-model="scholarshipCuestionary"/>
                <span class="radio"></span>
                <span class="label">McKay</span>
              </label>
              <label>
                <input type="radio" value="Step Up" name="scholarshipStepUp"
                       v-model="scholarshipCuestionary"/>
                <span class="radio"></span>
                <span class="label">Step Up</span>
              </label>
              <label>
                <input type="radio" value="Gardiner" name="scholarshipGardiner"
                       v-model="scholarshipCuestionary"/>
                <span class="radio"></span>
                <span class="label">Gardiner</span>
              </label>
              <label>
                <input type="radio" value="other" name="scholarshipOther"
                       v-model="scholarshipCuestionary"/>
                <span class="radio"></span>
                <span class="label">Other</span>
              </label>
              <input v-if="scholarshipCuestionary === 'other'" type="text"
                     v-model="scholarshipOtherCuestionary" name="scholarshipOtherCuestionary"
                     class="form-control">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
            <h2 class="bulgy-radios-title">{{ $t('custionary.text3') }}</h2>
            <div class="container-options">
              <label>
                <input type="radio" value="Immediately" name="startSchoolImmediately"
                       v-model="startSchoolCuestionary"/>
                <span class="radio"></span>
                <span class="label">{{ $t('custionary.immediately') }}</span>
              </label>
              <label>
                <input type="radio" value="Next Month" name="startSchoolNextMonth"
                       v-model="startSchoolCuestionary"/>
                <span class="radio"></span>
                <span class="label">{{ $t('custionary.next_month') }}</span>
              </label>
              <label>
                <input type="radio" value="New Shool Year" name="startSchoolNewSchool"
                       v-model="startSchoolCuestionary"/>
                <span class="radio"></span>
                <span class="label">{{ $t('custionary.new_school_year') }}</span>
              </label>
              <input v-if="startSchoolCuestionary === 'New Shool Year'" type="text"
                     v-model="startSchoolOtherCuestionary" name="startSchoolOtherCuestionary"
                     class="form-control">
            </div>
            <h2 class="bulgy-radios-title">{{ $t('custionary.text4') }}</h2>
            <div class="container-options">
              <label>
                <input type="radio" value="Immediately" name="interestedApplyBefore"
                       v-model="interestedApplyCuestionary"/>
                <span class="radio"></span>
                <span class="label">Before School Care</span>
              </label>
              <label>
                <input type="radio" value="Next Month" name="interestedApplyAfter"
                       v-model="interestedApplyCuestionary"/>
                <span class="radio"></span>
                <span class="label">After School Care</span>
              </label>
            </div>
          </div>
        </div>


      </div>

      <div class="col-12 animated slideInRight cuestionary-form" v-if="activeStep === 2">
        <h2 class="bulgy-radios-title text-center">{{ parentName }}, {{ $t('custionary.text5') }} </h2>
        <div class="row form-group">
          <div class="col-12 col-sm-6">
            <div class="bulgy-checkers" role="radiogroup" aria-labelledby="bulgy-radios-label">
              <h2 class="bulgy-radios-title text-left">{{ $t('custionary.text6') }} </h2>
              <b-form-group>
                <!--                                :options="optionsDays"-->
                <b-form-checkbox-group
                    id="checkbox-group-days"
                    v-model="bestTimeDaysCuestionary"
                    name="bestDay">
                  <b-form-checkbox v-for="(day, index) in optionsDays"
                                   v-bind:key="index"
                                   v-bind:value="day.value">{{ $t(`days.${day.text}`) }}
                  </b-form-checkbox>
                </b-form-checkbox-group>
                <!--                                <b-form-checkbox  v-model="bestTimeDaysAnyCuestionary" value="Anyone">{{$t(`days.Any`)}}</b-form-checkbox>-->
              </b-form-group>

            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">
              <h2 class="bulgy-radios-title">{{ $t('custionary.text7') }} </h2>
              <div class="container-options">
                <label>
                  <input type="radio" value="AM" name="bestTimeHoursCuestionaryAM"
                         v-model="bestTimeHoursCuestionary"/>
                  <span class="radio"></span>
                  <span class="label">AM</span>
                </label>
                <label>
                  <input type="radio" value="PM" name="bestTimeHoursCuestionaryPM"
                         v-model="bestTimeHoursCuestionary"/>
                  <span class="radio"></span>
                  <span class="label">PM</span>
                </label>
                <label>
                  <input type="radio" value="Any time" name="bestTimeHoursCuestionaryAny"
                         v-model="bestTimeHoursCuestionary"/>
                  <span class="radio"></span>
                  <span class="label">{{ $t('any_time') }}</span>
                </label>
              </div>


<!--              <div class="bulgy-radios" role="radiogroup" aria-labelledby="bulgy-radios-label">-->
                <h2 class="bulgy-radios-title">{{ $t('custionary.text8') }}</h2>
                <div class="container-options">
                  <label>
                    <input type="radio" value="email" name="bestTimeFormCuestionaryEmail"
                           v-model="bestTimeFormCuestionary"/>
                    <span class="radio"></span>
                    <span class="label">{{ $t('email') }}</span>
                  </label>
                  <label>
                    <input type="radio" value="phone" name="bestTimeFormCuestionaryPhone"
                           v-model="bestTimeFormCuestionary"/>
                    <span class="radio"></span>
                    <span class="label">{{ $t('phone') }}</span>
                  </label>
                </div>

<!--              </div>-->
            </div>
          </div>
        </div>
      </div>


      <div class="form-group col-md-12 buttons-container">
        <input v-if="activeStep === 0" v-on:click="validateStep()" class="btn btn-primary py-3 px-5"
               v-bind:value=" $t('continue')">
        <input v-if="activeStep > 0" v-on:click="activeStep--" class="btn btn-primary py-3 px-5 previous"
               v-bind:value=" $t('prev')">
        <input v-if="activeStep === 1" v-on:click="validateStep()" class="btn btn-primary py-3 px-5"
               v-bind:value=" $t('continue')">
        <input v-if="activeStep === maxStep" type="submit" class="btn btn-primary py-3 px-5"
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
      ]
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
      switch (this.activeStep) {
        case 0:
          if (!isUndefinedOrNullOrEmpty(this.parentName) &&
              (!isUndefinedOrNullOrEmpty(this.email) || !isUndefinedOrNullOrEmpty(this.phoneNumber))) {
            this.activeStep++;

          }
          break;
        case 1:
          if (!isUndefinedOrNullOrEmpty(this.interestedCuestionary)
              && !isUndefinedOrNullOrEmpty(this.startSchoolCuestionary)
              && !isUndefinedOrNullOrEmpty(this.scholarshipCuestionary)) {
            if (this.startSchoolCuestionary !== 'New Shool Year')
              this.activeStep++;
            else {
              if (!isUndefinedOrNullOrEmpty(this.startSchoolOtherCuestionary)) {
                this.activeStep++;
              }
            }
          }
          break;
      }
    },
    onSubmit(e) {
      let daysOfWeek = '';
      this.bestTimeDaysCuestionary.forEach(day => {
        daysOfWeek += `<li>${day}</li>`;
      });
      this.message = `<div style="color: #2c3e50;text-align: left;font-size: 18px">
                <h4 style="font-size: 22px">Parent Name: <strong>${this.parentName}</strong></h4>
                <h4 style="font-size: 22px">Which of the following program(s) are you interested in: <strong>${this.interestedCuestionary}</strong></h4>
                <h4 style="font-size: 22px">What scholarship program does your child participate in?: <strong>${this.scholarshipCuestionary}</strong></h4>
                ${(!isUndefinedOrNullOrEmpty(this.scholarshipOtherCuestionary)) ? `<p>${this.scholarshipOtherCuestionary}</p><br>` : ``}
                <h4 style="font-size: 22px">When would you like your child to start school? <strong>${this.startSchoolCuestionary}</strong></h4>
                 ${(!isUndefinedOrNullOrEmpty(this.startSchoolOtherCuestionary)) ? `<p>${this.startSchoolOtherCuestionary}</p><br>` : ``}
                 <h4 style="font-size: 22px">Would you be interested in (check all that apply)?: <strong>${this.interestedCuestionary}</strong></h4>
                 <h4 style="font-size: 22px">What day of the week do you prefer?: </h4>
                 <ul>${daysOfWeek}</ul><br>
                 <h4 style="font-size: 22px">What time is better for you?: <strong>${this.bestTimeHoursCuestionary}</strong></h4>
                 <h4 style="font-size: 22px">What form is better for you?: <strong>${this.bestTimeFormCuestionary}</strong></h4>
                </div>`;
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

.btn.previous {
  margin-right: 15px;
  background-color: white !important;
  color: #0095d9;
}

btn.btn-primary {
  min-width: 250px;
}

.form-group, .cuestionary-form {
  &.animated {
    animation-duration: .3s;
  }
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
