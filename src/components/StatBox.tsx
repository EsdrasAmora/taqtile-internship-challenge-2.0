import React from "react"
import { View } from "react-native"
import { Display, Label } from "./Typography"
import { StatBoxView } from "./components"

export interface StatBox {
	type: "HEIGHT" | "WEIGHT"
}

export const StatBox: React.FC<StatBox> = ({ children, type }) => {
	return (
		<StatBoxView>
			<View style={{ alignItems: "center" }}>
				<Display>{children}</Display>
			</View>
			<View style={{ alignItems: "center" }}>
				<Label>{type}</Label>
			</View>
		</StatBoxView>
	)
}
