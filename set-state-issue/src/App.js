import './App.css';
import IconMutationState from './IconMutationState';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div className="App">
      <ScoreKeeper />
      <IconMutationState />
      <Lottery />
    </div>
  );
}

export default App;
