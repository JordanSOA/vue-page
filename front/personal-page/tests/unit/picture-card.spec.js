import { mount } from '@vue/test-utils'
import PictureCard from '@/components/PictureCard.vue'

describe('PictureCard.vue component Tests', () => {
    let wrapper
    const $t = () => {}
    
    beforeEach(() => {
        wrapper = mount(PictureCard, {
            mocks:{ $t }
        });
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('PictureCard');
    })

    it('make sure picture is loaded', () => {
        const picWrapper = wrapper.find('.picture');
        expect(picWrapper.exists).toBe(true)
    })
    it('Checks for my name', () => {
        const control = 'Jordan Soares';
        const myNameWrapper = wrapper.find('.myName');
        expect(myNameWrapper.html()).toMatch(control);
    })
    it('checks for short description with traduction', () => {
        const controlEn = 'Développeur Web, certifié en "Agilité" avec 2 ans d\'expérience dans la programmation Front et Back End. ';
        const controlFr = 'Web Developer, qualified  in "Agility" with 2 years of experience in Front and Back End programming.';
        const shortDescWrapper = wrapper.find('.shortDesc');
        expect(shortDescWrapper.html()).toMatch(controlFr);
        wrapper.vm.$i18n.locale = 'en';
        await wrapper.vm.$nextTick();
        expect(shortDescWrapper.html()).toMatch(controlEn);
    })
})