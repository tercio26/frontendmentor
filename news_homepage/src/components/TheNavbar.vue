<template>
  <nav :class="{open: sidebar}">
    <img class="logo" src="/images/logo.svg" alt="logo"/>

    <a class="navbar-toggle" @click.prevent="sidebar = true"></a>

    <div class="overlay" @click="sidebar = false"></div>
    <div class="navbar">
      <a class="navbar-toggle" @click.prevent="sidebar = false"></a>

      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">New</a>
        </li>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      sidebar: false
    }
  },

}
</script>

<style scoped>

</style>