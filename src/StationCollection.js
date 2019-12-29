import React from 'react';
import Station from './Station.js'

class StationCollection extends React.Component {
  render() {
    // console.log(this.props.stations.MAP_ID)
    return (
      <div>
        <h1>Hello From Station Collection</h1>
        {this.props.stations.map( station => <Station key = {station.MAP_ID} station = {station}/>)}
      </div>
    );
  }
}

export default StationCollection
