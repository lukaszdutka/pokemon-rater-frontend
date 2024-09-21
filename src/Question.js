import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Question() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://poke-backend.drogaprogramisty.site/question')
      .then(response => {
        setQuestion(response.data);
        setLoading(false);
      });
  }, []);

  const capitalizeFirstLetter = name => {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };


  const handleAnswer = (winnerPokemonId) => {
    axios.post('https://poke-backend.drogaprogramisty.site/answer', {
      id: question.id,
      winnerPokemonId: winnerPokemonId
    }).then(() => {
      axios.get('https://poke-backend.drogaprogramisty.site/question')
        .then(response => {
          setQuestion(response.data);
          setLoading(false);
        });
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-center py-12">
      <h1 className="text-white text-2xl">Which one is cooler?</h1>
      <div className="flex justify-center mt-8">
        <h2 className="text-white text-xl">{capitalizeFirstLetter(question.firstPokemonName)}</h2>
        <div className="mx-5">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${question.firstPokemonId}.png`}
            alt="First Pokemon"/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                  onClick={() => handleAnswer(question.firstPokemonId)}>cooler
          </button>
        </div>
        <h2 className="text-white text-xl">{capitalizeFirstLetter(question.secondPokemonName)}</h2>
        <div className="mx-5">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${question.secondPokemonId}.png`}
            alt="Second Pokemon"/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                  onClick={() => handleAnswer(question.secondPokemonId)}>cooler
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;