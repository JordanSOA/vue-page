import {shallowMount, createLocalVue}  from '@vue/test-utils'
import PictureCard from '@/components/PictureCard.vue'
import i18n from '../../src/plugins/i18n'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'

const localVue = new createLocalVue();
localVue.use(VueI18n);
const vuetify = new Vuetify();

describe('PictureCard.vue component Tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PictureCard, {
            localVue,
            vuetify,
            i18n
        });
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('PictureCard');
    })

    it('make sure picture is loaded', () => {
        const picWrapper = wrapper.find('.picture');
        expect(picWrapper.exists()).toBe(true)
    })
    it('Checks for my name', () => {
        const control = 'Jordan Soares';
        const myNameWrapper = wrapper.find('.myName');
        expect(myNameWrapper.html()).toMatch(control);
    })

    it('checks for short description with traduction', async () => {
        const controlFr = 'Développeur web';
        const controlEn = 'web developer';
        const shortDescWrapper = wrapper.find('.shortDesc');
        expect(shortDescWrapper.html()).toContain(controlEn);
        wrapper.vm.$i18n.locale = 'fr';
        await wrapper.vm.$nextTick();
        expect(shortDescWrapper.html()).toContain(controlFr);
    })
})