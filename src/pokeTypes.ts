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
	normal: "#bdb76b",
	fighting: "#cd5c5c",
	flying: "#add8e6",
	poison: "#800080",
	ground: "#8b4513",
	rock: "#708090",
	bug: "#556b2f",
	ghost: "#f8f8ff",
	steel: "#b0c4de",
	fire: "#b22222",
	water: "#00bfff",
	grass: "#478070",
	electric: "#ffff00",
	psychic: "#696969",
	ice: "#f0f8ff",
	dragon: "#a52a2a",
	dark: "#000000",
	fairy: "#ff69b4",
	unknown: "#e6e6fa",
	shadow: "#dcdcdc",
}
