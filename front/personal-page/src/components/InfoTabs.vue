<template>
<div class="tabs">
    <v-card >
        <v-tabs
        center-active
        right
        :vertical="$vuetify.breakpoint.smAndUp">
            <v-tab>
                Gene
            </v-tab>
            <v-tab>
                Skills
            </v-tab>
            <v-tab>
                Socials
            </v-tab>
            <v-tab-item>
                INFO GENE
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
export default {

}
</script>

<style>

</style>