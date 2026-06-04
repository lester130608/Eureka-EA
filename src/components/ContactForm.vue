<template>
  <div class="admissions-form">
    <div v-if="status !== 'success'">
      <h3 class="mb-2">{{ $t('contact_form.title') }}</h3>
      <p class="text-muted mb-4">{{ $t('contact_form.subtitle') }}</p>

      <b-form @submit.prevent="handleSubmit" novalidate>
        <b-form-group
          :label="$t('contact_form.name_label')"
          label-for="af-name"
          :invalid-feedback="$t('contact_form.required_field')"
          :state="fieldStates.name"
        >
          <b-form-input
            id="af-name"
            v-model="form.name"
            :placeholder="$t('contact_form.name_placeholder')"
            :state="fieldStates.name"
            :disabled="status === 'sending'"
            required
          />
        </b-form-group>

        <b-form-group
          :label="$t('contact_form.email_label')"
          label-for="af-email"
          :invalid-feedback="emailFeedback"
          :state="fieldStates.email"
        >
          <b-form-input
            id="af-email"
            type="email"
            v-model="form.email"
            :placeholder="$t('contact_form.email_placeholder')"
            :state="fieldStates.email"
            :disabled="status === 'sending'"
            required
          />
        </b-form-group>

        <b-form-group
          :label="$t('contact_form.phone_label')"
          label-for="af-phone"
          :invalid-feedback="$t('contact_form.required_field')"
          :state="fieldStates.phone"
        >
          <b-form-input
            id="af-phone"
            type="tel"
            v-model="form.phone"
            :placeholder="$t('contact_form.phone_placeholder')"
            :state="fieldStates.phone"
            :disabled="status === 'sending'"
            required
          />
        </b-form-group>

        <b-form-group
          :label="$t('contact_form.interest_label')"
          label-for="af-interest"
          :invalid-feedback="$t('contact_form.required_field')"
          :state="fieldStates.interest"
        >
          <b-form-select
            id="af-interest"
            v-model="form.interest"
            :options="interestOptions"
            :state="fieldStates.interest"
            :disabled="status === 'sending'"
            required
          >
            <template #first>
              <b-form-select-option :value="null" disabled>
                {{ $t('contact_form.interest_placeholder') }}
              </b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group
          :label="$t('contact_form.message_label')"
          label-for="af-message"
        >
          <b-form-textarea
            id="af-message"
            v-model="form.message"
            :placeholder="$t('contact_form.message_placeholder')"
            :disabled="status === 'sending'"
            rows="4"
            max-rows="8"
          />
        </b-form-group>

        <b-alert :show="status === 'error'" variant="danger" class="mt-3">
          <strong>{{ $t('contact_form.error_title') }}</strong><br />
          {{ $t('contact_form.error_message') }}
        </b-alert>

        <b-button
          type="submit"
          variant="primary"
          block
          :disabled="status === 'sending'"
        >
          {{ status === 'sending'
            ? $t('contact_form.submitting')
            : $t('contact_form.submit') }}
        </b-button>
      </b-form>
    </div>

    <b-alert :show="status === 'success'" variant="success" class="mt-3">
      <h4 class="alert-heading">{{ $t('contact_form.success_title') }}</h4>
      <p class="mb-0">{{ $t('contact_form.success_message') }}</p>
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

@Component
export default class ContactForm extends Vue {
  form = {
    name: "",
    email: "",
    phone: "",
    interest: null as string | null,
    message: "",
  };

  status: Status = "idle";
  triedSubmit = false;

  // EmailJS credentials
  private readonly EMAILJS_SERVICE_ID = "service_6econ5r";
  private readonly EMAILJS_TEMPLATE_ID = "template_mv8mtpa";
  private readonly EMAILJS_PUBLIC_KEY = "QvcnQenEgsjwkKlHV";

  get interestOptions() {
    const opts = this.$t(
      "contact_form.interest_options"
    ) as unknown as Record<string, string>;
    return [
      { value: "admissions", text: opts.admissions },
      { value: "general", text: opts.general },
      { value: "tuition", text: opts.tuition },
      { value: "scholarships", text: opts.scholarships },
      { value: "therapy", text: opts.therapy },
      { value: "other", text: opts.other },
    ];
  }

  get emailValid(): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.form.email.trim());
  }

  get emailFeedback(): string {
    if (!this.form.email.trim()) {
      return this.$t("contact_form.required_field") as string;
    }
    return this.$t("contact_form.invalid_email") as string;
  }

  get fieldStates() {
    if (!this.triedSubmit) {
      return {
        name: null as null | boolean,
        email: null as null | boolean,
        phone: null as null | boolean,
        interest: null as null | boolean,
      };
    }
    return {
      name: this.form.name.trim().length > 0,
      email: this.emailValid,
      phone: this.form.phone.trim().length > 0,
      interest: this.form.interest !== null,
    };
  }

  get isFormValid(): boolean {
    return (
      this.form.name.trim().length > 0 &&
      this.emailValid &&
      this.form.phone.trim().length > 0 &&
      this.form.interest !== null
    );
  }

  async handleSubmit() {
    this.triedSubmit = true;
    if (!this.isFormValid) return;

    this.status = "sending";

    // Etiqueta legible del interest (en el idioma actual)
    const opts = this.$t(
      "contact_form.interest_options"
    ) as unknown as Record<string, string>;
    const interestLabel =
      (this.form.interest && opts[this.form.interest]) || this.form.interest;

    const templateParams = {
      from_name: this.form.name.trim(),
      from_email: this.form.email.trim(),
      from_phone: this.form.phone.trim(),
      interest: interestLabel,
      message: this.form.message.trim() || "(no message)",
      submitted_at: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
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
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[ContactForm] EmailJS error:", err);
      this.status = "error";
    }
  }
}
</script>

<style scoped>
.admissions-form {
  max-width: 560px;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
</style>
