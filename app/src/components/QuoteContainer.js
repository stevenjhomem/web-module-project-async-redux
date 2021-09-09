import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes, getRandomQuote } from '../actions';

const QuoteContainer = (props) => {

    useEffect(()=>{
        props.fetchQuotes();
    },[]);

    const handleClick = () => {
        props.getRandomQuote();
    }

    return(
        <div className="quoteContainer">
            <button onClick={handleClick} >Click Me!</button>
            <p>{props.quote.author} once said:</p>
            <h3>{props.quote.text}</h3>
        </div>
    )

}

const mapStateToProps = (state) => {
    return ({
        quotes: state.quotes,
        quote: state.quote,
    })
}

export default connect(mapStateToProps, {fetchQuotes, getRandomQuote}) (QuoteContainer);