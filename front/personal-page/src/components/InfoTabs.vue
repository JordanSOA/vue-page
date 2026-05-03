<template>
<div class="tabsSection">
    <v-card >
        <v-tabs
        center-active
        show-arrows
        right
        :vertical="$vuetify.breakpoint.smAndUp">
            <v-tab>
                {{$t("abt_me_title")}}
            </v-tab>
            <v-tab>
                {{$t("skills_title")}}
            </v-tab>
            <v-tab>
                {{$t("socials_title")}}
            </v-tab>
            <!-- <v-tab>
                Fun Stuff
            </v-tab> -->
            <v-tab-item>
                <about-me-tab/>
            </v-tab-item>
            <v-tab-item>
                <skills-tab/>
            </v-tab-item>
            <v-tab-item>
                <socials-tab/>
            </v-tab-item>
            <!-- <v-tab-item>
                <fun-stuff-tab></fun-stuff-tab>
            </v-tab-item> -->
        </v-tabs>
    </v-card>
</div>
</template>

<script>
import AboutMeTab from './tabs/AboutMeTab.vue'
// import FunStuffTab from './tabs/FunStuffTab.vue'
import SkillsTab from './tabs/SkillsTab.vue'
import SocialsTab from './tabs/SocialsTab.vue'
export default {
    components: { AboutMeTab ,SocialsTab, SkillsTab/*, FunStuffTab*/},

}
</script>

<style>

</style>