import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue component Tests', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Home);
    })

    it('checks for component right name', () => {
        console.log(process.env.VUE_APP_NAME);
        expect(wrapper.name()).toMatch('Home');
    })
})

