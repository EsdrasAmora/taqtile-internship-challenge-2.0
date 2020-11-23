import { action, computed, observable } from "mobx"
import { createContext } from "react"
import { PokeResponse, PokeResponseList } from "../util/PokeApi"

export class ListStore {
	@observable isLoading = true
	@observable isLoadingMore = false
	@observable list: PokeResponse[] = []
	@observable url = "pokemon"

	@action incrementList(pokemons: PokeResponseList) {
		this.url = pokemons.next
		this.list.push(...pokemons.results)
		this.isLoadingMore = false
	}

	@action setInitialList(pokemons: PokeResponseList) {
		this.isLoading = false
		this.url = pokemons.next
		this.list = pokemons.results
	}

	@computed get hasCurrentWorkout() {
		return !!this.list.length
	}
}

export const ListStoreContext = createContext(new ListStore())
