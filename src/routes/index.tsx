import DogCard from '#/components/DogCard'
import DogStats from '#/components/DogStats'
import DogStatsButton from '#/components/DogStatsButton'
import type { Dog } from '#/types/dog'
import type { DogDto } from '#/types/dot.dto'
import { mapDogDtoToDog } from '#/utils/mapper'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { CompositeComponent, createCompositeComponent, renderServerComponent } from '@tanstack/react-start/rsc'

const getDogs = createServerFn().handler(async () => {
  console.log('Fetching dogs from server...')
  const response = await fetch('http://localhost:3000/api/dogs')
  const dogs = await response.json() as DogDto[]

  return dogs
})

const getDogStats = createServerFn().handler(async () => {
  const src = await createCompositeComponent((
    (props: { children: React.ReactNode }) => {
      return (
        <div>
          <h2>Dog Stats</h2>
          <DogStats>{props.children}</DogStats>
        </div>
      )
    }
  ))

  return { src }
})

export const Route = createFileRoute('/')({
  loader: async () => {
    const dogs = await getDogs()
    const { src } = await getDogStats()
    return { dogs, DogStats: src }
  },
  component: HomePage,
})

function HomePage() {
  const { dogs, DogStats } = Route.useLoaderData()

  const normalizedDogs = dogs.map((dog: DogDto) => mapDogDtoToDog(dog))

  return (
    <div>
      <h1>Dogs</h1>

      <CompositeComponent src={DogStats}>
        <DogStatsButton />
      </CompositeComponent>

      {normalizedDogs.map((dog: Dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  )
}