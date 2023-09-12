<template>
    <div class="justify-content-evenly row">
        <div class="col-lg-4 col-md-6 col-12 each-car mx-auto" v-for="(eachCar, i) in carsInfo" :key="i">
            <img :src="getImageUrl(eachCar.name, eachCar.mainImage)" alt="" class="rounded d-block mx-auto">
            <h4 class="text-center">{{ eachCar.name }} | {{ eachCar.model }}</h4>
            <div>
                <div class="float-start"><button type="button" class="btn btn-light"> {{ eachCar.price }}</button></div>
                <div class="float-end ml-2">
                    <RouterLink :to="{ name: 'About' }">
                        <button type="button" class="btn btn-primary">More Details</button>
                    </RouterLink>
                </div>
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
.each-car{
    padding: 10px;
    margin-bottom: 10px;
    border: 10px solid #eee;
    img{
        width: 250px;
        height: 200px;
        margin-bottom: 10px;
    }
}
</style>
