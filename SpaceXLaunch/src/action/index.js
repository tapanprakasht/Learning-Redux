import { apiBaseURL } from '../utils/constants';
import axios from 'axios';

export const fetchLatestLauchDetails = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_DATA'})
        return axios.get(`${apiBaseURL}/launches/latest`)
               .then(res => {
                   dispatch({type:'FETCHING_DATA_SUCCESS',payload: res.data })
               })
               .catch(err => {
                   dispatch({type:'FETCHING_DATA_FAILED', payload: err.data })
               })
    }
}