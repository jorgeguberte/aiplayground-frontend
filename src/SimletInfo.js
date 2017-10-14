import React from 'react';
import ReactDOM from 'react-dom';


export default class SimletInfo extends React.Component{
    render(){
        return(
            <div className="SimletInfo">
                <h1 className="SimletInfo-title">{this.props.title}</h1>
                <p className="SimletInfo-description">{this.props.description}</p>
            </div>
        );
    }
}