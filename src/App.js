import React from 'react';
import SimpleCard from './components/card';
import CustomizedInputBase from './components/searchbar';

class App  extends React.Component{
    

    render(){
        return(
            <div className="global-container">
            <div className="main-container">
            <h2 className="app-name">The Weather App</h2>
            <CustomizedInputBase />
            <SimpleCard />
            </div>
            </div>
        );
       
    }l
}

export default App;
