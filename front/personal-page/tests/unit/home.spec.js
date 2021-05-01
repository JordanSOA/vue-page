import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue component Tests', () => {
    let wrapper
    const $t = () => {}
    
    beforeEach(() => {
        wrapper = mount(Home, {
            mocks:{ $t }
        });
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('Home');
    })
})

