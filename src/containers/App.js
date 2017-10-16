import React, {Component} from 'react';
import '../styles/App.css';

import Topbar from './Topbar';
import Sidebar from './Sidebar';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Topbar />
                <Sidebar />
            </div>
        )
    }
}  
export default App;