<template>
    <v-card class="mt-3 focuspoint">
        <v-container fluid>
            <v-row>
                <v-list>
                    <v-list-item
                    v-for="n in 3" :key="n">
                        <v-list-item-icon>
                            <v-icon color="primary">mdi-star-four-points</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content >
                            <p class="text-center">
                            {{$t('focus_txt_'+n)}}
                            </p>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.focuspoint{
    border: 0.75vw double var(--v-primary-base);
    width: fit-content;
    height: fit-content;
}
</style>