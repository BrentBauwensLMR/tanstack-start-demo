import type { Dog } from "#/types/dog";

interface Props {
    dog: Dog;
}

export default function DogCard({ dog }: Props) {
  return (
    <div style={{ padding: '2rem' , backgroundColor: '#f0f0f0', width: 'max-content', margin: '1rem' }}>
      <h2>{dog.name}</h2>
      <p>{dog.breed}</p>
      <p>{dog.age} years old</p>
      <img src={dog.imageUrl} alt={dog.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
    </div>
  )
}