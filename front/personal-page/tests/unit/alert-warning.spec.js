import { mount }  from '@vue/test-utils'
import AlertWarning from '@/components/AlertWarning.vue'

describe('Warning alert component testing', () => {
    let wrapper
    let greetingsWrapper
    let sentence1Wrapper
    let sentence2Wrapper
    let reachWrapper

    beforeEach(() => {
        wrapper = mount(AlertWarning)
        greetingsWrapper = wrapper.find('#greetings')
        sentence1Wrapper = wrapper.find('#first_sent')
        sentence2Wrapper = wrapper.find('#second_sent')
        reachWrapper = wrapper.find('a > #reach')
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('AlertWarning')
    })

    it('Should display warning sentences', () => {
        expect(greetingsWrapper.exists()).toBe(true)
        expect(sentence1Wrapper.exists()).toBe(true)
        expect(sentence2Wrapper.exists()).toBe(true)
        expect(reachWrapper.exists()).toBe(true)

    })
    it('Should display proper language warning sentences', async () => {
        const controlEn = ['Greetings','Please','Any bug','reach']
        const controlFr = ['Salutations','rappeler','signalement','contactez']
        
        // English as default mode  
        expect(greetingsWrapper.html()).toContain(controlEn[0])
        expect(sentence1Wrapper.html()).toContain(controlEn[1])
        expect(sentence2Wrapper.html()).toContain(controlEn[2])
        expect(reachWrapper.html()).toContain(controlEn[3])

        wrapper.vm.$i18n.locale = 'fr';
        await wrapper.vm.$nextTick();

        // French mode
        expect(greetingsWrapper.html()).toContain(controlFr[0])
        expect(sentence1Wrapper.html()).toContain(controlFr[1])
        expect(sentence2Wrapper.html()).toContain(controlFr[2])
        expect(reachWrapper.html()).toContain(controlFr[3])
    })
})