import React from 'react';
import ReactDOM from 'react-dom';

import SimletInfo from './SimletInfo';


export default class Simlet extends React.Component{
    //#INVESTIGATE: How do props trickle down?
    render(){
        return(
            <SimletInfo title={this.props.title} description={this.props.description}/>
        );
    }
}