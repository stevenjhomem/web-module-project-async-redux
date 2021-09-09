import axios from 'axios';

export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTES_FAIL = "FETCH_QUOTE_FAIL";
export const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE";

export const fetchQuotes = () => dispatch => {
    axios.get("https://type.fit/api/quotes")
        .then(response => {
            dispatch({type: FETCH_QUOTES_SUCCESS, payload:response.data})
        })
        .catch( error => {
            dispatch({type:FETCH_QUOTES_FAIL, payload: error})
        })
}

export const getRandomQuote = () => {
    return({type: GET_RANDOM_QUOTE})
}
