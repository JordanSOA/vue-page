<template>
<div class="aboutMeTab">
        <v-container fluid>
        <v-row  >
            <v-col cols="6" md="4"
            v-for="info in main"
            :key="info"
            >
            <v-chip class="chipInfo" label large color="primary" outlined> {{info}} </v-chip>
            </v-col>
        </v-row>
        </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
        main: [
        "IDF", "En Recherche", 
        "2 ans XP","Titre Pro NivIII",
        "Agile", "Anglais C2"
        ]
    })
}
</script>

<style scoped>

</style>