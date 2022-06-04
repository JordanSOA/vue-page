<template>
    <v-card class="quotes-generator">
        <v-container fluid>
            <v-row>
                <v-col >
                    <h2 class="primary--text"> Kobe Once Said</h2>
                </v-col>
            </v-row>
        
            <v-row class="d-flex flex-column">
                <v-col class="kb-quote-section" v-if="kobeQuote != null">
                    <p class="mt-4 primary--text font-weight-bold">{{kobeQuote}}.</p>
                </v-col>
                <v-divider v-if="kobeQuote != null"></v-divider>
                <v-col>
                    <v-btn @click="getNewRandomQuote" v-if="kobeQuote == null" color="primary" > TEST </v-btn>
                    <v-btn @click="getNewRandomQuote" v-else color="secondary"> New Quote </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
import * as data from '../assets/json/kobe.json'
const _data = [...data.default];
export default {
    data: () => ({
        kobeData: _data,
        kobeQuote: null,
    }),
    computed: {
        darkMode: function(){return this.$vuetify.theme.dark}
    },
    methods: {
        getNewRandomQuote: function() {
            let ran = Math.floor(Math.random() * (69 - 0 + 1)) + 0;
            this.kobeQuote = this.kobeData[ran].kb_quote;
            },
    }
}
</script>
<style scoped>
</style>