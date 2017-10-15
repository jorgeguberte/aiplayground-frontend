import React, {Component} from 'react';
import '../styles/App.css';

import Topbar from './Topbar';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Topbar />
            </div>
        )
    }
}  
export default App;