import React from 'react';

class Station extends React.Component {

  constructor() {
    super()

    this.state = {
      arrivals: []
    }
  }

    componentDidMount() {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=ba92028c4ac34d1c89d827de312bb41d&max=6&mapid=" +
          this.props.station.STOPS[0].MAP_ID +
          "&outputType=JSON",
        // { mode: "cors" }
      )
      .then(resp => resp.json())
      .then(arrivals => this.setState({
        arrivals: arrivals
      }));
    }

  render() {
    // console.log(this.props.station)
    // console.log(this.state.arrivals.ctatt)
    debugger;

    return (
      <div>
      <ul><button onClick = {this.handleClick}>{this.props.station.STATION_NAME}</button></ul>
      </div>
    );
  }
}

export default Station
