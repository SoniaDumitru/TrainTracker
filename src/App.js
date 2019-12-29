import React from 'react';
import './App.css';
import stations from './db.json'
import StationCollection from './StationCollection.js'

const API_arrivals = "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=e22345c93ad34bad94edbc2a46fa90ad&stpid=30162&outputType=JSON"
const API_stations = "https://github.com/thomasjfox1/cta-stations"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      arrivals: [],
      stations: stations,
      search: ''
    }
  }

  render() {
    // console.log(this.state.stations)
    // console.log(this.state.arrivals)
    return (
      <div className="App">
        <header className="App-header">
        <StationCollection

        stations={this.state.stations}
        arrivals={this.state.arrivals}/>

        </header>
      </div>
    );
  }
}


export default App;
