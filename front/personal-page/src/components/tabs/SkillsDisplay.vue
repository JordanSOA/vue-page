<template>
    <v-container fluid>
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
    props: {
        skills: {
            type: Array
        }
    }
}
</script>

<style>

</style>