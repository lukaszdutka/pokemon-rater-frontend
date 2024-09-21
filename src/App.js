// App.js
import React, {useState} from 'react';
import Leaderboard from './Leaderboard';
import Question from './Question';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Question/>;
      case 'leaderboard':
        return <Leaderboard/>;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('leaderboard')}>Leaderboard</li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;