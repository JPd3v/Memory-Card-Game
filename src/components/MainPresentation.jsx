export default function MainPresentation({ handleClick }) {
  return (
    <div className="presentation">
      <div className="presentation-emojis">πππΆπ±πΌπ¨π°πΉπ¦</div>
      <div className="presentation-content">
        <h1> Animal Memory Game</h1>
        <button type="button" onClick={handleClick}>
          {' '}
          Play Game{' '}
        </button>
      </div>
      <div className="presentation-emojis">πππΆπ±πΌπ¨π°πΉπ¦</div>
    </div>
  );
}
