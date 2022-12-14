import ScoreBoard from './ScoreBoard';

export default function Header({ bestScore, currentScore }) {
  return (
    <nav>
      <h1>Animal Memory Game</h1>
      <ScoreBoard bestScore={bestScore} currentScore={currentScore} />
    </nav>
  );
}
