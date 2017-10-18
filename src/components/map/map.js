
import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import countryData from "./us-110m"
import { connect } from 'react-redux'
import { getClientMapData } from '../../ducks/reducer'
import "./map.css"

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      countrydata: [],
      clientMapData: []
    }
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  projection() {
    return geoMercator()
      .scale(200)
      .translate([ 960 / 2, 500 / 2 ])
  }

  handleMarkerClick(i) {
    console.log("Marker: ", this.props.clientMapData[i].city)
  }
  componentDidMount() {
    this.props.getClientMapData();

    this.setState({
      countrydata: feature(countryData, countryData.objects.states).features
          })
       
  }
  render() {
    console.log("plz work", this.props.clientMapData );
    return (
      
      <div className="mapbox">
        <svg width={ 850 } height={ 500 } viewBox="70 45 150 120">
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
            this.props.clientMapData.map((visiter, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(visiter.coordinates)[0] }
                cy={ this.projection()(visiter.coordinates)[1] }
                r={ 1 }
                fill="#2d92ff"
                stroke="#2d92ff"
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
     clientMapData: state.clientMapData
  }
}

export default connect(mapStateToProps, {getClientMapData})(WorldMap);

