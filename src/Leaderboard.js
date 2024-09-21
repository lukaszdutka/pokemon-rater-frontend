import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://poke-backend.drogaprogramisty.site/leaderboard')
      .then(response => {
        setPokemonList(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>
        {pokemonList.map(pokemon => (
          <tr key={pokemon.id}>
            <td><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} /></td>
            <td>{pokemon.name}</td>
            <td>{pokemon.rating}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;