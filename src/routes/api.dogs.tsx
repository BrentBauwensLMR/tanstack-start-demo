import { createFileRoute } from '@tanstack/react-router'
import dogs from "../assets/dogs.json"

export const Route = createFileRoute('/api/dogs')({
  server: {
    handlers: {
        GET: async () => {
            return Response.json(dogs)
        }
    }
  }
})


