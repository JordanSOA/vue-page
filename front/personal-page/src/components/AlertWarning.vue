<template>
    <v-alert
        dismissible
        prominent
        outlined
        dense
        elevation="5"
        color="error"
        icon="mdi-tools">
            <h2 id="greetings">{{ $t("greetings") }}</h2>
            <p id="first_sent">{{ $t("warning_sentence1") }}</p>
            <p id="second_sent">
            {{ $t("warning_sentence2") }} , <a href="" id="reach">{{ $t("reach_txt") }}</a>.
            </p>
    </v-alert>
</template>

<script>
export default {
    name: 'AlertWarning', 
    data: () => ({
        isCopied: false
    }),
    methods: {
        
    },
};
</script>

<style scoped>

</style>