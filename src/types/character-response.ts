import { Character } from "./character"

export interface CharacterFetchResponse {
    data: {
        results: Character[]
    }
}