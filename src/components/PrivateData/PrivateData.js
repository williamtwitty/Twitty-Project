import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser, getClientData } from '../../ducks/reducer'
import axios from 'axios'
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
                                 <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/021061378410/media/73393342893/small/1507079037270/enhance"
                            /></a>
                         Your Private Website Data
                        <a href='http://localhost:3005/auth/logout'><button>LOGOUT</button></a>
                    </div>
                    <div className="client-info">Client Information
                        <div className="visits-privatedata">Username: <h3>{this.props.clientVisits[3]}</h3> </div>
                        <div className="visits-privatedata"> <img src={this.props.clientVisits[4]} alt="user image"/> </div>
                    </div>
                        <div className="api-container">API KEY <h3>{this.props.clientVisits[5]}</h3> </div>
                    <div className="visits-container">
                    <div className="visits-privatedata"> Total visit count: <p>{this.props.clientVisits[0]}</p> </div>
                    <div className="visits-privatedata"> Last weeks visit count: <p>{this.props.clientVisits[1]}</p>  </div>
                    <div className="visits-privatedata"> Today's visit count:  <p>{this.props.clientVisits[2]}</p>  </div>
                    <div className="visits-privatedata"> Average visit time:  
                        <p>{this.props.clientVisits[6]}:{this.props.clientVisits[7]} </p>  </div>
                    </div>
                    <WorldMap />
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