export default function WinningModal({ score, handleClick }) {
  return (
    <div>
      congratulations you complete the game with {score} answers memorized
      correctly
      <button type="button" onClick={() => handleClick()}>
        Play Again
      </button>
    </div>
  );
}
