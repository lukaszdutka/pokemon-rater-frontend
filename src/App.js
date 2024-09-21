import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://poke-backend.drogaprogramisty.site/question')
      .then(response => {
        setQuestion(response.data);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (winnerPokemonId) => {
    axios.post('https://poke-backend.drogaprogramisty.site/answer', {
      id: question.id,
      winnerPokemonId: winnerPokemonId
    }).then(() => {
      // Optionally, reload question or indicate success
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Which one is cooler?</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{margin: '0 20px'}}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${question.firstPokemonId}.png`} alt="First Pokemon"/>
          <button onClick={() => handleAnswer(question.firstPokemonId)}>cooler</button>
        </div>
        <div style={{margin: '0 20px'}}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${question.secondPokemonId}.png`} alt="Second Pokemon"/>
          <button onClick={() => handleAnswer(question.secondPokemonId)}>cooler</button>
        </div>
      </div>
    </div>
  );
}

export default App;