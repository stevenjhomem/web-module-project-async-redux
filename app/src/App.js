import { fetchQuotes } from './actions';
import './App.css';
import QuoteContainer from './components/QuoteContainer';
 

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Do you need a motivational quote? Click the button below!</h1>
      </header>
      <div className="mainBody">
       <QuoteContainer/>
      </div>
    </div>
  );
}

export default App;
