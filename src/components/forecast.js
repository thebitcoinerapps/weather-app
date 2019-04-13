import React from 'react';
import Card from '@material-ui/core/Card';



class Forecast extends React.Component{

    forecastData = this.props;
    convertTime = (milisectime) => {
        const time = milisectime + '000';
        const newTime = parseInt(time);
        return new Date(newTime).toLocaleDateString();
    }


    render(){
        return(
            <div className="forecast-container">
            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(this.forecastData.data.daily.data[0].time)}</h4>
                
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(this.forecastData.data.daily.data[1].time)}</h4>
                
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(this.forecastData.data.daily.data[2].time)}</h4>
                
            </Card>

            <Card className="forecast-card">
            <h4 className="text-day">{this.convertTime(this.forecastData.data.daily.data[3].time)}</h4>
                
            </Card>
            
            </div>
        );
    }

}

export default Forecast;