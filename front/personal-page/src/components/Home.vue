<template>
<v-container >
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