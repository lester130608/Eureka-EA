<template>
  <div class="apply-admissions">
    <div class="container">
      <div class="page-header">
        <p class="breadcrumbs">
          <router-link to="/">{{ $t('menu.Home') }}</router-link>
          <span class="mx-2">/</span>
          <router-link to="/admissions">{{ $t('menu.Admissions') }}</router-link>
          <span class="mx-2">/</span>
          <span>{{ $t('interest_form.page_title') }}</span>
        </p>
        <h1>{{ $t('interest_form.page_title') }}</h1>
        <p class="subtitle">{{ $t('interest_form.page_subtitle') }}</p>
      </div>

      <InterestForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InterestForm from "@/components/InterestForm.vue";

@Component({
  components: { InterestForm },
})
export default class ApplyAdmissions extends Vue {}
</script>

<style lang="scss" scoped>
.apply-admissions {
  background-color: #f8f9fa;
  padding: 2rem 0 4rem 0;
  min-height: calc(100vh - 200px);

  .page-header {
    text-align: center;
    margin-bottom: 2rem;

    .breadcrumbs {
      font-size: 0.9rem;
      color: #6c757d;
      margin-bottom: 0.5rem;

      a {
        color: #1089ff;
      }
    }

    h1 {
      font-size: 2rem;
      color: #1089ff;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .subtitle {
      font-size: 1rem;
      color: #495057;
      max-width: 700px;
      margin: 0 auto;
    }
  }
}

@media (max-width: 575px) {
  .apply-admissions {
    padding: 1rem 0 2rem 0;

    .page-header h1 {
      font-size: 1.5rem;
    }
  }
}
</style>