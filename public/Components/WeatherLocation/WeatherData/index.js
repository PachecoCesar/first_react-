import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
     CLOUD, 
     CLOUDY, 
     SUN,  
     RAIN, 
     SNOW, 
     WINDY,
     FOG,
} from '../../../constants/weathers';

const WeatherData = () => ( 
    <div>
        <WeatherTemperature 
            temperature={20}
            weatherState={FOG} 
        />
        <WeatherExtraInfo humity={80} wind={"10m/s"}/>
    </div>
);

export default WeatherData; 

