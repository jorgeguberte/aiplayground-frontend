import React from 'react'
import {shallow, mount, renbder} from 'enzyme'
import renderer from 'react-test-renderer'

import Topbar from '../containers/Topbar';


describe('integrity', ()=>{   
    test('should render', ()=>{
        const component = renderer.create(<Topbar/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    const wrapper = mount(<Topbar/>);

    test('it has a title', ()=>{
        const title = wrapper.find('.Topbar-title');
        expect(title.text()).toBe('AIPLAYGROUND');
    })
});
