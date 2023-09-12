<template>
  <div class="sidebar" :class="{ open: isSidebarOpen }">
    <button class="hamburger-button" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="sidebar-menu">
      <li class="sidebar-item">
        <router-link :to="{ name: 'Home' }" class="sidebar-link">
          <i class="fas fa-home"></i>
          <span class="menu-text">Honda</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link :to="{ name: '' }" class="sidebar-link">
          <i class="fas fa-th"></i>
          <span class="menu-text">Toyota</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link :to="{ name: '' }" class="sidebar-link">
          <i class="fas fa-info-circle"></i>
          <span class="menu-text">Mercedes</span>
        </router-link>
      </li>
      <li class="sidebar-item">
        <router-link :to="{ name: '' }" class="sidebar-link">
          <i class="fas fa-envelope"></i>
          <span class="menu-text">Lambo</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarPage',
  data () {
    return {
      isSidebarOpen: true // Mulai dengan sidebar terbuka
    }
  },
  methods: {
    toggleSidebar () {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
}
</script>

  <style lang="scss" scoped>
    .sidebar {
    background-color: white; /* Warna latar belakang sidebar */
    color: #424242;
    overflow-y: auto;
    transition: width 0.3s;
    padding-top: 20px;
  }

  .sidebar-menu {
    padding: 0;
    list-style: none;
  }

  .sidebar-item {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 10px;
    border-left: 4px solid transparent;
    margin-bottom: 10px; /* Jarak antar item */
  }

  .sidebar-item:hover {
    background-color:  #ECEFF1; /* Warna latar belakang saat dihover */
    border-left-color: #007BFF; /* Warna border saat dihover */
  }

  .sidebar-link {
    text-decoration: none;
    color: #424242;/* Warna teks */
    margin-left: 15px;
    font-size: 18px; /* Ukuran font teks */
  }

  .sidebar-link i {
    width: 24px;
    text-align: center;
    font-size: 20px; /* Ukuran ikon */
  }

  .menu-text {
    flex: 1; /* Membuat teks menu fleksibel untuk mengisi ruang tersedia */
  }

  .hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #424242;
  margin: 10px;
  display: none; /* Sembunyikan tombol pada tampilan awal */
}

@media (max-width: 768px) {
  /* Tampilkan tombol hamburger saat resolusi kurang dari atau sama dengan 768px (contoh: iPad) */
  .hamburger-button {
    display: block;
  }

  /* Sembunyikan sidebar saat tombol hamburger ditekan */
  .sidebar {
    display: none;
  }

  /* Tampilkan sidebar saat sidebar terbuka */
  .sidebar.open {
    display: block;
  }
}

  </style>
