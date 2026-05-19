import type { Dog } from "#/types/dog"
import type { DogDto } from "#/types/dot.dto"

export const mapDogDtoToDog = (dogDto: DogDto): Dog => {
    return {
        id: dogDto.id,
        name: dogDto.name,
        breed: dogDto.breed,
        age: dogDto.age,
        imageUrl: dogDto.image,
    }
}