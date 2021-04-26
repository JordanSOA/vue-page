<template>
  <v-app id="app">
    <v-app-bar
      app
      flat
      color="secondary lighten-1"
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <v-toolbar-title>OKOK</v-toolbar-title>
        
      </div>

      <v-spacer></v-spacer>
        <v-checkbox class="pt-3"
        v-model="$vuetify.theme.dark"
        off-icon="mdi-moon-waning-crescent"
        on-icon="mdi-white-balance-sunny"
      ></v-checkbox>
      <v-tooltip  v-for="lang in langs"
            :key="lang.name"
            bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
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
  </v-app>
</template>

<script>
import Home from './components/Home';
import i18n from './plugins/i18n'

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    langs: [
      {name: 'gb', i18n: 'en'},
      {name: 'fr', i18n: 'fr'}
    ],
  }),
  methods: {
    changeLang: function(lang){
      i18n.locale = lang;
    }
  },
  created(){
      this.darkMode = this.$vuetify.theme.dark;
  }
};
</script>
<style scoped>
#app {
  background-color: var(--v-secondary-lighten2);
}
</style>
