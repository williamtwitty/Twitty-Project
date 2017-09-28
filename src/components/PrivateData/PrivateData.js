import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUser, getClientData } from '../../ducks/reducer'
import axios from 'axios'

class PrivateData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
          clientVisits:{}
        }
      }
    
        componentDidMount() {
            this.props.getUser();
            this.props.getClientData();
        }
        
    //   componentDidMount() {
    //       //this.props.getUser()
        
    //     axios.get('/api/getclientvisits').then((response) =>{
    //       //console.log(response);
    //       this.setState({
    //         visits: response.data[0].count
    //       })
    //     })
    //   }

    render() {
       //console.log(this.props.clientVisits);
        return (
            <div>
                Your total number of visits are: {this.props.clientVisits}
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