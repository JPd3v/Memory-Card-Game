import Card from './Card';

export default function AnimalCards({ animals, handleClick, incrementScore }) {
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

  const animalsElements = mapAnimals(animals);

  return <div>{animalsElements}</div>;
}
