<template>
  <div class="interest-form">
    <div v-if="status !== 'success'">

      <!-- SECCIÓN PARENT / GUARDIAN -->
      <div class="form-section">
        <h3 class="section-title">{{ $t('interest_form.section_parent') }}</h3>

        <b-form-group :label="$t('interest_form.parent_name_label') + ' *'" label-for="if-pname">
          <b-form-input id="if-pname" v-model="form.parent_name" 
            :placeholder="$t('interest_form.parent_name_placeholder')"
            :state="fs.parent_name" :disabled="loading" />
        </b-form-group>

        <div class="row">
          <div class="col-md-6">
            <b-form-group :label="$t('interest_form.phone_label') + ' *'" label-for="if-phone">
              <b-form-input id="if-phone" type="tel" v-model="form.parent_phone"
                :placeholder="$t('interest_form.phone_placeholder')"
                :state="fs.parent_phone" :disabled="loading" />
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group :label="$t('interest_form.email_label') + ' *'" label-for="if-email">
              <b-form-input id="if-email" type="email" v-model="form.parent_email"
                :placeholder="$t('interest_form.email_placeholder')"
                :state="fs.parent_email" :disabled="loading" />
            </b-form-group>
          </div>
        </div>
      </div>

      <!-- SECCIÓN STUDENT -->
      <div class="form-section">
        <h3 class="section-title">{{ $t('interest_form.section_student') }}</h3>

        <b-form-group :label="$t('interest_form.student_name_label') + ' *'" label-for="if-sname">
          <b-form-input id="if-sname" v-model="form.student_name"
            :placeholder="$t('interest_form.student_name_placeholder')"
            :state="fs.student_name" :disabled="loading" />
        </b-form-group>

        <div class="row">
          <div class="col-md-4">
            <b-form-group :label="$t('interest_form.dob_label') + ' *'" label-for="if-dob">
              <b-form-input id="if-dob" type="date" v-model="form.student_dob"
                :state="fs.student_dob" :disabled="loading" />
            </b-form-group>
          </div>
          <div class="col-md-2">
            <b-form-group :label="$t('interest_form.age_label') + ' *'" label-for="if-age">
              <b-form-input id="if-age" type="number" min="0" max="25"
                v-model="form.student_age" :state="fs.student_age" :disabled="loading" />
            </b-form-group>
          </div>
          <div class="col-md-3">
            <b-form-group :label="$t('interest_form.grade_label') + ' *'" label-for="if-grade">
              <b-form-select id="if-grade" v-model="form.student_grade"
                :options="gradeOptions" :state="fs.student_grade" :disabled="loading">
                <template #first>
                  <b-form-select-option :value="null" disabled>
                    {{ $t('interest_form.grade_placeholder') }}
                  </b-form-select-option>
                </template>
              </b-form-select>
            </b-form-group>
          </div>
          <div class="col-md-3">
            <b-form-group :label="$t('interest_form.former_school_label')" label-for="if-former">
              <b-form-input id="if-former" v-model="form.former_school"
                :placeholder="$t('interest_form.former_school_placeholder')" :disabled="loading" />
            </b-form-group>
          </div>
        </div>
      </div>

      <!-- SECCIÓN PROGRAM -->
      <div class="form-section">
        <h3 class="section-title">{{ $t('interest_form.section_program') }}</h3>

        <b-form-group :label="$t('interest_form.program_label') + ' *'">
          <b-form-radio-group v-model="form.program_interest" :state="fs.program_interest" :disabled="loading" :options="programOptions" />
        </b-form-group>

        <b-form-group :label="$t('interest_form.heard_label') + ' *'">
          <b-form-radio-group v-model="form.heard_about" :state="fs.heard_about" :disabled="loading" :options="heardOptions" />
          <b-form-input v-if="form.heard_about === 'Other'" v-model="form.heard_other"
            :placeholder="$t('interest_form.heard_other_specify')" :disabled="loading" class="mt-2" />
        </b-form-group>

        <b-form-group :label="$t('interest_form.scholarship_label') + ' *'">
          <b-form-checkbox-group v-model="form.scholarships" :state="fs.scholarships" :disabled="loading" :options="scholarshipOptions" />
        </b-form-group>

        <b-form-group :label="$t('interest_form.start_label') + ' *'">
          <b-form-radio-group v-model="form.start_when" :state="fs.start_when" :disabled="loading" :options="startOptions" />
          <b-form-input v-if="form.start_when === 'New School Year'" v-model="form.start_year_specify"
            :placeholder="$t('interest_form.start_new_year_specify')" :disabled="loading" class="mt-2" />
        </b-form-group>

        <b-form-group :label="$t('interest_form.care_label')">
          <b-form-checkbox-group v-model="form.care_services" :disabled="loading" :options="careOptions" />
        </b-form-group>
      </div>

      <!-- SECCIÓN THERAPY -->
      <div class="form-section">
        <h3 class="section-title">{{ $t('interest_form.section_therapy') }}</h3>

        <b-form-group :label="$t('interest_form.therapy_needed_label') + ' *'">
          <b-form-checkbox-group v-model="form.therapies" :state="fs.therapies" :disabled="loading" :options="therapyOptions" />
          <b-form-input v-if="form.therapies.includes('Other')" v-model="form.therapy_other"
            :placeholder="$t('interest_form.therapy_other_specify')" :disabled="loading" class="mt-2" />
        </b-form-group>

        <b-form-group :label="$t('interest_form.insurance_label') + ' *'">
          <b-form-radio-group v-model="form.insurance_type" :state="fs.insurance_type" :disabled="loading" :options="insuranceOptions" />
          <b-form-input v-if="form.insurance_type" v-model="form.insurance_details"
            :placeholder="$t('interest_form.insurance_specify_placeholder')" 
            :state="fs.insurance_details" :disabled="loading" class="mt-2" />
        </b-form-group>
      </div>

      <b-alert :show="status === 'error'" variant="danger" class="mt-3">
        <strong>{{ $t('interest_form.error_title') }}</strong><br />
        {{ $t('interest_form.error_message') }}
      </b-alert>

      <b-button @click="handleSubmit" variant="primary" size="lg" block :disabled="loading" class="mt-4">
        {{ loading ? $t('interest_form.submitting') : $t('interest_form.submit') }}
      </b-button>
    </div>

    <b-alert :show="status === 'success'" variant="success" class="mt-3">
      <h4 class="alert-heading">{{ $t('interest_form.success_title') }}</h4>
      <p class="mb-0">{{ $t('interest_form.success_message') }}</p>
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

