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
            v-for="(eachCarImage, x) in getCarInfo.images"
            :src="getImageUrl(getCarInfo.name, eachCarImage)"
            :key="x"
            @click="updateMainImage(eachCarImage)"
            alt=""
            class="rounded mx-2 thumbnailImage"
          >
        </div>
      </div>
      <div class="col-4">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title text-primary">{{ getCarInfo.name }} | {{ getCarInfo.model }}</h2>
            <p class="card-text">Year: {{ getCarInfo.year }}</p>
            <p class="card-text">File Number: {{ getCarInfo.fileNumber }}</p>
            <p class="card-text">{{ getCarInfo.description }}</p>
            <p class="card-text">Uploaded On: {{ getCarInfo.uploadedOn }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import getCarInfo from '@/json/cars.json'
import { ref } from 'vue'

export default {
  name: 'carInfo',
  data () {
    return {
      myCarDetails: getCarInfo,
      carName: this.$route.params.carName,
      carField: this.$route.params.carField,
      mainImageUrl: '',
      ref
    }
  },
  methods: {
    getImageUrl (folderName, imageName) {
      const image = require.context('@/assets')
      return image('./' + folderName + '/' + imageName)
    },
    updateMainImage (eachCarImage) {
      if (this.getCarInfo.images.includes(eachCarImage)) {
        this.mainImageUrl = this.getImageUrl(this.getCarInfo.name, eachCarImage)
      } else {
        console.error('gambar tidak dapat muncul.')
      }
    }
  },
  computed: {
    getCarInfo () {
      const carData = this.myCarDetails.find(car => car.fileNumber === this.carField)
      return carData || {}
    }
  },
  created () {
    // Initialize mainImageUrl when the component is created
    this.mainImageUrl = this.getImageUrl(this.getCarInfo.name, this.getCarInfo.mainImage)
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
