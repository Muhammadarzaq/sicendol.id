<template>
  <div class="error-page">
    <ErrorPageDetails/> <!--   Menggunakan komponen ErrorPageDetails yang diimport  -->
  </div>
</template>

<script>
import ErrorPageDetails from '../components/errorPage/ErrorPage.vue'

export default {
  name: 'ErrorPageView',
  components: {
    ErrorPageDetails // Mendaftarkan komponen ErrorPageDetails
  }
}
</script>

<style lang="scss" scoped>
</style>
