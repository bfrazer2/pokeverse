import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails () {

    const [pokemon, setPokemon] = useState("");
    const params = useParams();


    async function fetchOnePokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
      const data = await response.json();
      setPokemon(data);
    }
    
    useEffect( () => {
      fetchOnePokemon();
    }, []);
      
      return (
        <>
          {pokemon.sprites ? (
            <div>
              <p>height: {pokemon.height}</p>
              <p>weight: {pokemon.weight}</p>
              <div>
              {pokemon.types.map((type, idx) => (<p key = {idx} >{type.type.name}</p>))}
              </div>
              <div>
              {pokemon.stats.map((stat, idx) => (<p key = {idx}>{stat.stat.name}: {stat.base_stat}</p>))}
              </div>
              <div>
              {pokemon.abilities.map((ability, idx) => (<p key = {idx}>{ability.ability.name}</p>))}
              </div>
            </div>
          ) : <p>Loading...</p>}
        </>
      );
      
}

export { PokemonDetails };