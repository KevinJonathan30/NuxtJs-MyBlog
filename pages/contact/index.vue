<template>
  <div>
    <Navigation />
    <section class="hero is-dark is-bold is-fullheight" id="body">
      <div class="hero-body">
        <div class="container" id="background">
          <h1 class="title has-text-light">Contact Me</h1>
          <h2
            class="subtitle has-text-light"
          >Hi there, Feel free to contact me by filling the form below!</h2>
          <form action="https://formspree.io/mzbjbaba" method="POST">
            <div class="field">
              <label class="label has-text-light">Name</label>
              <div class="control has-icons-left">
                <input class="input is-warning" type="text" placeholder="Name" name="name" required />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input is-warning"
                  type="email"
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="_replyto"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label has-text-light">Message</label>
              <div class="control">
                <textarea
                  class="textarea is-warning"
                  maxlength="6000"
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <br />

            <div class="field">
              <div class="control">
                <button class="button is-warning" type="submit">
                  <strong>Submit</strong>
                </button>
              </div>
            </div>
          </form>
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
#background {
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: rgba(17, 17, 17, 0.75);
  padding: 2rem;
  border-top: 0.5rem solid orange;
}
#body {
  background: url('~assets/images/contact-background.png') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
