import { useState, useEffect } from 'react';
import AnimalCards from './components/AnimalCards';

import MainPresentation from './components/MainPresentation';
import Header from './components/Header';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showPresentation, setShowPresentation] = useState(true);
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
    if (currentScore === 10) {
      console.log(12321);
    }
  }, [bestScore, currentScore]);

  function handlePresentationChange() {
    setShowPresentation(false);
  }
  function incrementScore() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function handleClick() {
    setCurrentScore(0);
    return setIsPlaying((prevState) => !prevState);
  }

  return (
    <div className="App">
      {showPresentation ? (
        <MainPresentation handleClick={() => handlePresentationChange()} />
      ) : (
        <>
          <Header bestScore={bestScore} currentScore={currentScore} />
          <AnimalCards
            animals={animals}
            incrementScore={() => incrementScore()}
            handleClick={() => handleClick()}
          />
        </>
      )}
    </div>
  );
}

export default App;
