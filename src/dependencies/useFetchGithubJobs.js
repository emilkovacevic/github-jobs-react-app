import {useReducer, useEffect} from 'react'
import axios from 'axios'

// temp api url --- cors issue on localhost
// const GITHUB_API_URL = 'http://localhost:3000/jobs.json'   

const GITHUB_API_URL = 'https://jobs.github.com/positions.json'   

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, jobs:[]}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs:[]}
        default:
            return state
    }
}

export default function useFetchGithubJobs(params, page) {

    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        const cancelREQ_Token = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(GITHUB_API_URL, 
            {
                cancelREQ_Token: cancelREQ_Token.token,
                params: { markdown: true, page: page, ...params }
            }
        ).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } })
        }).catch(e => {
            if(axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { jobs: e } })
        })
        return()=>{
            cancelREQ_Token.cancel()
        }
    }, [params, page])

    return state
}