<template>
  <div class="car-list">
    <div
      class="car-card"
      v-for="(eachCar, i) in carsInfo"
      :key="i"
    >
      <div class="car-image">
        <img
          :src="getImageUrl(eachCar.name, eachCar.mainImage)"
          alt=""
          class="car-img"
        />
      </div>
      <div class="car-details">
        <h4 class="car-title">{{ eachCar.name }} | {{ eachCar.model }}</h4>
        <p class="car-price">{{ eachCar.price }}</p>
        <RouterLink
          :to="{
            name: 'carInfo',
            params: { carName: eachCar.name, carField: eachCar.fileNumber }
          }"
          class="car-link"
        >
          More Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      carsInfo: this.$attrs.carsData
    }
  },
  methods: {
    getImageUrl (folderName, imageName) {
      const image = require.context('@/assets')
      return image('./' + folderName + '/' + imageName)
    }
  }
}
</script>

<style lang="scss" scoped>
.car-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.car-card {
  width: calc(33.33% - 20px); /* Mengatur agar ada 3 kartu per baris */
  margin: 10px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.car-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.car-image {
  text-align: center;
}

.car-img {
  width: 100%;
  height: auto;
  max-height: 200px;
}

.car-details {
  text-align: center;
}

.car-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 10px 0;
}

.car-price {
  font-size: 1rem;
}

.car-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
}

.car-link:hover {
  background-color: #0056b3;
}

/* Media queries untuk layar berukuran lebih kecil */
@media (max-width: 768px) {
  .car-card {
    width: calc(50% - 20px); /* Mengatur agar ada 2 kartu per baris */
  }
}

/* Media queries untuk layar berukuran lebih kecil lagi */
@media (max-width: 576px) {
  .car-card {
    width: 100%; /* Mengatur agar 1 kartu per baris */
  }
}
</style>
