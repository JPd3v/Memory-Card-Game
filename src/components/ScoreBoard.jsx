export default function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <p>Best Score : {bestScore}</p>
      <p>Current Score : {currentScore}</p>
    </div>
  );
}
