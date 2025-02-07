import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PokemonCard({ url, name, pokemonFiltered}) {

  const [onePokemon, setOnePokemon] = useState({});

  async function fetchOnePokemon() {
    const response = await fetch(url);
    const data = await response.json();
    setOnePokemon(data);
  }

  useEffect( () => {
    fetchOnePokemon();
  }, [pokemonFiltered])

  return (
  <div>
    { onePokemon.sprites ? (
      <div class="col-4" className = "mb-3">
        <Card style={{width: '18rem', height: '420px'}} bg="light">
          <Card.Img variant="top" src={onePokemon.sprites.front_default}></Card.Img>
          <Link to={`/${name}`}><Card.Header className="text-center text-capitalize">{name}</Card.Header></Link>  
          <Card.Text as="div" className="text-capitalize">
            <ul>Abilities:
              {onePokemon.abilities.map((ability, idx) => (
              <li key={idx}>{ability.ability.name}</li>))}
            </ul>
          </Card.Text>
        </Card>
      </div>
    ) : null }
  </div>
  );
}

export { PokemonCard };
