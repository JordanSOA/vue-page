<template>
<div>
    <v-alert
        dismissible
        prominent
        outlined
        color="primary"
        class="error--text"
        dense
        elevation="5"
        icon="mdi-tools">
            <h2 id="greetings">{{ $t('greetings') }}</h2>
            <p id="first_sent">{{ $t('warning_sentence1') }}</p>
            <p id="second_sent">
            {{ $t('warning_sentence2') }} , <a @click.stop.prevent="copyToClipboard" id="reach">{{ $t('reach_txt') }}</a>.
            </p>
    </v-alert>
    <v-snackbar v-model="snackbar">
        {{$t('copy_cliboard')}}
        <template v-slot:action="{ attrs }">
            <v-btn
            color="yellow accent-2"
            text
            timeout="3000"
            v-bind="attrs"
            @click="snackbar = false">
            {{$t('close_txt')}}
            </v-btn>
        </template>
    </v-snackbar>

</div>
</template>

<script>
export default {
    name: 'AlertWarning', 
    data: () => ({
        snackbar: false
    }),
    methods: {
        copyToClipboard: function() {
        const el = document.createElement('textarea');
        el.value = "jordaan.soares@gmail.com";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.snackbar = true;
        }
    },
};
</script>

<style scoped>
#reach {
    font-weight: bold;
    font-size: larger;
}
</style>