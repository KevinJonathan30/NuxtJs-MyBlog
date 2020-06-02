<template>
  <div>
    <section class="hero is-dark is-fullheight" id="error">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="error404">404</h1>
          <h1 class="title">This page cannot be found</h1>
          <h2
            class="subtitle"
            id="description"
          >Perhaps it went somewhere far away beyond our reach...</h2>
          <br />
          <h3 class="title">
            <a href="/">Back to HOME »</a>
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
#error404 {
  font-size: 10rem;
  color: orange;
  font-family: 'Montserrat Subrayada', sans-serif;
}
#error {
  background-position: top;
}
h3 a {
  color: #a9a9a9;
}
h3 a:hover {
  color: white;
}
#description {
  color: #8c93a3;
}
</style>
