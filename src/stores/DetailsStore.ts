import Axios from "axios"
import { action, observable } from "mobx"
import { createContext } from "react"
import { PokeDetails, PokeDetailsResponse } from "../pokeTypes"
import { PokeResponse, PokeResponseList } from "../util/PokeApi"

export class DetailsStore {
	@observable isLoading = true
	@observable details: PokeDetails = {} as PokeDetails

	@action setDetails(details: PokeDetails) {
		this.details = details
		this.isLoading = false
	}
	@action reset() {
		this.details = {} as PokeDetails
		this.isLoading = true
	}

	@action
	async fetchPokeDetails(url: string) {
		this.details = {} as PokeDetails
		this.isLoading = true
		await Axios.get<PokeDetailsResponse>(url).then(async ({ data }) => {
			const stats: any = {}
			const types = data.types.map((item) => item.type.name)
			data.stats.map((item) => (stats[item.stat.name] = item.base_stat))
			this.setDetails({ ...data, stats, types })
		})
	}
}

export const DetailsStoreContext = createContext(new DetailsStore())
