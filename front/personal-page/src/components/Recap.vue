<template>
  <v-container class="Recap">

    <h1>{{ $t('timeline_title') }}!</h1>
    <v-timeline :dense="isMobile" side="end">
      <v-timeline-item v-for="(item, idx) in items" :key="idx" :dot-color="item.color" :icon="item.icon" fill-dot>
        <template v-slot:opposite v-if="!$vuetify.breakpoint.mobile">
          <div :class="`pt-1 headline font-weight-bold primary--text`" v-text="$t(item.year)"></div>
        </template>
        <v-card class="mx-auto" v-on="isMobile ? { click: () => handleXpClick(item.link) } : {}">
          <v-card-subtitle class="font-weight-bold primary--text pa-1" v-if="isMobile" :color="item.color">
            {{ $t(item.year) }}
          </v-card-subtitle>

          <v-card-title class="pa-1 text-h6 text-white justify-center title">
            {{ $t(item.title) }}

          </v-card-title>

          <v-card-text class="bg-white text--primary" v-if="!isMobile">
            <p>
              {{ $t('mainTextTimelineItem_' + (idx + 1)) }}
            </p>

            <v-btn v-if="item.link !== 'POST'" color="primary" variant="outlined" @click="handleXpClick(item.link)">
              {{ $t('ctaLabelTimelineItem_' + (idx + 1)) }}
            </v-btn>
            <LinkedInPost v-if="item.link === 'POST'" ref="postLI" :ctaLabelTimelineItem="$t('ctaLabelTimelineItem_' + (idx + 1))" />
          </v-card-text>
          <v-card-text class="text--primary pb-0" v-if="isMobile">
            <v-list>
              <v-list-item v-for="n in 4" :key="n">
                <v-list-item-icon>
                  <v-icon color="primary">mdi-{{ item.mobileIcons[n - 1] }}</v-icon>
                </v-list-item-icon>
                {{ getMobileTxt(idx)[n - 1] }}
              </v-list-item>
            </v-list>
            <v-divider :color="dividerColor"></v-divider>
            <LinkedInPost v-if="idx === 1 && isMobile" ref="postLI" :mobileCtaLabelTimelineItem="$t('mobileCtaLabelTimelineItem_' + (idx + 1))"/>
            <p v-else class="d-flex align-end"> {{ $t('mobileCtaLabelTimelineItem_' + (idx + 1)) }}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import LinkedInPost from './dialogs/LinkedInPost.vue';

export default {
  name: "Recap",
  components: { LinkedInPost },
  data: () => ({
    isDialogShown: false,
    items: [
      {
        color: "primary lighten-5",
        icon: "mdi-rocket",
        year: "timeline_item_year_1",
        title: "timeline_item_title_1",
        link: "https://simplon.co/formation/developpeur-web-et-web-mobile/11",
        mobileIcons: ['progress-wrench', 'account-convert', 'calendar-star', 'account-hard-hat'],
        mobileTxtsFR: ['Auto apprentissage', 'Reconversion', '21 mois', 'En Alternance'],
        mobileTxtsEN: ['Self-Learning', 'Retraining', '21 months', 'Cooperative training course']
      },
      {
        color: "primary lighten-4",
        icon: "mdi-school",
        year: "timeline_item_year_2",
        title: "timeline_item_title_2",
        link: "POST",
        mobileIcons: ['account-lock', 'factory', 'car-3-plus', 'angularjs'],
        mobileTxtsFR: ['Portail Interne critique', 'Supply Chain', '3 projets en autonomie', 'Java/Angular'],
        mobileTxtsEN: ['Internal critical platform', 'Supply Chain', '3 projects independently', 'Java/Angular']
      },
      {
        color: "primary lighten-3",
        icon: "mdi-certificate",
        year: "timeline_item_year_3",
        title: "timeline_item_title_3",
        link: "https://storage.googleapis.com/webdev_bucket/GotHoops%20-%20Light%20Demo.mp4",
        mobileIcons: ['bullseye-arrow', 'bullseye-arrow', 'application-brackets', 'map-marker-star'],
        mobileTxtsFR: ['Obtention Titre', 'Certifié en Agilité', 'App : Got Hoops', "Intégration de Maps "],
        mobileTxtsEN: ['Graduated', 'Agile Certified', 'App : Got Hoops', 'Maps Implementation']
      },
      {
        color: "primary lighten-2",
        icon: "mdi-briefcase",
        year: "timeline_item_year_4",
        title: "timeline_item_title_4",
        link: "https://particuliers.engie.fr/changement-fournisseur/meteo-systeme-electrique.html",
        mobileIcons: ['account-lock-open', 'traffic-light', 'account-group', 'react'],
        mobileTxtsFR: ['Site Public', 'Fort Traffic', 'SAFe', 'Java/React'],
        mobileTxtsEN: ['Public Website', 'High Volume', 'SAFe', 'Java/React']
      },
      {
        color: "primary lighten-1",
        icon: "mdi-briefcase",
        year: "timeline_item_year_5",
        title: "timeline_item_title_5",
        link: "https://www.simplicite.fr/",
        mobileIcons: ['briefcase-account', 'account-lock', 'application-brackets', 'react'],
        mobileTxtsFR: ['Product Leader','Reférentiels Architecture', 'LowCode', 'Java/React'],
        mobileTxtsEN: ['Product Leader','Architecture Referentials', 'LowCode', 'Java/React']
      }
    ],
  }),
  computed: {
    dividerColor: function () {
      return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary;
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.mobile;
    }
  },
  methods: {
    handleXpClick: function (link) {
      if (link && link !== 'POST') {
        return this.openLink(link);
      }
    },
    openLink: function (link) {
      return window.open(link);
    },
    getMobileTxt: function (idx) {
      return this.$i18n.locale === 'en' ? this.items[idx].mobileTxtsEN : this.items[idx].mobileTxtsFR;
    }
  },
};
</script>
<style scoped>
.title {
  background-color: var(--v-primary-base);
  color: white;
}
</style>