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
        <v-col align="center" cols="12" md="6"  >
            <info-tabs/>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mobile" align="center" cols="12" md="12"  >
            <recap/>
        </v-col>
        <v-col align="center" cols="12" md="6"  >
            <quotes-generator/>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mobile" align="center" cols="12" md="12"  >
            <recap/>
        </v-col>
    </v-row>
    <NavFloat :onMobile="$vuetify.breakpoint.mobile" />
    
    <!-- Floating Action Button for Chat -->
    <v-btn
        fab
        fixed
        bottom
        right
        color="primary"
        @click="openChatBot"
        class="chat-fab"
    >
        <v-icon>mdi-robot</v-icon>
    </v-btn>
    
    <!-- Chat Bot -->
    <chat-bot :is-open="isChatBotOpen" @close="closeChatBot" />
</v-container>
</template>

<script>
import AlertWarning from './AlertWarning.vue';
import FocusPoint from './FocusPoint.vue';
import InfoTabs from './InfoTabs.vue';
import PictureCard from './PictureCard.vue';
import QuotesGenerator from './QuotesGenerator.vue'
import NavFloat from './NavFloat.vue'
import Recap from './Recap.vue';
import ChatBot from './ChatBot.vue';

export default {
    components: { PictureCard, AlertWarning, InfoTabs, FocusPoint, InfoTabs, QuotesGenerator, NavFloat, Recap, ChatBot },
    name: 'Home',
    data: () => ({
        isChatBotOpen: false,
    }),
    methods: {
        openChatBot() {
            this.isChatBotOpen = true;
        },
        closeChatBot() {
            this.isChatBotOpen = false;
        }
    }
}
</script>

<style scoped>
.chat-fab {
    z-index: 100 !important;
    bottom: 20px !important;
    right: 20px !important;
}

@media (max-width: 600px) {
    .chat-fab {
        bottom: 80px !important;
        right: 20px !important;
    }
}
</style>