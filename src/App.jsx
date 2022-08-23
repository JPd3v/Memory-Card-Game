import { useState, useEffect } from 'react';
import AnimalCards from './components/AnimalCards';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const Data = await fetch(
          'https://zoo-animal-api.herokuapp.com/animals/rand/10'
        );
        const response = await Data.json();
        setAnimals(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isPlaying]);
  useEffect(() => {
    if (currentScore >= bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);

  function incrementScore() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function handleClick() {
    setCurrentScore(0);
    return setIsPlaying((prevState) => !prevState);
  }

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        {' '}
        play again{' '}
      </button>
      <ScoreBoard bestScore={bestScore} currentScore={currentScore} />
      <AnimalCards
        animals={animals}
        incrementScore={() => incrementScore()}
        handleClick={() => handleClick()}
      />
    </div>
  );
}

export default App;
