<template>
  <nav class="navbar navbar-expand-lg navbar-light p-1">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home', params: { pageTitle: 'Main' } }">
        <img class="navbar-logo" src="https://sicendol.id/img/logo.42bd9ae3.png" alt="Sicendol Logo">
        <span class="navbar-text">sicendol.id</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link d-none" :to="{ name: 'Home', params: { pageTitle: 'Main' } }" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Beranda', params: { pageTitle: 'Beranda' } }" exact>Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Produk', params: { pageTitle: 'Produk' } }" exact>Produk</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              :to="{ name: 'Privacy', params: { pageTitle: 'Kebijakan Privasi' } }" exact>Kebijakan & Privasi</router-link>
          </li>
        </ul>
      </div>
      <router-link class="navbar-brand" :to="{ name: 'Home', params: { pageTitle: 'Main' } }">
        <button type="button" class="btn btn-outline-primary">Kontak Kami</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');

.nav-item{
  margin: auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000; /* Ubah warna teks sesuai keinginan Anda */
}

.navbar-logo {
  width: 25px; /* Lebar logo */
  height: 32px; /* Tinggi logo */
  margin-right: 8px; /* Jarak antara logo dan teks */
}

.navbar-text {
  font-size: 20px; /* Ukuran teks */
  font-weight: bold; /* Ketebalan teks */
  /* Gaya lainnya sesuai preferensi Anda */
}

.navbar {
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  transition: box-shadow 0.3s ease-in-out;
}

.nav-link {
  font-family: 'Nunito', sans-serif;
  color: #424242;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  margin: 0 10px; // Menambahkan margin antara menu
  border-bottom: 2px solid transparent;

  &:hover {// Warna latar belakang saat hover
    color: #007BFF; // Warna teks saat hover
    border-bottom-color: #007BFF; // Warna border bottom saat hover
  }

  &.active {
    background-color: #007BFF !important; // Warna latar belakang tetap saat aktif
    color: #fff !important; // Warna teks tetap saat aktif
    border-bottom-color: #fff !important; // Warna border bottom tetap saat aktif
  }
}
</style>
