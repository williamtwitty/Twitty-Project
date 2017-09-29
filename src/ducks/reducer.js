import axios from 'axios'

const initialState = {
    user: {},
    clientVisits: []

}

const GET_USER = 'GET_USER'
const GET_CLIENT_VISITS = 'GET_CLIENT_VISITS'

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


export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

        case GET_CLIENT_VISITS + '_FULFILLED':
            return Object.assign({}, state, {clientVisits: action.payload})
    
        default:
            return state;
    }
}