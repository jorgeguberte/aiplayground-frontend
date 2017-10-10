import React from 'react';

import {shallow, mount, render} from 'enzyme';


import Simlet from '../Simlet';

describe('A suite', function(){
    it('should render without throwing an error', function(){
        expect(shallow(<Simlet/>).contains(<div className="foo">Bar</div>)).toBe(true);
    })
});