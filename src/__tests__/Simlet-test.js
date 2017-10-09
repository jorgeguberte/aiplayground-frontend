import React from 'react';
import Simlet from '../Simlet';
import renderer from 'react-test-renderer';

test('it is imported correctly', ()=>{
    const component = renderer.create(
        <Simlet/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})