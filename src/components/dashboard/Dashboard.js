import React, { Component } from 'react';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          visits:[]
        }
      }
    
      componentDidMount() {
        
        axios.get('/api/getvisits').then((response) =>{
          //console.log(response);
          this.setState({
            visits: response.data[0].count
          })
        })
      }
       
      render() {
    //console.log(this.state.visits);
        return (
          <div>
            <div>Total Visits from all Clients: {this.state.visits}
              {/* {this.state.visits.map((visit, i) => {
                console.log(visit);
                return <div key= {i}>{visit.count}</div>
              })} */}
            </div>
            </div>
        )
        }
    
}

export default Dashboard;