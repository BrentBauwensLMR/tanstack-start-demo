import { useState } from 'react'

function DogStatsButton() {
    const [barks, setBarks] = useState(0)

    return (
        <button onClick={() => setBarks((count) => count + 1)}>
            Bark counter: {barks}
        </button>
    )
}

export default DogStatsButton