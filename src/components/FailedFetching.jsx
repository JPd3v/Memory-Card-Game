export default function FailedFetching({ handleClick }) {
  return (
    <div className="fail-fetch-warning">
      <button
        className="btn-failed-fetching"
        type="button"
        onClick={() => handleClick()}
      >
        {' '}
        An error has occurred when getting the information from the server,
        click to try again
      </button>
    </div>
  );
}
