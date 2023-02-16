import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { PokemonCard } from '../components/PokemonCard';

  function Home({pokemonFiltered, setPokemonFiltered, allPokemon}) {

    function handleChange(e) {
        const value = e.target.value;
        const regex = new RegExp(value, 'gi');
        const filtered = allPokemon.filter((pokemon) => {
          return pokemon.name.match(regex);
        });
        setPokemonFiltered(filtered);
    }

    return(
        <>
            <InputGroup onChange={handleChange} className="mb-3 mx-auto" style={{width: '50rem'}}>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                    placeHolder="Search Pokemon"
                    aria-label="Search Pokemon"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <h1 className="text-center">PokeVerse</h1>
            <div className="container">
                <div className="row">
                    {pokemonFiltered.map((pokemon, idx) => (
                        <div className="col-3" key={idx}>
                            <PokemonCard
                            name={pokemon.name} 
                            url={pokemon.url}
                            pokemonFiltered={pokemonFiltered}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
  }

export { Home };