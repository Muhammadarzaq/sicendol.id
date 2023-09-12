<template>
  <div class="error-page-details text-center">
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ErrorpageDetails',
  mounted () { // mounted() adalah yang pertamakali di jalankan
    Swal.fire({
      title: 'Maaf!',
      text: 'Halaman Tidak Dapat Di Muat',
      imageUrl: require('@/assets/error.svg'),
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image'
    }).then(() => {
      this.$router.push({ name: 'Home' })
    })
  }
}
</script>

<style scoped lang="scss">
.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 50%;
  max-height: 50%;
}

</style>
