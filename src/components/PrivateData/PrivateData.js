import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser, getClientData } from '../../ducks/reducer'
import './PrivateData.css'
import WorldMap from '../map/map'
import OnlineMap from '../map/onlineMap'
import PieChart from '../chart/piechart'


class PrivateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
          clientVisits:[],
          toggleMap: true
        }
        this.handleClick = this.handleClick.bind(this)
      }
    
        componentDidMount() {
            this.props.getClientData();
        }
        handleClick() {
            this.setState(prevState => ({
                toggleMap: !prevState.toggleMap
            }))
        }


    render() {
        // console.log(this.props.clientVisits, 'hi');
    //    const pieChart =  this.props.clientVisits.map((nums, i) => {
    //        return <div key={i}><PieChart returning={this.props.clientVisits[9]} onetime={this.props.clientVisits[8]}  /> {i}</div>
    //    })
        console.log(this.props.clientVisits[9], this.props.clientVisits[8]);
        return (
            <div className="privatedata">
                <div className="inner-privatedata">
                    <div className="header-privatedata">
                            <a href="/">
                                 <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021061378410/media/73393342893/small/1507079037270/enhance" alt= "colored logo"
                            /></a>
                         Your Private Website Data
                        <a href='http://localhost:3005/auth/logout'><button>LOGOUT</button></a>
                    </div>
                    <div className="client-info">
                        <div className="username-container">Username: <p>{this.props.clientVisits[3]}</p> </div>
            
                        <div className="api-container">PRIVATE API KEY: <h4>{this.props.clientVisits[5]}</h4> </div>
                    </div>
                    <div className="first-container">
                        
                        <div className="visits-container">
                            <div className="visits-privatedata"> Total view count:
                                 <p>{this.props.clientVisits[0]}</p> </div>
                            <div className="visits-privatedata"> Last weeks view count: <p>{this.props.clientVisits[1]}</p>  </div>
                            <div className="visits-privatedata"> Today's view count:  <p>{this.props.clientVisits[2]}</p>  </div>
                            <div className="visits-privatedata"> Avg. Visit Duration: <p>{this.props.clientVisits[6]} </p>  </div>
                        {/* </div>
                         <div className="visits-container"> */}
                            <div className="visits-privatedata"> Most Single Day views  <p>{this.props.clientVisits[7]}</p>  </div>
                            <div className="visits-privatedata"> Number of Visiters  <p>{this.props.clientVisits[9]}</p>  </div>
                            <div className="visits-privatedata"> One Time Visiters  <p>{this.props.clientVisits[8]}</p>  </div>
                            <div className="visits-privatedata"> Online users  <p>{this.props.clientVisits[10]}</p>  </div>
                        </div>
                        
                        <div className="pie-container">
                            {this.props.clientVisits[9] ?<PieChart returning={this.props.clientVisits[9]- this.props.clientVisits[8]} onetime={this.props.clientVisits[8]}  />: null }
                        </div>
                    </div>
                    <div className="toggle-button">
                        <button onClick={this.handleClick}> View Online Users </button>
                        </div>
                            {this.state.toggleMap ? 
                        <div className="map-container">
                        <WorldMap />
                        </div>:
                        <div className="map-container">
                        <OnlineMap />
                        </div>}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
       user: state.user,
       clientVisits: state.clientVisits
    }
}

export default connect(mapStateToProps, {getUser, getClientData})(PrivateData);