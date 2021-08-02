<template>
    <v-card>
        <v-container>
            <v-row>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in certif" :key="index">
                        <v-list-item-icon>
                            <v-icon color="purple">mdi-star-four-points</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content >
                            <p class="text-center">
                            {{item}}
                            </p>
                        <!-- <v-list-item-title v-text="item"></v-list-item-title> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        certif: ["Software Engineer who enjoys building nifty and robust solutions",
        "Can adapt and provide creative ideas to complex challenges",
        "Connaissance sur des sujets comme Agile/Scrum, Software craftsmanship, TDD, CI/CD and DevOps.",
        "Capable de concevoir et réaliser du back-end au front-end, de l’écriture des tests au déploiement en production."]
    })
}
</script>

<style>

</style>