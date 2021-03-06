import React from "react"
import { PokeColorTypes, PokeType } from "../pokeTypes"
import { LightenDarkenColor } from "../util/ColorMaker"
import { capitalize } from "../util/Formatation"
import { BadgeItem } from "./components"
import { Label } from "./Typography"

interface BadgeProps {
	title: PokeType
}

export const Badge: React.FC<BadgeProps> = ({ title }) => {
	const badgeColor = LightenDarkenColor(PokeColorTypes[title], -15)
	return (
		<BadgeItem style={{ backgroundColor: badgeColor }}>
			<Label>{capitalize(title)}</Label>
		</BadgeItem>
	)
}
