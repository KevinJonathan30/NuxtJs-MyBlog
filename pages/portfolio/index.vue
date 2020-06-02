<template>
  <div>
    <Navigation />
    <section class="hero is-dark is-fullheight" id="header">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Hi, I'm Kevin Jonathan</h1>
          <h2 class="subtitle">This Is My Portfolio</h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <a href="#info" class="has-text-light" id="#scrollDown">
            <i class="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-bold is-large" id="info">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <h2 class="subtitle">
                <b>Hi There! I'm Kevin Jonathan</b>
              </h2>
              <p>I am a web designer from Surabaya, Indonesia. I create beautiful websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs.</p>
              <br />
              <div class="columns is-gapless">
                <div class="column">
                  <p>
                    <i class="fas fa-envelope"></i>&nbsp;
                    <strong class="has-text-light">Email :</strong>&nbsp;kevinjonathan3010@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-briefcase"></i>&nbsp;
                    <strong class="has-text-light">Occupation :</strong>&nbsp;Student
                  </p>
                </div>
                <div class="column">
                  <p>
                    <i class="fas fa-calendar-day"></i>&nbsp;
                    <strong class="has-text-light">Date of Birth :</strong>&nbsp;30 October 1999
                  </p>
                  <p>
                    <i class="fas fa-phone-square-alt"></i>&nbsp;
                    <strong class="has-text-light">Phone :</strong>&nbsp;+6281358443040
                  </p>
                </div>
              </div>
            </div>
            <div class="column is-1"></div>
            <div class="column is-5">
              <p>HTML5, CSS3</p>
              <progress class="progress is-small is-warning" value="95" max="100">95%</progress>
              <p>Adobe Photoshop</p>
              <progress class="progress is-small is-warning" value="75" max="100">75%</progress>
              <p>PHP & MySQL</p>
              <progress class="progress is-small is-warning" value="80" max="100">80%</progress>
              <p>WordPress</p>
              <progress class="progress is-small is-warning" value="90" max="100">90%</progress>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-medium" id="services">
      <div class="hero-head">
        <h1
          class="title has-text-centered"
          style="padding-top: 3rem; text-decoration: underline"
        >My Services</h1>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns has-text-centered" id="service">
            <div class="column is-gapless">
              <i class="fab fa-html5"></i>
              <br />
              <br />
              <h2 class="subtitle">WEB DEVELOPMENT</h2>
            </div>
            <div class="column">
              <i class="fas fa-laptop"></i>
              <br />
              <br />
              <h2 class="subtitle">WEBSITE DESIGN</h2>
            </div>
            <div class="column">
              <i class="far fa-image"></i>
              <br />
              <br />
              <h2 class="subtitle">GRAPHIC DESIGN</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-bold is-large" id="portfolio">
      <div class="hero-head">
        <h1
          class="title has-text-centered"
          style="padding-top: 3rem; text-decoration: underline"
        >My Portfolio</h1>
      </div>
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle has-text-centered">Contents Coming Soon</h2>
        </div>
      </div>
    </section>
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
  }
}
</script>

<style scoped>
#header {
  background: url('~assets/images/portfolio.jpg');
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
.fa-html5,
.fa-laptop,
.fa-image {
  font-size: 3rem;
}
#services {
  background: rgb(32,32,32);
  background: linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(27,27,27,1) 100%);
}

#service .column {
  border-left: 1px solid whitesmoke;
  border-right: 1px solid whitesmoke;
}

#portfolio {
  background: #1b1b1b;
}
</style>