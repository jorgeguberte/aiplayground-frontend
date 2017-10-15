import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../containers/App';

describe('Integrity', ()=>{
    const component = renderer.create(<App/>);

    test('Should render', ()=>{
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should have root container', ()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App').exists()).toBe(true);
    })
});