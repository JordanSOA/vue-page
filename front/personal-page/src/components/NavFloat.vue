<template>
    <v-speed-dial v-if="onMobile"
    fixed
    v-model="fab"
    :direction="direction"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :open-on-hover="true"
    :transition="transition"
    >
    <template v-slot:activator>
        <v-btn
        v-model="fab"
        color="primary lighten-2"
        dark
        fab>
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.footerC')">
        <v-icon>mdi-arrow-down-drop-circle</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.quotes-generator')">
        <v-icon>mdi-basketball</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.playgroundSection')">
        <v-icon>mdi-seesaw</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.tabsSection')">
        <v-icon>mdi-card-account-details</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.focuspoint')">
        <v-icon>mdi-star</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        elevation="5"
        @click="$vuetify.goTo('.PictureCard')"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        elevation="5"
        @click="$vuetify.goTo(0)"
      >
        <v-icon> mdi-arrow-up-drop-circle </v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
    name: 'floatBtn',
    props: {
      onMobile: {
        type: Boolean
      }
    },
    data: () => ({
        fab: false,
        transition: 'slide-y-reverse-transition',
        direction: 'top',
        top: false,
        right: false,
        bottom: true,
        left: true
    }),
    computed: {
      isFabShown: function(){
        return this.$vuetify.breakpoint.mobile
      }
    }
}
</script>

<style>

</style>