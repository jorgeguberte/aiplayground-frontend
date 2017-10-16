import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';

import Sidebar from '../containers/Sidebar';

describe('integrity', ()=>{
    const component = renderer.create(<Sidebar/>);
    const mountedWrapper = mount(<Sidebar/>);

    test('Should render', ()=>{
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})