@Component
export default class InterestForm extends Vue {
  form = {
    parent_name: "",
    parent_phone: "",
    parent_email: "",
    student_name: "",
    student_dob: "",
    student_age: "",
    student_grade: null as string | null,
    former_school: "",
    program_interest: "",
    heard_about: "",
    heard_other: "",
    scholarships: [] as string[],
    start_when: "",
    start_year_specify: "",
    care_services: [] as string[],
    therapies: [] as string[],
    therapy_other: "",
    insurance_type: "",
    insurance_details: "",
  };

  status: Status = "idle";
  tried = false;

  private readonly EMAILJS_SERVICE_ID = "service_6econ5r";
  private readonly EMAILJS_TEMPLATE_ID = "template_fomkbd3";
  private readonly EMAILJS_PUBLIC_KEY = "QvcnQenEgsjwkKlHV";

  get loading(): boolean {
    return this.status === "sending";
  }

  get gradeOptions() {
    return [
      "Pre-K", "K", "1st", "2nd", "3rd", "4th", "5th", "6th",
      "7th", "8th", "9th", "10th", "11th", "12th"
    ];
  }

  get programOptions() {
    return [
      { text: this.$t('interest_form.program_school_only') as string, value: "School Only" },
      { text: this.$t('interest_form.program_school_therapy') as string, value: "School & Therapy" },
    ];
  }

  get heardOptions() {
    return [
      { text: this.$t('interest_form.heard_google') as string, value: "Google" },
      { text: this.$t('interest_form.heard_social') as string, value: "Social Media" },
      { text: this.$t('interest_form.heard_friend') as string, value: "Friend" },
      { text: this.$t('interest_form.heard_other') as string, value: "Other" },
    ];
  }

  get scholarshipOptions() {
    return [
      { text: this.$t('interest_form.scholarship_stepup') as string, value: "Step Up" },
      { text: this.$t('interest_form.scholarship_fes_ua') as string, value: "FES UA" },
      { text: this.$t('interest_form.scholarship_ftc') as string, value: "FTC" },
      { text: this.$t('interest_form.scholarship_pec_hybrid') as string, value: "PEC HYBRID" },
      { text: this.$t('interest_form.scholarship_fes_eo') as string, value: "FES EO" },
      { text: this.$t('interest_form.scholarship_none') as string, value: "None" },
    ];
  }

