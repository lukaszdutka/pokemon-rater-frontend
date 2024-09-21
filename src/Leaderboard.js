import React, {useEffect, useState} from 'react';
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
    <div className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Leaderboard</h1>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
        <tr>
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Rating</th>
        </tr>
        </thead>
        <tbody>
        {pokemonList.map(pokemon => (
          <tr key={pokemon.id}>
            <td className="border px-4 py-2">
              <img className="w-24 h-24"
                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                   alt={pokemon.name}/>
            </td>
            <td className="border px-4 py-2 text-center">{pokemon.name}</td>
            <td className="border px-4 py-2 text-center">{pokemon.rating}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;