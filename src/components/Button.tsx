import React, { useState } from "react"
import { GestureResponderEvent, Text } from "react-native"
import { ButtonContainer } from "./components"
import { ButtonText } from "./Typography"

interface ButtonProps {
	title: string
	color: string
	onPress: ((event: GestureResponderEvent) => void) | undefined
}

export const Button: React.FC<ButtonProps> = ({ title, color, onPress }) => {
	// const [isDisabled, setDisabled] = useState(false)

	// const handlePress = () => {
	// 	setDisabled(true)
	// 	setTimeout(() => setDisabled(false), 3000)
	// }

	return (
		<ButtonContainer onPress={onPress} style={{ backgroundColor: color }}>
			<ButtonText>{title}</ButtonText>
		</ButtonContainer>
	)
}
