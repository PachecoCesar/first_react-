import React, { Component } from 'react';
import LocationList from './Components/LocationList';

import './App.css';
const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Lima,pe',
  'Madrid, es',  
];

class App extends Component {

    handleSelectedLocation = city => {
      console.log(`handleSelectedLocation ${city}`);
    }
    render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <LocationList cities={cities}
          onSelectedLocation={this.handleSelectedLocation} ></LocationList>

        </header>
      </div>
    );
  }  
}

export default App;
