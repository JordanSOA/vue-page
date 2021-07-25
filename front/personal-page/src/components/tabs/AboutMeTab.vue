<template>
<div class="aboutMeTab">
        <v-container fluid>
        <v-row >
            <v-col cols="12" sm="6" lg="4" class="pa-0 pa-sm-auto"
            v-for="n in 6"
            :key="n"
            no-gutters
            >
            <!-- <v-chip class="chipInfo" label  color="primary" outlined> {{$t("details_"+n)}} </v-chip> -->
            <div class="personalChip ">
                {{$t("details_"+n)}}
            </div>
            </v-col>
        </v-row>
        </v-container>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.personalChip {
    border: 2px solid var(--v-primary-base);
    border-radius: 4px;
    margin: 1vw;
    padding: 1vw;
    background: linear-gradient(to right bottom, var(--v-surface-base) 85%, var(--v-primary-base)50%);
}
</style>