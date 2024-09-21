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
          <li className="cursor-pointer" onClick={() => setCurrentPage('home')}>Home</li>
          <li className="cursor-pointer" onClick={() => setCurrentPage('leaderboard')}>Leaderboard</li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Button1</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Button2</button>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;