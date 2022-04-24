import './App.css';
import Form from './basic/Form';
import MultipleForm from './basic/MultipleForm';
import ShopList from './shopping-list/ShopList';

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <MultipleForm />
      <hr />
      <ShopList />
    </div>
  );
}

export default App;
