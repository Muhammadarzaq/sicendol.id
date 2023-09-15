<template>
  <div class="justify-content-evenly row">
    <div class="col-8">
      <div>
        <img
          :src="mainImageUrl"
          class="rounded mx-auto d-block mainImage"
        >
      </div>
      <div class="d-flex justify-content-center">
        <img
          v-for="(eachCarImage, x) in getCarInfoComputed.images"
          :key="x"
          :src="getImageUrl(getCarInfoComputed.name, eachCarImage)"
          alt=""
          class="rounded mx-2 thumbnailImage"
          @click="updateMainImage(eachCarImage)"
        >
      </div>
    </div>
    <div class="col-4">
      <div class="card shadow">
        <div class="card-body">
          <h2 class="card-title text-primary">{{ getCarInfoComputed.name }} | {{ getCarInfoComputed.model }}</h2>
          <p class="card-text">Year: {{ getCarInfoComputed.year }}</p>
          <p class="card-text">File Number: {{ getCarInfoComputed.fileNumber }}</p>
          <p class="card-text">{{ getCarInfoComputed.description }}</p>
          <p class="card-text">Uploaded On: {{ getCarInfoComputed.uploadedOn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCarInfo from '@/json/cars.json'
// import { ref } from 'vue'

export default {
  name: 'carInfo',
  data () {
    return {
      myCarDetails: getCarInfo,
      carName: null,
      carField: null,
      mainImageUrl: ''
      // ref
    }
  },
  methods: {
    getImageUrl (folderName, imageName) {
      if (imageName === 0) {
        this.$router.push({ name: 'Home' })
      }
      const image = require.context('@/assets')
      return image('./' + folderName + '/' + imageName)
    },
    updateMainImage (eachCarImage) {
      if (this.getCarInfoComputed.images.includes(eachCarImage)) {
        this.mainImageUrl = this.getImageUrl(this.getCarInfoComputed.name, eachCarImage)
      } else {
        console.error('gambar tidak dapat muncul.')
      }
    }
  },
  computed: {
    getCarInfoComputed () {
      const carData = this.myCarDetails.find(car => car.fileNumber === parseInt(this.carField))
      return carData || {}
    }
  },
  mounted () {
    this.carName = this.$route.params.carName
    this.carField = this.$route.params.carField
    this.mainImageUrl = this.getImageUrl(this.carName, (this.getCarInfoComputed.mainImage || 0))
    if (!this.mainImageUrl) {
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.mainImage {
  width: 650px;
  height: 450px;
  border: 10px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.thumbnailImage {
  width: 100px;
  border: 5px solid #fff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.thumbnailImage:hover {
  transform: scale(1.1);
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.card-text {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}
</style>
