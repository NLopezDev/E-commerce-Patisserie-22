import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Mi Patisserie</h1>
      <ItemListContainer greeting="Texto ItemListContainer"></ItemListContainer>
    </div>
  );
}

export default App;