  get startOptions() {
    return [
      { text: this.$t('interest_form.start_immediately') as string, value: "Immediately" },
      { text: this.$t('interest_form.start_next_month') as string, value: "Next Month" },
      { text: this.$t('interest_form.start_new_year') as string, value: "New School Year" },
    ];
  }

  get careOptions() {
    return [
      { text: this.$t('interest_form.care_before') as string, value: "Before School Care" },
      { text: this.$t('interest_form.care_after') as string, value: "After School Care" },
    ];
  }

  get therapyOptions() {
    return [
      { text: this.$t('interest_form.therapy_st') as string, value: "ST" },
      { text: this.$t('interest_form.therapy_ot') as string, value: "OT" },
      { text: this.$t('interest_form.therapy_aba') as string, value: "ABA" },
      { text: this.$t('interest_form.therapy_other') as string, value: "Other" },
    ];
  }

  get insuranceOptions() {
    return [
      { text: this.$t('interest_form.insurance_private') as string, value: "Private" },
      { text: this.$t('interest_form.insurance_medicaid') as string, value: "Medicaid" },
    ];
  }

  get emailValid(): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.form.parent_email.trim());
  }

  get fs() {
    if (!this.tried) {
      return {
        parent_name: null, parent_phone: null, parent_email: null,
        student_name: null, student_dob: null, student_age: null,
        student_grade: null,
        program_interest: null, heard_about: null, scholarships: null,
        start_when: null, therapies: null, insurance_type: null, insurance_details: null,
      } as Record<string, null | boolean>;
    }
    return {
      parent_name: this.form.parent_name.trim().length > 0,
      parent_phone: this.form.parent_phone.trim().length > 0,
      parent_email: this.emailValid,
      student_name: this.form.student_name.trim().length > 0,
      student_dob: this.form.student_dob.trim().length > 0,
      student_age: this.form.student_age.toString().trim().length > 0,
      student_grade: this.form.student_grade !== null,
      program_interest: this.form.program_interest.length > 0,
      heard_about: this.form.heard_about.length > 0,
      scholarships: this.form.scholarships.length > 0,
      start_when: this.form.start_when.length > 0,
      therapies: this.form.therapies.length > 0,
      insurance_type: this.form.insurance_type.length > 0,
      insurance_details: this.form.insurance_details.trim().length > 0,
    } as Record<string, boolean>;
  }

  get isValid(): boolean {
    const s = this.fs;
    return Object.values(s).every((v) => v === true);
  }

  async handleSubmit() {
    this.tried = true;
    if (!this.isValid) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    this.status = "sending";

    const heardLabel = this.form.heard_about === "Other" && this.form.heard_other
      ? `Other: ${this.form.heard_other}`
      : this.form.heard_about;

    const startLabel = this.form.start_when === "New School Year" && this.form.start_year_specify
      ? `New School Year: ${this.form.start_year_specify}`
      : this.form.start_when;

    const therapiesLabel = this.form.therapies
      .map((t) => t === "Other" && this.form.therapy_other ? `Other: ${this.form.therapy_other}` : t)
      .join(", ");

    const templateParams = {
      parent_name: this.form.parent_name.trim(),
      parent_phone: this.form.parent_phone.trim(),
      parent_email: this.form.parent_email.trim(),
      student_name: this.form.student_name.trim(),
      student_dob: this.form.student_dob,
      student_age: this.form.student_age.toString(),
      student_grade: this.form.student_grade || "",
      former_school: this.form.former_school.trim() || "(not provided)",
      program_interest: this.form.program_interest,
      heard_about: heardLabel,
      scholarships: this.form.scholarships.join(", "),
      start_date: startLabel,
      additional_care: this.form.care_services.join(", ") || "(none)",
      therapies: therapiesLabel,
      insurance_type: this.form.insurance_type,
      insurance_details: this.form.insurance_details.trim(),
      submitted_at: new Date().toLocaleString("en-US", {
        year: "numeric", month: "long", day: "numeric",
        hour: "numeric", minute: "2-digit",
      }),
    };

    try {
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: this.EMAILJS_PUBLIC_KEY }
      );
      this.status = "success";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("[InterestForm] EmailJS error:", err);
      this.status = "error";
    }
  }
}
</script>

<style scoped>
.interest-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.form-section {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}
.form-section:last-of-type {
  border-bottom: none;
}
.section-title {
  font-size: 1.25rem;
  color: #1089ff;
  margin-bottom: 1.25rem;
  font-weight: 600;
}
.interest-form ::v-deep .custom-control-inline {
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>