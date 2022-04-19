import './App.css';
import Game from './CoinFlip/Game';
import IconMutationState from './IconMutationState';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div className="App">
      <ScoreKeeper />
      <IconMutationState />
      <Lottery />
      <Game /> 
    </div>
  );
}

export default App;
