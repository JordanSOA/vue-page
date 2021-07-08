import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue"

describe('Footer.vue component testing', () => {
    let wrapper;
    let $t = () => {};
    
    beforeEach(() => {
        wrapper = mount(Footer, {mocks: $t})
    })

    it('checks for component right name', () => {
        expect(wrapper.name()).toMatch('Footer');
    })

    it('Should display proper month and year', () => {
        const ctrlMonth = new Date().getMonth() + 1;
        const ctrlYear = new Date().getFullYear();
        const control = ctrlMonth +"/"+ ctrlYear;
        const dateWrapper = wrapper.find('.footerDate');
        expect(dateWrapper.html()).toMatch(control);
    })

    it('Checks for my name', () => {
        const control = 'Jordan Soares';
        const myNameWrapper = wrapper.find('.myName');
        expect(myNameWrapper.html()).toMatch(control);
    })
})