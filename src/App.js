import React from 'react';
import SimpleCard from './components/card';
import SearchBar from './components/searchbar';
import weatherAPI from './components/darkweatherapi';
import Forecast from './components/forecast';

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
        let forecastComp = null;
        if(this.state.forecast !== null){
            forecastComp = <Forecast data={this.state.forecast}/>;
        }else{}

        return(
            <div className="global-container">
            <div className="main-container">
            <h2 className="app-name">The Weather App</h2>
            <SearchBar onLocationSubmit={this.updateGeo}/>
            <SimpleCard />
            <h2 className="app-name">Forecast</h2>
            {forecastComp}
            </div>
            </div>
        );
       
    }l
}

export default App;
