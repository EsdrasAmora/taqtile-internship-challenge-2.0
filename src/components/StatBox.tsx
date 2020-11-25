import React from "react"
import { View } from "react-native"
import { Display, Label } from "./Typography"
import { StatBoxView } from "./components"

export interface StatBox {
	type: "HEIGHT" | "WEIGHT"
}

export const StatBox: React.FC<StatBox> = ({ children, type }) => {
	return (
		<StatBoxView style={{ alignItems: "center" }}>
			<View>
				<Display>{children}</Display>
			</View>
			<View>
				<Label>{type}</Label>
			</View>
		</StatBoxView>
	)
}
