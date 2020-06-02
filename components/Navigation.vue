<template>
  <nav
    class="navbar is-dark is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <strong id="brand" class="navbar-item">MAKE IT BLINK</strong>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu has-background-dark" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <nuxt-link class="navbar-item has-text-light" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item has-text-light" to="/#secondary">About Me</nuxt-link>
        <nuxt-link class="navbar-item has-text-light" to="/impossible-list">Impossible List</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
#brand {
  font-family: 'Chelsea Market', cursive;
}
.is-transparent {
  opacity: 0.85;
}
.navbar-menu.is-active {
  animation: navAnim 0.5s ease-in-out;
}

@keyframes navAnim {
  0% {
    display: none;
    opacity: 0;
    height: 0;
  }
  1% {
    display: block;
    opacity: 0;
    height: 50%;
  }
  100% {
    opacity: 1;
  }
}
.navbar-start nuxt-link,
.navbar-start a {
  transition: 0.1s linear;
}
.navbar-start nuxt-link:hover,
.navbar-start a:hover {
  border-top: 0.25rem solid orange;
  text-shadow: 0 0 1rem orange;
  color: orange;
}
</style>