<template>
<div class="socialsTab ">
    <v-container fluid >
        <v-row color="surface darken-5">
            <v-col 
            v-for="(social, i) in socials"
            :key="i" 
            cols="12" sm="6"
            @click="openLink(social.url)">
            <v-icon color="primary">mdi-{{social.icon}}</v-icon>
            <p>{{social.label}}</p>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        socials: [
            {icon: 'linkedin', url: 'https://linkedin.com/in/jordan-soares-dev-web', label:'jordan-soares-dev-web'},
            {icon: 'gmail', url: 'jordaan.soares@gmail.com', label:'jordaan.soares@gmail.com'},
            {icon: 'github', url: 'https://github.com/JordanSOA', label:'JordanSOA'},
            {icon: 'stack-overflow', url: 'https://stackoverflow.com/users/14590766/jordan-soares', label:'jordan-soares'}
        ]
    }),
    methods: {
        openLink: function(social) {
            //If mail
            window.open(social);
    }
    },
}
</script>

<style>

</style>