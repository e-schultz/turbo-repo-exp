import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

/*
thought I needed to setup Veutify here, I had created the test/setup.js, 
but was still getting the error that 'v-row not found' for this test. 

but - I forgot update the jest.config.js file to include the setupFiles,
adding that removed the need for this.
*/
/*
import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
*/
