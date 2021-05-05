<template>
<v-container >
    <v-row >
        <v-col align="center" >
            <alert-warning/>
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
import AlertWarning from './AlertWarning.vue';
import PictureCard from './PictureCard.vue';
export default {
    components: { PictureCard, AlertWarning },
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