<template>
  <div class="home row">
    <div class="col-2">
      <SidebarPage />
    </div>
    <div class="col-10">
      <Cars :carsData="myCars" />
    </div>
  </div>
</template>

<script>
import SidebarPage from '../components/sidebar/SidebarPage.vue'
import Cars from '../components/cars/CarsPage.vue'
import getCarsJson from '@/json/cars.json'
export default {
  name: 'HomeView',
  data () {
    return {
      myCars: getCarsJson
    }
  },
  components: {
    SidebarPage,
    Cars
  }
}
</script>
