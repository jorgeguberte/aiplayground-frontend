import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';

import SimletInfo from '../SimletInfo';


describe('prop acquisition', ()=>{
    const _props = {
        title: 'SimletInfo test title',
        description: 'SimletInfo test description'
    }
    
    const wrapper = mount(<SimletInfo title={_props.title} description={_props.description}/>);


    test('it has props.title', ()=>{
        const h1 = wrapper.find('.SimletInfo-title');
        expect(h1.text()).toBe('SimletInfo test title');
    });

    test('it has props.description', ()=>{
        const p = wrapper.find('.SimletInfo-description');
        expect(p.text()).toBe('SimletInfo test description');
    })

    
})