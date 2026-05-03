<template>
    <div class="funStuffTab">
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="6" lg="4" class="pa-0 pa-sm-auto" no-gutters>
                    <!-- <v-chip class="chipInfo" label  color="primary" outlined> {{$t("details_"+n)}} </v-chip> -->
                    <div class="ma-2">
                        <gif-carrousel :itemsData="gitBot.gifData" :gifCtaLabel="gitBot.gifCtaLabel"></gif-carrousel>
                    </div>
                    <div class="ma-2">
                        <gif-carrousel :itemsData="personalBot.gifData" :gifCtaLabel="personalBot.gifCtaLabel"></gif-carrousel>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
    
<script>
import GifCarrousel from './GifCarrousel.vue'
export default {
    components: { GifCarrousel },
    data() {
        return {
            gitBot: {
                gifCtaLabel: 'Voir Automate Git',
                gifData: [
                    {
                        src: 'https://storage.googleapis.com/webdev_bucket/newBranch.gif',
                        description: 'Bash script that create a local branch from master branch',
                    },
                    {
                        src: 'https://storage.googleapis.com/webdev_bucket/mergeIntoDevelop.gif',
                        description: 'Bash script that merge a local branch into a develop branch',
                    },
                ],
            },
            personalBot: {
                gifCtaLabel: 'Voir Automate Perso',
                gifData: [
                    {
                        src: 'https://storage.googleapis.com/webdev_bucket/dominos.gif',
                    },
                    {
                        src: 'https://storage.googleapis.com/webdev_bucket/gps.gif',
                    },
                ],
            },
        }
    }
}
</script>
