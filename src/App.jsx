import { useState, useEffect } from 'react';
import AnimalCards from './components/AnimalCards';
import MainPresentation from './components/MainPresentation';
import Header from './components/Header';
import WinningModal from './components/WinningModal';
import FailedFetching from './components/FailedFetching';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showPresentation, setShowPresentation] = useState(true);
  const [fetchingFailed, setFetchingFailed] = useState(false);

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
        setFetchingFailed(true);
      }
    }
    fetchData();
  }, [isPlaying, fetchingFailed]);

  useEffect(() => {
    if (currentScore >= bestScore) {
      setBestScore(currentScore);
    }
    if (currentScore === 10) {
      setIsPlaying(false);
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

  function handleWinningCase() {
    setBestScore(0);
    setCurrentScore(0);
    return setIsPlaying((prevState) => !prevState);
  }

  function handleFetchingError() {
    setFetchingFailed(false);
  }

  return (
    <div className="App">
      {showPresentation ? (
        <MainPresentation handleClick={() => handlePresentationChange()} />
      ) : (
        <>
          <Header bestScore={bestScore} currentScore={currentScore} />
          {!fetchingFailed && (
            <AnimalCards
              animals={animals}
              incrementScore={() => incrementScore()}
              handleClick={() => handleClick()}
            />
          )}
          {bestScore === 10 && (
            <WinningModal
              score={bestScore}
              handleClick={() => handleWinningCase()}
            />
          )}
          {fetchingFailed && (
            <FailedFetching handleClick={() => handleFetchingError()} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
