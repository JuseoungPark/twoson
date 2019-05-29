<template>
  <v-app>
    <Header />
    <Contact />

    <v-content>
      <router-view/>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Contact,
    Footer,
  },

  data () {
    return {
      //
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .inner {
    display: flex;
    width: 92%;
    margin: 0 auto;
    justify-content: space-between;
  }
  body {
    line-height: 1;
  }
  .txt-white {
    color: #fff;
  }
  .layoutTitle {
    font-size: 24px;
    text-transform: uppercase;
    color: #313034;
  }
  .layoutSubTxt {
    color: #929292;
    font-size: 16px;
    text-transform: capitalize;
  }
  p {
    margin: 0;
  }
  .taL {
    text-align: left ! important;
  }
  html, body, button {
    box-sizing: border-box;
  }
  .w-100 {
    width: 100% !important;
  }
  .v-content {
    padding: 0 !important;
  }
  .hide {
    opacity: 0;
    text-indent: -9999px;
		font-size: 0;
    display: none;
  }
</style>

