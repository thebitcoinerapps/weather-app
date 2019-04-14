import React from 'react';
import Card from '@material-ui/core/Card';



class Forecast extends React.Component{

    convertTime = (milisectime) => {
        const time = milisectime + '000';
        const newTime = parseInt(time);
        return new Date(newTime).toLocaleDateString();
    }


    render(){
        const forecastData = this.props;
        return(
            <div className="forecast-container">
            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(forecastData.data.daily.data[0].time)}</h4>
            <h3 className="text-summary">{forecastData.data.daily.data[0].summary}</h3>
            <h4 className="text-day">{`${Math.round((forecastData.data.daily.data[0].temperatureHigh))} C`}</h4>
                
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(forecastData.data.daily.data[1].time)}</h4>
            <h3 className="text-summary">{forecastData.data.daily.data[1].summary}</h3>
            <h4 className="text-day">{`${Math.round((forecastData.data.daily.data[1].temperatureHigh))} C`}</h4>
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(forecastData.data.daily.data[2].time)}</h4>
            <h3 className="text-summary">{forecastData.data.daily.data[2].summary}</h3>
            <h4 className="text-day">{`${Math.round((forecastData.data.daily.data[2].temperatureHigh))} C`}</h4>
                
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(forecastData.data.daily.data[3].time)}</h4>
            <h3 className="text-summary">{forecastData.data.daily.data[3].summary}</h3>
            <h4 className="text-day">{`${Math.round((forecastData.data.daily.data[3].temperatureHigh))} C`}</h4>
                
            </Card>
            
            </div>
        );
    }

}

export default Forecast;