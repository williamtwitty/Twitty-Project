import axios from 'axios'

const initialState = {
    user: {},
    clientVisits: [],
    dashboardVisits: [],
    clientMapData: []

}

const GET_USER = 'GET_USER'
const GET_CLIENT_VISITS = 'GET_CLIENT_VISITS'
const GET_DASHBOARD_VISITS = 'GET_DASHBOARD_VISITS'
const GET_CLIENT_MAP_DATA = 'GET_CLIENT_MAP_DATA'

export function getUser() {
    const user = axios.get('/auth/user').then( res => {
        console.log(res.data,"something");
        return res.data
    })
    return {
        type: GET_USER,
        payload: user
    }
}
export function getClientData() {
    console.log('starting get client');
    const clientVisits = axios.get(`/api/getclientvisits`).then((response) => {
        //console.log(response);
        return response.data
    })
    return {
        type: GET_CLIENT_VISITS,
        payload: clientVisits
    }
}
export function getDashboardVisits() {
    console.log('starting get client');
    const dashboardVisits = axios.get(`/api/getdashboard`).then((response) => {
        //console.log(response);
        return response.data
    })
    return {
        type: GET_DASHBOARD_VISITS,
        payload: dashboardVisits
    }
}
export function getClientMapData() {
    const clientMapData = axios.get(`/api/getclientmapdata`).then((response) => {
        return response.data
    })
    return {
        type: GET_CLIENT_MAP_DATA,
        payload: clientMapData
    }
}


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

        case GET_CLIENT_VISITS + '_FULFILLED':
            return Object.assign({}, state, {clientVisits: action.payload})
    
        case GET_DASHBOARD_VISITS + '_FULFILLED':
            return Object.assign({}, state, {dashboardVisits: action.payload})

        case GET_CLIENT_MAP_DATA + '_FULFILLED':
            return Object.assign({}, state, {clientMapData: action.payload})

        default:
            return state;
    }
}