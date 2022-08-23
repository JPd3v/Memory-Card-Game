export default function MainPresentation({ handleClick }) {
  return (
    <div>
      <p> A memory game of animals</p>
      <button type="button" onClick={handleClick}>
        {' '}
        Play the game{' '}
      </button>
    </div>
  );
}
