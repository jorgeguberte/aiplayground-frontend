import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/Topbar.css'

export default class Topbar extends React.Component{
    render(){
        return(
            <div className="Topbar row">
                <span className="Topbar-title">AIPLAYGROUND</span>
            </div>
        )
    }
}

