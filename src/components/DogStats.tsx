interface Props {
    children: React.ReactNode
}

async function DogStats({ children }: Props) {
    const response = await fetch('http://localhost:3000/api/dogs')
    const dogs = await response.json()

    const apiKey = process.env.API_KEY || 'No API Key found'

    return (
        <div>
            <h2>Total dogs: {dogs.length}</h2>
            <p>Dit is mijn API Key: {apiKey}</p>
            
            {children}
        </div>
    )
}

export default DogStats