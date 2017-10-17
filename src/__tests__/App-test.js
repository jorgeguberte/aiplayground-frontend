import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../containers/App';
import Topbar from '../containers/Topbar';

describe('Integrity', ()=>{
    const component = renderer.create(<App/>);
    const mountedWrapper = mount(<App/>);

    test('Should render', ()=>{
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should have root container', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App').exists()).toBe(true);
    });

    test('should have a Topbar', ()=>{
        expect(mountedWrapper.find(Topbar)).toHaveLength(1);
    });

    test('should have a sidebar', ()=>{
        expect(mountedWrapper.find(Sidebar)).toHaveLength(1);
    });

});