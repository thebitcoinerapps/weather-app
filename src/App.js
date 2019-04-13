import React from 'react';
import SimpleCard from './components/card';
import SearchBar from './components/searchbar';
import weatherAPI from './components/darkweatherapi';

class App  extends React.Component{
    
    state = {geo: null, forecast: null};

    updateGeo = (location)=>{
        this.setState({geo: location});
        const geoCode = (Object.values(this.state.geo).join());

        weatherAPI(geoCode).then((res)=>{
            this.setState({forecast: res.data});
            console.log(this.state.forecast);
            console.log(this.state.geo);
        });

    }

    render(){
        return(
            <div className="global-container">
            <div className="main-container">
            <h2 className="app-name">The Weather App</h2>
            <SearchBar onLocationSubmit={this.updateGeo}/>
            <SimpleCard />
            </div>
            </div>
        );
       
    }l
}

export default App;
