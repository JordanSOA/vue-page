<template>
    <v-container  v-if="name === 'tech'" fluid>
        <v-toolbar
        class="mb-2"
        v-bind:class="$vuetify.theme.dark ? 'black--text' : 'white--text'"
        dense
        :color="dividerColor">
            <v-toolbar-title>
                <span v-if="selectedTechs ===  '0' "> {{$t('tools')}} </span>
                <span v-else-if="selectedTechs ===  '1' "> Back </span>
                <span v-else-if="selectedTechs ===  '2' "> Front </span>
                <span v-else> {{$t('all')}} </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle 
            v-model="selectedTechs">
            <v-btn color="primary darken-1" value=2 small > Front </v-btn>
            <v-btn color="primary darken-5" value=1 small > Back </v-btn>
            <v-btn color="primary darken-3" value=0 small > {{$t('tools')}} </v-btn>
            </v-btn-toggle>
        </v-toolbar>
        <v-row >
            <v-col 
            class="text-left text-sm-center"
            v-for="(skill,i) in filteredSkills"
            :key="i" cols="12" sm="6" lg="4">

            <v-icon> mdi-{{skill.icon}} </v-icon>
            {{skill.name}}
                <v-progress-linear
                background-color="secondary darken-5"
                color="primary lighten-1"
                :value="skill.humbleEstimation">
                </v-progress-linear>
            </v-col>
        </v-row>
    </v-container>
    <v-container  v-else fluid>
        <v-row>
            <v-col 
            class="text-left text-sm-center"
            v-for="(skill,i) in skills"
            :key="i" cols="12" sm="6" lg="4">
            {{$t(skill.name)}}
                <v-progress-linear
                background-color="secondary darken-5"
                color="primary lighten-1"
                :value="skill.humbleEstimation">
                </v-progress-linear>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        selectedTechs: undefined
    }),
    props: {
        skills: {
            type: Array
        },
        name: {
            type: String
        }
    }, 
    methods: {
        colorChange(val) {
            return (val === 0) ? 'primary darken-3' : (val === 1) ? 'primary darken-5' : 'primary darken-1';
        }
    },
    computed: {
        filteredSkills() {
                return (this.selectedTechs === undefined) ? this.skills : this.skills
                .filter( obj => this.selectedTechs == obj.type );
        },
        dividerColor: function(){
            return this.$vuetify.theme.dark ? 'grey' : this.$vuetify.theme.themes.dark.surface;
            }
    }
}
</script>

<style>

</style>