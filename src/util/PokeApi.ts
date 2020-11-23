import axios, { AxiosResponse } from "axios"
import { ImageStore } from "react-native"

export interface PokeResponse {
	url: string
	name: string
}

export interface PokeResponseList {
	count: number
	next: string
	previous: string
	results: PokeResponse[]
}

export const PokeApi = axios.create({
	baseURL: "https://pokeapi.co/api/v2/",
	timeout: 10000,
})

export const imageUri = (id: number) => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}
