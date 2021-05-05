<template>
<v-container >
    <v-row >
        <v-col align="center" >
            <v-alert
            dismissible
            prominent
            outlined
            dense
            elevation="5"
            color="error"
            icon="mdi-tools">
            <h2>{{$t('greetings')}}</h2>
            <p>
            {{$t('warning_sentence1')}}
            </p>
            <p>{{$t('warning_sentence2')}} , <a href="">{{$t('reach_txt')}}</a>.</p>
            </v-alert>
        </v-col>
    </v-row>
    <v-row >
        <v-col align="center" >
        <picture-card/>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PictureCard from './PictureCard.vue';
export default {
    components: { PictureCard },
    name: 'Home',
    methods: {
        switchMode: function(){
            console.log(this.$vuetify.theme.dark);
        }
    },
}
</script>

<style scoped>
</style>