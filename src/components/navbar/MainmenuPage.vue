<template>
  <div>
    <ul class="nav mb-auto">
      <router-link tag="li" :to="{ name: 'Home', params: { pageTitle: 'Main' } }" exact>
        <a>Home</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'Categories', params: { pageTitle: 'categories' } }">
        <a>Categories</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'About', params: { pageTitle: 'about' } }">
        <a>About</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'Contact', params: { pageTitle: 'contact' } }">
        <a> Contact</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped lang="scss">.nav {
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: white;
  color: #424242;
  padding: 1rem 0;

  li {
    margin: 0;
    padding: 0;

    a {
      display: block;
      padding: 1rem 2rem;
      text-decoration: none;
      text-align: center;
      color: #424242;
      font-weight: bold;
      transition: background-color 0.3s, color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
      border: 2px solid transparent;
      border-radius: 3px;

      &:hover {
        border-bottom: 3px solid #007BFF;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-bottom 0.3s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(-3px);
        color: #007BFF;
      }
    }

    &.router-link-exact-active {
      a {
        font-weight: bold;
        color: #007BFF;
        border-bottom: 3px solid #007BFF;
      }
    }
  }
}

</style>
