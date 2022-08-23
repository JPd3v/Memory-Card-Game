export default function MainPresentation({ handleClick }) {
  return (
    <div className="presentation">
      <div className="presentation-emojis">🙈🙉🐶🐱🐼🐨🐰🐹🦊</div>
      <div className="presentation-content">
        <h1> Animal Memory Game</h1>
        <button type="button" onClick={handleClick}>
          {' '}
          Play Game{' '}
        </button>
      </div>
      <div className="presentation-emojis">🙈🙉🐶🐱🐼🐨🐰🐹🦊</div>
    </div>
  );
}
