<template>
  <v-app id="app" >
    <v-app-bar
      app
      color="surface lighten-1"
      elevate-on-scroll
      v-scroll="onScroll"
    >
        <v-chip
        v-for="social in mainSocials" :key="social.icon"
        class="ma-2"
        :class="{rubberBand: isOnTop}"
        color="primary"
        @click="openLink(social.icon)"
        text-color="white">
          <v-icon >mdi-{{social.icon}}</v-icon>
        </v-chip>
      <v-spacer></v-spacer>
        <v-checkbox class="pt-3"
        v-model="$vuetify.theme.dark"
        off-icon="mdi-moon-waning-crescent"
        on-icon="mdi-white-balance-sunny"
      ></v-checkbox>
      <v-divider  vertical :color="dividerColor" class="me-3" ></v-divider>

      <v-tooltip  v-for="lang in langs"
            :key="lang.name"
            bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
            class="langBtn"
            color="primary"
            :ref="lang.name"
            outlined
            icon
            @click="changeLang(lang.i18n)"
            v-bind="attrs"
            v-on="on">
              <flag :iso="lang.name" v-bind:squared=false />
            </v-btn>
          </template>
          <span v-if="lang.name === 'fr' "> {{ $t('lang_FR') }}</span>
          <span v-else> {{ $t('lang_GB') }}</span>
        </v-tooltip>
    </v-app-bar>

    <v-main >
      <Home/>
    </v-main>
      <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home';
import i18n from './plugins/i18n'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home, Footer
  },
  data: () => ({
    langs: [
      {name: 'gb', i18n: 'en'},
      {name: 'fr', i18n: 'fr'}
    ],
    isOnTop: true,
    mainSocials: [
      {icon: 'linkedin', url: 'https://linkedin.com/in/jordan-soares-dev-web'},
      {icon: 'github', url: 'https://github.com/JordanSOA/vue-page'}
    ]
  }),
  methods: {
    changeLang: function(lang){
      i18n.locale = lang;
    },
    onScroll: function (e) {
      this.isOnTop = (!e.target.defaultView.scrollY) ? true : false;
      },
    openLink: function(soc) {
      const socialItem = this.mainSocials.filter( social => social.icon == soc)[0];
      window.open(socialItem.url);
    }
  },
  created(){
      this.darkMode = this.$vuetify.theme.dark;
  }, 
  computed: {
    dividerColor: function(){
      return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary;
    }
  }
};
</script>
<style scoped>
#app {
  background-color: var(--v-surface-darken1);
}
.langBtn {
  margin-left: 1vw;
}

.rubberBand {
  animation-name: rubberBand;
  animation-duration: 1s;
  animation-fill-mode: both;
  }


  @keyframes rubberBand {
  0% , 100%{
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  30% {
  -webkit-transform: scale3d(1.25, 0.75, 1);
  transform: scale3d(1.25, 0.75, 1);
  }
  40% {
  -webkit-transform: scale3d(0.75, 1.25, 1);
  transform: scale3d(0.75, 1.25, 1);
  }
  50% {
  -webkit-transform: scale3d(1.15, 0.85, 1);
  transform: scale3d(1.15, 0.85, 1);
  }
  65% {
  -webkit-transform: scale3d(.95, 1.05, 1);
  transform: scale3d(.95, 1.05, 1);
  }
  75% {
  -webkit-transform: scale3d(1.05, .95, 1);
  transform: scale3d(1.05, .95, 1);
  }
  }

</style>
