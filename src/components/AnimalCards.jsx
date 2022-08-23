import Card from './Card';

export default function AnimalCards({ animals, handleClick, incrementScore }) {
  function shuffleArray(array) {
    return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
  }

  const AnimalsShuffled = shuffleArray(animals);

  function mapAnimals(array) {
    return array.map((animal) => (
      <div className="animal-card" key={animal.id}>
        <Card
          name={animal.name}
          image={animal.image_link}
          handleClick={() => handleClick()}
          incrementScore={() => incrementScore()}
        />
      </div>
    ));
  }

  const animalsElements = mapAnimals(AnimalsShuffled);

  return <div className="animal-cards-container">{animalsElements}</div>;
}
