<template>
    <v-card class="mb-3">
        <v-container>
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
    
}
</script>

<style>

</style>