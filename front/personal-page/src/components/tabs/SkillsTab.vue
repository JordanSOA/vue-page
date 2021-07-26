<template>
<div class="skillsTab">
    <!-- <div v-bind:style="{ width: '25%'}" class="d-flex align-center ">
    <label>CSS</label>
    <v-progress-linear
                        background-color="primary lighten-5"
                        color="primary lighten-1"
                        :value="75"
                        >
                        </v-progress-linear>
    </div>
    <div v-bind:style="{ width: '25%'}">
    <label>CSS</label>
    <v-progress-linear
                        background-color="primary lighten-5"
                        color="primary lighten-1"
                        :value="75"
                        >
                        </v-progress-linear>
    </div> -->
        <v-tabs right>
            <v-tab>
                Tech
            </v-tab>
            <v-tab>
                SOFT
            </v-tab>
            <v-tab>
                OTHERS
            </v-tab>
            <v-tab-item>
                ok

            </v-tab-item>
            <v-tab-item>
            <skills-display :skills="softSkills"/>
            </v-tab-item>
            <v-tab-item>
                <skills-display :skills="otherSkills"/>
            </v-tab-item>
        </v-tabs>
</div>
</template>

<script>
import SkillsDisplay from './SkillsDisplay.vue'
export default {
    components: { SkillsDisplay },
    data: () => ({
        softSkills: [
            {name: 'soft_skill1', humbleEstimation: 80},
            {name: 'soft_skill4', humbleEstimation: 85},
            {name: 'soft_skill2', humbleEstimation: 90},
            {name: 'soft_skill5', humbleEstimation: 90},
            {name: 'soft_skill3', humbleEstimation: 80}
        ],
        otherSkills: [
            {name: 'other_skill4', humbleEstimation: 90},
            {name: 'other_skill1', humbleEstimation: 65},
            {name: 'other_skill2', humbleEstimation: 85},
            {name: 'other_skill6', humbleEstimation: 80},
            {name: 'other_skill3', humbleEstimation: 65},
            {name: 'other_skill5', humbleEstimation: 40}
        ]
    })
}
</script>

<style>

</style>