import { Image, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

export const ButtonContainer = styled(TouchableOpacity)`
	z-index: 8;
	border-radius: 10px;
	height: 40px;
	justify-content: center;
	border-radius: 8px;
`

export const BadgeItem = styled(TouchableOpacity)`
	padding: 10px;
	border: 1px solid black;
	border-radius: 8px;
	top: 23px;
	height: 30px;
	margin-right: 16px;
	min-width: 16px;
	justify-content: center;
`

export const BadgesWrapper = styled(View)`
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	padding-left: 24px;
	top: 0px;
	position: absolute;
`

export const Divider = styled(TouchableOpacity)`
	height: 65px;
	border-left-color: #e5e5e5;
	border-left-width: 1px;
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
	justify-content: center;
	align-content: center;
`
export const StatsBoxView = styled(View)`
	flex-direction: row;
	height: 42%;
	align-items: flex-end;
	bottom: 24px;
`

export const StatsBarView = styled(View)`
	width: 73%;
	top: 8px;
	left: 5px;
	right: 1px;
`

export const StatRowView = styled(View)`
	flex-direction: row;
	padding-top: 10px;
`

export const StatsView = styled(View)`
	height: 65%;
	width: 100%;
	position: absolute;
	bottom: 0px;
	padding: 0px 16px 32px 16px;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	background-color: #ffffff;
`

export const StatsRowView = styled(View)`
	top: 5px;
	min-height: 25%;
	bottom: 20px;
	/* align-content: center; */
	/* flex-direction: column; */
	justify-content: space-between;
`

export const DetailsView = styled(View)`
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const PokeDetailsImage = styled(Image)`
	width: 200px;
	height: 200px;
	bottom: 65%;
	z-index: 100;
`

export const PokeListImage = styled(Image)`
	width: 48px;
	height: 48px;
	margin-right: 16px;
`

export const WrapperList = styled(View)`
	padding-bottom: 10px;
	width: 100%;
	height: 100%;
	background-color: #f5fffa;
	justify-content: center;
	align-items: center;
`
