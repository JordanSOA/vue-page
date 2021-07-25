<template>
<div class="tabs">
    <v-card >
        <v-tabs
        center-active
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
            <v-tab-item>
                <about-me-tab/>
            </v-tab-item>
            <v-tab-item>
                SKills
            </v-tab-item>
            <v-tab-item>
                <socials-tab/>
            </v-tab-item>
        </v-tabs>
    </v-card>
</div>
</template>

<script>
import AboutMeTab from './tabs/AboutMeTab.vue'
import SocialsTab from './tabs/SocialsTab.vue'
export default {
    components: { AboutMeTab ,SocialsTab},

}
</script>

<style>

</style>