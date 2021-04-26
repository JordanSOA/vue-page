import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const isDarkModeActivated = window.matchMedia('(prefers-color-scheme: dark)')

export default new Vuetify({
    theme: {
        options: { 
            customProperties: true 
        },
        dark: isDarkModeActivated.matches,
        themes: {
            light: {
                primary: '#542583',
                secondary: '#FDB827',
                error: '#f44336',
                info: '#03a9f4',
                success: '#4caf50'
            },
            dark: {
                primary: '#FDB827',
                secondary: '#542583',
                error: '#f44336',
                info: '#03a9f4',
                success: '#4caf50'
            },
        },
    },
});
