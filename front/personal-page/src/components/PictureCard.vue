<template>
<div class="PictureCard">
    <v-card max-width="400" color="surface lighten-3" elevation="3">
        <v-img
        class="picture d-flex black--text "
        :src="picturePath"
        >
        <v-container>
            <v-row class="d-flex flex-column">
            <v-col  align="end">
                <v-icon x-large color="primary" >mdi-language-javascript</v-icon>
                <v-icon x-large color="primary">mdi-language-java</v-icon>
                <h3 class="ma-1"> +3 {{$t('years')}} </h3>
                <h3 class="ma-1"> FullStack </h3>
            </v-col>
            <v-col class="mb-12">
            </v-col>
            <v-col  class="mt-12" align="end">
                <v-btn
                color="primary"
                outlined
                icon
                @click="show = !show">
                    <v-icon x-large >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-col>
            </v-row>
        </v-container>
        </v-img>
        <v-expand-transition>
        <div v-show="show">
            <v-card-title class="myName"> {{ myName }} </v-card-title>
            <v-btn
                class="mb-2"
                color="primary"
                @click="openLink()">
                {{$t('dl_cv_text')}}
                </v-btn>
            <v-divider :color="dividerColor"></v-divider>
            <v-card-title class="shortDesc text-left"> {{$t('short_description2')}}</v-card-title>
        </div>
    </v-expand-transition>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'PictureCard',
    data: () => ({
        myName: "Jordan Soares",
        show: false,
        picturePath: 'https://storage.googleapis.com/webdev_bucket/persoPic.5180032d.jpg',
        dlCvIcon : {
            icon: 'mdi-file-pdf-box',
            url: 'https://storage.googleapis.com/webdev_bucket/22CV.pdf'
            }
    }),
    computed: {
        dividerColor: function(){
            return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary;
            }
            ,
        openLink : function(){
            return window.open(this.dlCvIcon.url)
        }
    }
}
</script>

<style scoped>
.shortDesc {
    word-break: keep-all !important;
}
.shortInfo {
    width: max-content;
    background-color: rgba(255, 255, 184, 0.3);
    }
.colPic {
    border: 1px solid black;
}
</style>