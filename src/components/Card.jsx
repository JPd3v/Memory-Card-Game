import { useState } from 'react';

export default function Card({ name, image, handleClick, incrementScore }) {
  const [isClicked, setIsClicked] = useState(false);

  function eventHandler() {
    if (isClicked) return handleClick();

    incrementScore();
    return setIsClicked((prevState) => !prevState);
  }

  return (
    <button type="button" onClick={() => eventHandler()}>
      <img className="card-animal-image" src={image} alt={name} />
      <div>{name}</div>
    </button>
  );
}
