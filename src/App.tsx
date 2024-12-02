import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Items, Pokemon, Pokemons } from './pages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/pokemons/:name' element={<Pokemon/>}></Route>
            <Route path='/pokemons' element={<Pokemons/>}></Route>
            <Route path='/items' element={<Items/>}></Route>
            <Route path='/' element={<Pokemons/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
