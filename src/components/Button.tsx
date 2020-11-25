import React, { useState } from "react"
import { GestureResponderEvent, StyleProp, Text, ViewStyle } from "react-native"
import { ButtonContainer } from "./components"
import { ButtonText } from "./Typography"

interface ButtonProps {
	title: string
	style?: StyleProp<ViewStyle>
	onPress: ((event: GestureResponderEvent) => void) | undefined
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
	return (
		<ButtonContainer onPress={onPress} style={style}>
			<ButtonText>{title}</ButtonText>
		</ButtonContainer>
	)
}
