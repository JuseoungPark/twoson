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
  #app {
     font-family:'Lato', 'Noto Sans KR', sans-serif; /* this was it */
     background:url(./assets/bg-noise.jpg) 0 0 repeat
  }
  html {
    min-width: 1410px;
    overflow-x:auto;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .inner {
    display: flex;
    width: 100%;
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
    color: #333;
    font-size: 16px;
    text-transform: capitalize;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
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
  .btn-ghost {
    border: 1px solid #000;
    padding: 13px 28px;
    font-weight: bold;
    font-size: 21px;
  }
  a.btn-ghost {
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
  }
</style>

