<template>
<v-container style="height: 1000px;">
    <v-row >
        <v-col align="center" >
        <v-card tile color="secondary darken-1">
        <h2 > {{ $t('message')}}</h2>
        <v-btn @click="switchMode" outlined color="primary">Send</v-btn>
        </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
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