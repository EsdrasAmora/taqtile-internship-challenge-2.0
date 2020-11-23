import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { AppParamList } from "./AppParamList"
import { List } from "./pages/List"
import { Details } from "./pages/Details"

const Stack = createStackNavigator<AppParamList>()

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="List">
				<Stack.Screen name="List" component={List} options={{ headerTitle: "Pokemons" }} />
				<Stack.Screen name="Details" component={Details} options={({ route }) => ({ title: route.params.name })} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
