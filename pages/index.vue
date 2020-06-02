<template>
  <div>
    <Navigation />
    <section class="hero is-dark is-bold is-fullheight" id="header">
      <div class="hero-body">
        <div class="container has-text-right">
          <h1 class="title">Welcome to my world!</h1>
          <h2 class="subtitle wow fadeInUp animated">Kevin Jonathan's stuffs here.</h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <a href="#secondary" class="has-text-light" id="#scrollDown">
            <i class="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="hero is-light is-bold is-fullheight" id="secondary">
      <div class="blurred-background"></div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column" id="mainColumn-1"></div>
            <div class="column" id="mainColumn-2">
              <h2 class="subtitle has-text-light" id="banner-info">
                My name is Kevin Jonathan. I'm a student in the Faculty of Industrial Technology at Petra Christian University.
                <br />
                <br />I can say that I am a responsible and a hard-working student. Moreover, being a sociable person, I have many friends since I like to communicate with people and get to know new interesting individuals.
                <br />Recently, I got interested in writing and reading articles.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a href="http://kevinjonathan.dx.am">
      <section class="hero is-light is-medium is-bold" id="heroBlog">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">My Blog</h1>
          </div>
        </div>
      </section>
    </a>
    <nuxt-link to="/portfolio">
      <section class="hero is-dark is-medium is-bold" id="heroResume">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">My Portfolio</h1>
          </div>
        </div>
      </section>
    </nuxt-link>
    <nuxt-link to="/contact">
      <section class="hero is-dark is-medium is-bold" id="heroContact">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">Contact Me</h1>
          </div>
        </div>
      </section>
    </nuxt-link>
    <Footer />
  </div>
</template>
<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
}
</script>

<style scoped>
#header h1 {
  border-right: 0.15em solid orange;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.fa-angle-double-down {
  animation: fading 0.6s alternate ease-in-out infinite;
}

@keyframes fading {
  0% {
    -webkit-transform: translateY(-0.4rem);
    opacity: 0.4;
  }
  100% {
    -webkit-transform: translateY(0);
    opacity: 1;
  }
}

#header {
  background-image: url('~assets/images/book_garland_light_134006_1920x1080.jpg');
  background-position: top;
}
@media only screen and (max-device-width: 1366px) {
  .hero .blurred-background {
    background-attachment: scroll;
  }
  #mainColumn-1 {
    display: none;
  }
  #heroBlog {
    background: url('~assets/images/starting-a-blog-in-2019-1024x683.jpg')
      no-repeat;
    background-size: cover;
    background-position: top;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  #header h1 {
    border-right: none;
    animation: none;
  }
  #banner-info {
    line-height: 2rem !important;
    font-size: 1.15rem !important;
  }
}
#banner-info {
  line-height: 3rem;
  font-size: 1.25rem;
}
.hero .blurred-background {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('~assets/images/124383.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}
.columns {
  z-index: 2;
}

#mainColumn-1 {
  background: url('~assets/images/BH_6x8Album_AllAboutMe_FEATURED_1024x1024.jpg?v=1574662552');
  background-position: center;
}

#mainColumn-2 {
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 0.5rem solid orange;
}

#heroBlog {
  background: url('~assets/images/starting-a-blog-in-2019-1024x683.jpg')
    no-repeat;
  background-size: cover;
  transition: 0.3s ease;
}

#heroResume {
  background: url('~assets/images/9d4d07ca7d591bb3cd3d9f4df2624bbf.jpg')
    no-repeat;
  background-size: cover;
  background-position: bottom;
  transition: 0.3s ease;
}

#heroPortfolio {
  background: url('~assets/images/304479.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
  transition: 0.3s ease;
}

#heroContact {
  background: url('~assets/images/contact-background.png') no-repeat;
  background-position: bottom;
  background-size: cover;
  transition: 0.3s ease;
}
#heroBlog:hover,
#heroResume:hover,
#heroPortfolio:hover,
#heroContact:hover {
  box-shadow: inset 0px 0px 0px 0.5rem rgba(255, 255, 255, 0.5);
}
#heroBlog:hover:after,
#heroResume:hover:after,
#heroPortfolio:hover:after,
#heroContact:hover:after {
  box-shadow: none;
  transition: box-shadow 0.3s ease-out;
}
</style>
