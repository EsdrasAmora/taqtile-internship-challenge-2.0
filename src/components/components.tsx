import { Image, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

export const ButtonContainer = styled(TouchableOpacity)`
	z-index: 8;
	border-radius: 10px;
	height: 40px;
	justify-content: center;
	border-radius: 8px;
`

export const BadgeContainer = styled(TouchableOpacity)`
	padding: 10px;
	border: 1px solid black;
	border-radius: 8px;
	top: 23px;
	height: 30px;
	margin-right: 16px;
	min-width: 16px;
	justify-content: center;
`

export const ItemList = styled(TouchableOpacity)`
	width: 330px;
	height: 40px;
	border-radius: 8px;
	align-items: center;
	flex-direction: row;
	margin-top: 10px;
	background-color: #eee8aa;
`
export const StatBoxView = styled(View)`
	flex: 1;
	width: 100%;
	justify-content: center;
	align-content: center;
`
export const StatsBoxView = styled(View)`
	height: 61%;
	width: 100%;
	padding: 0px 16px 32px 16px;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	background-color: #ffffff;
`

export const Divider = styled(View)`
	border-bottom-color: #030916;
	border-bottom-width: 10px;
	height: 3px;
	width: 3px;
`
export const WrapperDetail = styled(View)`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: #412f6d;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 15px 10px;
`

export const WrapperList = styled(View)`
	padding-bottom: 10px;
	width: 100%;
	height: 100%;
	background-color: #f5fffa;
	justify-content: center;
	align-items: center;
`

export const DetailsView = styled(View)`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: #478070;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const PokeDetailsImage = styled(Image)`
	width: 200px;
	height: 200px;
	bottom: -40px;
	z-index: 100;
`

export const PokeListImage = styled(Image)`
	width: 48px;
	height: 48px;
	margin-right: 16px;
`
