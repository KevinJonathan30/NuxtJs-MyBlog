<template>
  <div>
    <Navigation />
    <section class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title text1">RESUME</h1>
          <nav class="breadcrumb text2 is-centered" aria-label="breadcrumbs">
            <ul>
              <li>
                <nuxt-link to="/" class="has-text-light">HOME</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/resume" class="has-text-light">RESUME</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container has-text-centered">
          <a href="#about" class="has-text-light" id="#scrollDown">
            <i class="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-fullheight" id="about">
      <div class="hero-body">
        <div class="container wow backInUp animated" data-wow-delay="1s">
          <h2 class="subtitle">
            <u>ABOUT ME</u>
          </h2>
          <br />
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img class="is-rounded" src="~assets/images/profile.jpg" />
              </p>
            </figure>
            <br />
            <div class="media-content">
              <div class="content">
                <p class="has-text-grey-light" id="description">
                  My name is Kevin Jonathan. I'm a student in the Faculty of Industrial Technology at Petra Christian University.
                  I can say that I am a responsible and a hard-working student. Moreover, being a sociable person, I have many friends since I like to communicate with people and get to know new interesting individuals.
                  Recently, I got interested in writing and reading articles.
                </p>
                <br />
                <div
                  class="columns is-gapless has-text-grey-light"
                  style="font-family: 'Courier New', Courier, monospace; line-height: 2rem"
                >
                  <div class="column">
                    <span class="identity">Name:</span> Kevin Jonathan
                    <br />
                    <span class="identity">Citizenship:</span> Indonesia
                  </div>
                  <div class="column">
                    <span class="identity">Age:</span> 20
                    <br />
                    <span class="identity">Website:</span> kevinjonathan117.github.io
                  </div>
                  <div class="column">
                    <span class="identity">Occupation:</span> Student
                    <br />
                    <span class="identity">E-mail:</span> kevinjonathan3010@gmail.com
                  </div>
                </div>
                <div class="control">
                  <button class="button is-warning">
                    <strong>Download CV</strong>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-fullheight" id="experienceEducation">
      <div class="hero-body">
        <div class="container">
          <div class="columns has-text-grey-light" style="line-height: 2rem">
            <div class="column wow lightSpeedInLeft animated" data-wow-delay="1s" data-wow-duration="2s">
              <h2 class="subtitle">
                <u>EXPERIENCE</u>
              </h2>
              <div style="font-family: 'Courier New', Courier, monospace;">
                <ul>
                  <li>
                    <p class="has-text-warning">January 2020 - Present</p>
                    <p>
                      <strong class="has-text-light">Teaching Assistant - Seven7h Edu Course</strong>
                    </p>
                  </li>
                  <li>
                    <p class="has-text-warning">July 2018 - Present</p>
                    <p>
                      <strong class="has-text-light">IT Department - Student Press GENTA</strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="column wow lightSpeedInRight animated" data-wow-delay="1s" data-wow-duration="2s">
              <h2 class="subtitle">
                <u>EDUCATION</u>
              </h2>
              <div style="font-family: 'Courier New', Courier, monospace;">
                <ul>
                  <li>
                    <p class="has-text-warning">July 2018 - Present</p>
                    <p>
                      <strong class="has-text-light">Petra Christian University</strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-fullheight" id="designLanguage">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            <u>DESIGN SKILLS</u>
          </h2>
          <p>Web Design</p>
          <progress class="progress is-small is-warning wow slideInLeft animated" data-wow-delay="0.25s" value="90" max="100">90%</progress>
          <p>Illustrations</p>
          <progress class="progress is-small is-warning wow slideInRight animated" data-wow-delay="0.25s" value="55" max="100">55%</progress>
          <p>Photoshop</p>
          <progress class="progress is-small is-warning wow slideInLeft animated" data-wow-delay="0.25s" value="75" max="100">75%</progress>
          <p>Graphic Design</p>
          <progress class="progress is-small is-warning wow slideInRight animated" data-wow-delay="0.25s" value="70" max="100">70%</progress>
          <br />
          <h2 class="subtitle">
            <u>LANGUAGES SKILLS</u>
          </h2>
          <div class="columns">
            <div class="column">
              <p>Indonesian</p>
              <progress class="progress is-small is-success wow bounceInLeft animated" data-wow-delay="0.25s" value="90" max="100">90%</progress>
              <p>English</p>
              <progress class="progress is-small is-primary wow bounceInRight animated" data-wow-delay="0.25s" value="85" max="100">85%</progress>
            </div>
            <div class="column">
              <p>Japanese</p>
              <progress class="progress is-small is-info wow bounceInLeft animated" data-wow-delay="0.25s" value="45" max="100">45%</progress>
              <p>Chinese</p>
              <progress class="progress is-small is-danger wow bounceInRight animated" data-wow-delay="0.25s" value="20" max="100">20%</progress>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark is-fullheight" id="designLanguage">
      <div class="hero-body">
        <div class="container wow flipInY animated" data-wow-delay="0.25s">
          <h2 class="subtitle">
            <u>CODING SKILLS</u>
          </h2>
          <p>WordPress</p>
          <progress class="progress is-small is-info" value="90" max="100">90%</progress>
          <p>PHP / MYSQL</p>
          <progress class="progress is-small is-warning" value="70" max="100">70%</progress>
          <p>Nuxt.js / JavaScript</p>
          <progress class="progress is-small is-warning" value="65" max="100">65%</progress>
          <p>HTML / CSS</p>
          <progress class="progress is-small is-success" value="95" max="100">95%</progress>
          <br />
          <h2 class="subtitle">
            <u>INTERPERSONAL SKILLS</u>
          </h2>
          <div class="columns is-gapless">
            <div class="column">
              <ul>
                <li>
                  <i class="fa fa-check"></i> Creativity
                </li>
                <li>
                  <i class="fa fa-check"></i> Team Leadership Skills
                </li>
                <li>
                  <i class="fa fa-check"></i> Communication Skills
                </li>
              </ul>
            </div>
            <div class="column">
              <ul>
                <li>
                  <i class="fa fa-check"></i> Multitasking
                </li>
                <li>
                  <i class="fa fa-check"></i> Time Management
                </li>
                <li>
                  <i class="fa fa-check"></i> Conflict Management
                </li>
              </ul>
            </div>
          </div>
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
  }, 
}
</script>

<style scoped>
.text1 {
  color: white;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 20px;
  background: #363636;
  position: relative;
  animation: text 3s 1;
}
.text2 {
  font-size: 1rem;
}

@media (min-width: 320px) and (max-width: 480px) {
  .text1 {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 8px;
    margin-bottom: 20px;
    background: #363636;
    position: relative;
    animation: text 3s 1;
  }
  .media-left {
    display: none;
  }
}
#description {
  font-family: 'Courier New', Courier, monospace;
}

.is-dark {
  background: #363636;
}

.identity {
  color: orange !important;
}

@keyframes text {
  0% {
    color: orange;
    margin-bottom: -40px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}

#experienceEducation li:before {
  background-color: orange;
  color: orange;
  width: 0.1rem;
  content: '🡢';
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0.5rem;
}

#experienceEducation li {
  position: relative;
  margin: 0;
  padding-bottom: 1em;
  padding-left: 1.75rem;
}

#experienceEducation .has-text-warning {
  color: orange !important;
  text-decoration: underline;
}
#designLanguage p {
  line-height: 2rem;
}

a:hover,
nuxt-link:hover {
  color: orange !important;
}
</style>