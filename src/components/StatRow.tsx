import React from "react"
import { View, Text } from "react-native"
import { ProgressBar } from "react-native-paper"
import { pokeStat } from "../pokeTypes"
import { capitalizeFirtsChar } from "../util/Formatation"
import { StatRowView, StatsBarView } from "./components"

interface StatRowProps {
	type: pokeStat
	value: number
	color: string
}

export const StatRow: React.FC<StatRowProps> = ({ type, value, color }) => {
	return (
		<StatRowView>
			<View style={{ width: 60 }}>
				<Text>{capitalizeFirtsChar(type)}</Text>
			</View>

			<StatsBarView>
				<ProgressBar style={{ borderRadius: 30 }} progress={value / 100} color={color} />
			</StatsBarView>
			<View>
				<Text style={{ left: 20 }}>{value}</Text>
			</View>
		</StatRowView>
	)
}
