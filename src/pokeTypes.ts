export interface PokeDetailsResponse {
	height: number
	weight: number
	id: number
	name: string
	types: { type: { name: PokeType; url: string }; slot: number }[]
	stats: { base_stat: number; effort: number; stat: { name: pokeStat; url: string } }[]
}

export interface PokeDetails {
	height: number
	weight: number
	id: number
	name: string
	types: PokeType[]
	stats: PokestatRecord
}

export type PokestatRecord = { [x in pokeStat]: number }

export type PokeType =
	| "normal"
	| "fighting"
	| "flying"
	| "poison"
	| "ground"
	| "rock"
	| "bug"
	| "ghost"
	| "steel"
	| "fire"
	| "water"
	| "grass"
	| "electric"
	| "psychic"
	| "ice"
	| "dragon"
	| "dark"
	| "fairy"
	| "unknown"
	| "shadow"

export type pokeStat =
	| "hp"
	| "attack"
	| "defense"
	| "special-attack"
	| "special-defense"
	| "speed"
	| "accuracy"
	| "evasion"

export const PokeColorTypes = {
	normal: "#BDB76B",
	fighting: "#CD5C5C",
	flying: "#ADD8E6",
	poison: "#800080",
	ground: "#8B4513",
	rock: "#708090",
	bug: "#556B2F",
	ghost: "#2E4361",
	steel: "#B0C4DE",
	fire: "#B22222",
	water: "#00BFFF",
	grass: "#478070",
	electric: "#FFD71D",
	psychic: "#7789CF",
	ice: "#F0F8FF",
	dragon: "#A52A2A",
	dark: "#212129",
	fairy: "#FF69B4",
	unknown: "#E6E6FA",
	shadow: "#DCDCDC",
}
