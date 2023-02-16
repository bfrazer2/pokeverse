import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './routes/Home';
import { PokemonDetails } from './routes/PokemonDetails';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);

  async function fetchPokemon(){
    const response = await fetch(pokeApi);
    const data = await response.json();
    setAllPokemon(data.results);
    setPokemonFiltered(data.results);
  }

  useEffect( () => {
    fetchPokemon();
  }, []);

  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home 
            pokemonFiltered={pokemonFiltered}
            setPokemonFiltered={setPokemonFiltered}
            allPokemon={allPokemon} />}
          />
          <Route path="/:name" element={<PokemonDetails/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    );
}

export { App };
