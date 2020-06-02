<template>
  <footer class="footer has-background-dark">
    <div class="content has-text-centered">
      <ul id="social">
        <li>
          <a href="https://facebook.com/kevinjonathan3010" target="_blank">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/kevinjo30_" target="_blank">
            <i class="fab fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/kevinjo30_" target="_blank">
            <i class="fab fa-twitter-square"></i>
          </a>
        </li>
        <li>
          <a href="mailto:kevinjonathan3010@gmail.com" target="_blank">
            <i class="fas fa-envelope-square"></i>
          </a>
        </li>
      </ul>
      <hr />
      <a href="#">
        <i class="fas fa-level-up-alt"></i>
      </a>
      <p
        class="has-text-light"
      >&copy; {{ new Date().getFullYear() }} Kevin Jonathan | All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: white;
  transition: 0.3s ease;
}
a:hover {
  color: orange;
}
#social li {
  display: inline;
  list-style-type: none;
  font-size: 2rem;
  margin-right: 2rem;
  margin-left: 0rem;
  vertical-align: center;
}
</style>