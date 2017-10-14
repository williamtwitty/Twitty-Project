import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser, getClientData } from '../../ducks/reducer'
import './PrivateData.css'
import WorldMap from '../map/map'


class PrivateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
          clientVisits:[]
        }
      }
    
        componentDidMount() {
            //this.props.getUser();
            this.props.getClientData();
        }
        


    render() {
       console.log(this.props.clientVisits);
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
                        <div className="visits-privatedata">Username: <h3>{this.props.clientVisits[3]}</h3> </div>
            
                        <div className="api-container">API KEY <h3>{this.props.clientVisits[5]}</h3> </div>
                    </div>
                    <div className="first-container">

                    <div className="visits-container">
                    <div className="visits-privatedata"> Total view count:
                         <p>{this.props.clientVisits[0]}</p> </div>
                    <div className="visits-privatedata"> Last weeks view count: <p>{this.props.clientVisits[1]}</p>  </div>
                    <div className="visits-privatedata"> Today's view count:  <p>{this.props.clientVisits[2]}</p>  </div>
                    <div className="visits-privatedata"> Average visit time:(hr:min:sec)  
                        <p>{this.props.clientVisits[6]} </p>  </div>
                    </div>
                    <div className="visits-container">
                       <div className="visits-privatedata"> Max views  <p>{this.props.clientVisits[7]}</p>  </div>
                       <div className="visits-privatedata"> Distinct Visiters  <p>{this.props.clientVisits[9]}</p>  </div>
                       <div className="visits-privatedata"> Percent of one time  <p>{this.props.clientVisits[8]/this.props.clientVisits[9] * 100}%</p>  </div>
                       <div className="visits-privatedata"> Online users  <p>{this.props.clientVisits[10]}</p>  </div>
                    </div>
                    </div>
                        <div className="map-container">
                        <WorldMap />
                        </div>
   
                   
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