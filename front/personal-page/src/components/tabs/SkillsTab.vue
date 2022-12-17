<template>
<div class="skillsTab">
        <v-tabs right>
            <v-tab>
                Tech
            </v-tab>
            <v-tab>
                SOFT
            </v-tab>
            <v-tab>
                {{$t('others')}}
            </v-tab>
            <v-tab-item>
                <skills-display :skills="techSkills.skills" :name="techSkills.name"/>
            </v-tab-item>
            <v-tab-item>
                <skills-display :skills="softSkills.skills" :name="softSkills.name"/>
            </v-tab-item>
            <v-tab-item>
                <skills-display :skills="otherSkills.skills" :name="otherSkills.name"/>
            </v-tab-item>
        </v-tabs>
</div>
</template>

<script>
import SkillsDisplay from './SkillsDisplay.vue'
export default {
    components: { SkillsDisplay },
    data: () => ({
        techSkills: {
            name: 'tech',
            skills: [
                {name: 'Java',icon: 'language-java', type: 1, humbleEstimation: 80},
                {name: 'Javascript',icon: 'language-javascript', type: 2, humbleEstimation: 85},
                {name: 'Typescript',icon: 'language-typescript', type: 2, humbleEstimation: 65},
                {name: 'SQL',icon: 'database', type: 1, humbleEstimation: 80},
                {name: 'Angular',icon: 'angular', type: 2, humbleEstimation: 70},
                {name: 'React',icon: 'react', type: 2, humbleEstimation: 75},
                {name: 'Vue',icon: 'vuejs', type: 2, humbleEstimation: 70},
                {name: 'NodeJS',icon: 'nodejs', type: 1, humbleEstimation: 60},
                {name: 'Github',icon: 'github', type: 0, humbleEstimation: 80},
                {name: 'Vuetify',icon: 'vuetify', type: 2, humbleEstimation: 80},
                {name: 'Material Design',icon: 'material-design', type: 2, humbleEstimation: 70},
                {name: 'Jira',icon: 'jira', type: 0, humbleEstimation: 70},
                {name: 'HTML',icon: 'language-html5', type: 2, humbleEstimation: 90},
                {name: 'CSS',icon: 'language-css3', type: 2, humbleEstimation: 90}
            ]
        },
        softSkills:{
            name: 'soft',
            skills :[
            {name: 'soft_skill1', humbleEstimation: 80},
            {name: 'soft_skill4', humbleEstimation: 85},
            {name: 'soft_skill2', humbleEstimation: 90},
            {name: 'soft_skill5', humbleEstimation: 90},
            {name: 'soft_skill3', humbleEstimation: 80}
        ]},
        otherSkills:{ 
            name: 'others',
            skills :[
            {name: 'other_skill4', humbleEstimation: 90},
            {name: 'other_skill1', humbleEstimation: 65},
            {name: 'other_skill2', humbleEstimation: 85},
            {name: 'other_skill6', humbleEstimation: 80},
            {name: 'other_skill3', humbleEstimation: 65},
            {name: 'other_skill5', humbleEstimation: 40}
        ]}
    })
}
</script>

<style>

</style>