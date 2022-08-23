export default function FailedFetching({ handleClick }) {
  return (
    <button type="button" onClick={() => handleClick()}>
      {' '}
      <div>
        An error has occurred when getting the information from the server, try
        again
      </div>
    </button>
  );
}
