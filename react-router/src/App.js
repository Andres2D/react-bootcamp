import './App.css';
// import Main from './real-routing/Main';// import FakeApp from './basics-not-ideal/FakeApp';
import AppVending from './vending-machine/App-vending';

function App() {
  return (
    <div className="App">
      {/* <FakeApp /> */}
      {/* <Main /> */}
      <AppVending />
    </div>
  );
}

export default App;
