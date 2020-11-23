import React from "react"
import { View, Text } from "react-native"
import { ProgressBar } from "react-native-paper"
import { pokeStat } from "../pokeTypes"
import { capitalizeFirtsChar } from "../util/Formatation"

interface StatRowProps {
	type: pokeStat
	value: number
	color: string
}

export const StatRow: React.FC<StatRowProps> = ({ type, value, color }) => {
	return (
		<View style={{ flexDirection: "row", paddingTop: 10 }}>
			<View style={{ width: 60 }}>
				<Text>{capitalizeFirtsChar(type)}</Text>
			</View>

			<View style={{ width: "70%", top: 7, left: 5, right: 16 }}>
				<ProgressBar style={{ borderRadius: 30 }} progress={value / 100} color={color} />
			</View>

			<Text style={{ left: 20 }}>{value}</Text>
		</View>
	)
}
