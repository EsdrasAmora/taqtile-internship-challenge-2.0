import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { PokeResponse } from "./util/PokeApi"

export type AppNavProps<T extends keyof AppParamList> = {
	navigation: StackNavigationProp<AppParamList, T>
	route: RouteProp<AppParamList, T>
}

export type AppParamList = {
	List: undefined
	Details: PokeResponse
}
