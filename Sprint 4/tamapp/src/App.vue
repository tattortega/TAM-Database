<template>
  <v-app>
    <Header />
    <NavBar />

    <v-main> 
      <router-view/>
    </v-main>
    <Footer />

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',

  data: () => ({
      //
  }),
  components: {
    Header,
    NavBar,
    Footer,
  }
};
</script>
