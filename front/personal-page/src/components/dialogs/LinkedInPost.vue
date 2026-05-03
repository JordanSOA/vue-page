<template>
  <div class="text-center">
    <v-btn color="primary" v-if="!isMobile" @click="visible = true">
      {{ ctaLabelTimelineItem }}
    </v-btn>
    <p v-if="isMobile" @click="visible = true" class="d-flex"> {{ mobileCtaLabelTimelineItem }}</p>
    <v-dialog eager :fullscreen="isMobile" v-model="visible">
      <v-card class="linkedin-post d-flex align-center flex-column" outlined v-if="visible">
        <div class="d-flex flex-column pt-xs-16 align-end" :style="!isMobile ? 'width: 90vw;' : ''">
          <v-toolbar v-if="!isMobile" dark color="primary" collapse>
            <v-spacer></v-spacer>
            <v-toolbar-item >
              <v-btn icon dark @click="visible = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-item>
          </v-toolbar>
          <h1 class="mx-auto">Check me out in this itw </h1>
        </div>
        <v-responsive :aspect-ratio="ratioIframe" class="pb-xs-16 pt-xs-6 flex-xs-grow-0">
          <iframe scrolling="no" frameborder="0" :style="!isMobile ? 'width: 75vw;' : ''" allowtransparency="true" :height="heightIframe"
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6782948420236677120?compact=1" allowfullscreen
            title="Post intégré"></iframe>
        </v-responsive>
        <div class="floating-button-container">
          <v-btn v-if="isMobile" @click="visible = false" elevation="5" color="primary lighten-1">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'LinkedInPost',
  props: ['visibility', 'mobileCtaLabelTimelineItem', 'ctaLabelTimelineItem'],
  data() {
    return {
      visible: this.visibility,
    }
  },
  methods: {

  },
  computed: {
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    },
    ratioIframe: function () {
      return this.isMobile ? "4 / 3" : "16 / 9";
    },
    heightIframe: function () {
      return this.isMobile ? 400 : 600;
    }
  }
}
</script>

<style>
.floating-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
}

.floating-button-container button {
  color: #fff;
}
</style>