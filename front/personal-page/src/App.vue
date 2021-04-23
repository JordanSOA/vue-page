<template>
  <v-app>
    <v-app-bar
      app
      color="error"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-tooltip  v-for="lang in langs"
            :key="lang.name"
            bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
            :ref="lang.name"
            outlined
            icon
            @click="changeLang(lang.i18n)"
            v-bind="attrs"
            v-on="on">
              <flag :iso="lang.name" v-bind:squared=false />
            </v-btn>
          </template>
          <!-- <span v-if="lang.name === 'fr' "> {{ $t('lang_FR') }}</span>
          <span v-else> {{ $t('lang_GB') }}</span> -->
        </v-tooltip>
    </v-app-bar>

    <v-main>
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
    ]
  }),
  methods: {
    changeLang: function(lang){
      console.log(lang);
      i18n.locale = lang;
    }
  }
};
</script>
