<template>
<v-container fluid>
    <v-row >
        <v-col align="center" >
            <alert-warning/>
        </v-col>
    </v-row>
    <v-row >
        <v-col align="center" cols="12" md="4" >
            <picture-card/>
        </v-col>
        <v-col align="center" cols="12" md="8" >
            <focus-point/>
            <info-tabs/>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
import AlertWarning from './AlertWarning.vue';
import FocusPoint from './FocusPoint.vue';
import InfoTabs from './InfoTabs.vue';
import PictureCard from './PictureCard.vue';
export default {
    components: { PictureCard, AlertWarning, InfoTabs, FocusPoint, InfoTabs },
    name: 'Home',
}
</script>

<style scoped>
</style>