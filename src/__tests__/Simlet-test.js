import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';


import Simlet from '../Simlet';
import SimletInfo from '../SimletInfo';

/**
 * PROPS TESTING
 */
describe('props integrity', ()=>{
    //Mock props
    const _props = {
        title: 'Simlet Test title', 
        description: 'Simlet Test description'
    };
    const wrapper = mount(
        <Simlet 
            title={_props.title} 
            description={_props.description}
        />
    );
    
    
        describe('title',()=>{
            test('should be defined', ()=>{
                expect(wrapper.props().title).toBeDefined();
            });
            test('should have content', ()=>{
                expect(wrapper.props().title).toBe(_props.title);
            })
        });

        describe('description', ()=>{
            test('should be defined', ()=>{
                expect(wrapper.props().description).toBeDefined();
            });
            test('should have content', ()=>{
                expect(wrapper.props().description).toBe(_props.description);
            })
        });


});



    test('should render', ()=>{
        const component = renderer.create(<Simlet/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


