import React, { Component } from 'react';
import axios from 'axios'
import { getDashboardVisits } from '../../ducks/reducer'
import { connect } from 'react-redux'
import './Dashboard.css'
import DashMap from './DashMap'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          visits:[],
          clients:[],
          dashboardVisits:[]
        }
      }
    
      componentDidMount() {
       this.props.getDashboardVisits();
        
        axios.get('/api/getvisits').then((response) =>{
          this.setState({
            visits: response.data[0].count
          })
        })
        axios.get('/api/getclients').then((clientTotal) =>{
          this.setState({
            clients: clientTotal.data[0].count
          })
        })
      }
       
      render() {
        
    const dashboardUsersList = this.props.dashboardVisits.map((user, i) => {
     // console.log(user);
      return <div className="user-container" key= {i}> <div className="name"> { user.user_name } </div>
             <div className="name"> visits: { user.count }</div> </div>
    })

        return (
          <div className="dashboard">
            <div className="inner-dashboard">
              <div className="header-dashboard">Twitty Tracker Dashboard</div>
              <div className="totals">
              <div className="total-container">Total Clients: {this.state.clients}</div>
              <div className="total-container">Total Visits from all Clients: {this.state.visits}</div>
              </div>
                <div>
                  {dashboardUsersList}
                </div>
              <DashMap/>
            </div>
          </div>
        )
        }
    
}
function mapStateToProps(state){
  return {
    dashboardVisits: state.dashboardVisits
  }
}

export default connect(mapStateToProps, {getDashboardVisits})(Dashboard);