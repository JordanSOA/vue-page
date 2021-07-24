<template>
<div class="tabs">
    <v-card >
        <v-tabs
        center-active
        right
        :vertical="$vuetify.breakpoint.smAndUp">
            <v-tab>
                About Me
            </v-tab>
            <v-tab>
                Skills
            </v-tab>
            <v-tab>
                Socials
            </v-tab>
            <v-tab-item>
                <about-me-tab/>
            </v-tab-item>
            <v-tab-item>
                SKILLS
            </v-tab-item>
            <v-tab-item>
                SOCIALS
            </v-tab-item>
        </v-tabs>
    </v-card>
</div>
</template>

<script>
import AboutMeTab from './tabs/AboutMeTab.vue'
export default {
    components: { AboutMeTab },

}
</script>

<style>

</style>