import React from 'react';
import SimpleCard from './components/card';
import SearchBar from './components/searchbar';
import weatherAPI from './components/darkweatherapi';
import Forecast from './components/forecast';
import Spinner from './components/spinner';

class App  extends React.Component{
    
    state = {geo: null, forecast: null, term: ''};
    isOn = false;

    updateGeo = (location, term)=>{
        this.isOn = true;

        this.setState({term: term});

        this.setState({geo: location});
        const geoCode = (Object.values(this.state.geo).join());

        weatherAPI(geoCode).then((res)=>{
            this.setState({forecast: res.data});
        });

    }


    render(){
        let forecastComp = null;
        let card = null;
        if(this.state.forecast !== null){
            forecastComp = <Forecast data={this.state.forecast} term={this.state.term}/>;
            card = <SimpleCard geoData={this.state.forecast} searchedTerm={this.state.term} />
        }else if(this.isOn){
            this.isOn = false;
            forecastComp = <Spinner />;
        }

        return(
            <div className="global-container">
            <div className="main-container">
            <h2 className="app-name">The Weather App</h2>
            <SearchBar onLocationSubmit={this.updateGeo}/>
            {card}
            <h2 className="app-name">Forecast</h2>
            {forecastComp}
            </div>
            </div>
        );
       
    }
}

export default App;
