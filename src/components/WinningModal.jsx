export default function WinningModal({ score, handleClick }) {
  return (
    <div className="win-modal">
      <div className="win-modal-content">
        🎉🎊Congratulations you win the game with {score} answers memorized
        correctly🎊🎉
        <button
          type="button"
          className="btn-play-again"
          onClick={() => handleClick()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
