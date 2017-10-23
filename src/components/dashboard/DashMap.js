import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import countryData from "../map/us-110m"
import { connect } from 'react-redux'
import { getAllMapData } from '../../ducks/reducer'
//import "./map.css"

class DashMap extends Component {
  constructor() {
    super()
    this.state = {
      countrydata: [],
      allMapData: []

    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  projection() {
    return geoMercator()
      .scale(200)
      .translate([ 960 / 2, 500 / 2 ])
  }

  handleMarkerClick(i) {
    console.log("Marker: ", this.props.allMapData[i].city)
  }
  componentDidMount() {
    this.props.getAllMapData();

    this.setState({
      countrydata: feature(countryData, countryData.objects.states).features
          })
       
  }
  render() {
    console.log("plz work", this.props.allMapData );
    return (
      
      <div className="mapbox">
        <svg width={ 750 } height={ 400 } viewBox="70 40 150 120">
        <g className="counties">
          {
            this.state.countrydata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className="counties"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth={ 0.5 }
              />
            ))
          }
        </g>

        <g className="markers">
          {
            this.props.allMapData.map((visiter, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(visiter.coordinates)[0] }
                cy={ this.projection()(visiter.coordinates)[1] }
                r={ 1 }
                fill="#FF0000"
                stroke="#FF0000"
                className="marker"
                onClick={ () => this.handleMarkerClick(i) }
              />
            ))
          }
        </g>
      </svg>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
     allMapData: state.allMapData
  }
}

export default connect(mapStateToProps, {getAllMapData})(DashMap);