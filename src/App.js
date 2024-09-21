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
    <div className="bg-gray-800 min-h-screen text-white">
      <nav className="flex justify-between items-center p-4">
        <ul className="flex space-x-4">
          <li className="cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => setCurrentPage('home')}>Home
          </li>
          <li className="cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => setCurrentPage('leaderboard')}>Leaderboard
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;