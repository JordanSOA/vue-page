import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/components/Home.vue'
import Vuetify from 'vuetify'
const localVue = new createLocalVue();
const vuetify = new Vuetify();

describe('Home.vue component Tests', () => {
    let wrapper
    const $t = () => {}
    
    beforeEach(() => {
        wrapper = shallowMount(Home, {
            localVue,
            vuetify,
            mocks:{ $t }
        });
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('Home');
    })
})

