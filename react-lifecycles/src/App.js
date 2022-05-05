import './App.css';
import RMCharacter from './Basics/RMCharacter';
import Timer from './Basics/Timer';
import ZenQuote from './Basics/ZenQuote';

function App() {
  return (
    <div className="App">
      <Timer /> 
      <ZenQuote />
      <RMCharacter character='46' />
      <RMCharacter character='89' />
    </div>
  );
}

export default App;
