import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
    </div>
  );
}

export default App;
