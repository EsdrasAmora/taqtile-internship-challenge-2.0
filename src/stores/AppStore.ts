import { createContext } from "react"
import { DetailsStore } from "./DetailsStore"
import { ListStore } from "./ListStore"

export class AppStore {
	workoutStore = new DetailsStore()
	workoutTimerStore = new ListStore()
}

export const AppStoreContext = createContext(new AppStore())
