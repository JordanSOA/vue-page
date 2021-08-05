<template>
<v-container fluid>
    <v-row >
        <v-col align="center" >
            <alert-warning/>
        </v-col>
    </v-row>
    <v-row justify="center" >
        <v-col align="center" class="d-block d-md-flex justify-space-around" cols="12"  >
            <picture-card/>
            <focus-point/>
        </v-col>
        <v-col align="center" cols="12" md="6" lg="8"  >
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