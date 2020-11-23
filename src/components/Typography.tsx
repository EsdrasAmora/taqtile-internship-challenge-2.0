import * as React from "react"
import styled from "styled-components"
import Constants from "expo-constants"
import { Text } from "react-native"

export const H1 = styled(Text)`
	/* font-family: Overpass; */
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 31px;
	letter-spacing: 0;
	text-align: left;
`
/* color: ${(props) => (props.primary ? "white" : "palevioletred")}; */
export const H2 = styled(Text)`
	/* font-family: Overpass; */
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 25px;
	letter-spacing: 0;
	text-align: left;
`
export const H3 = styled(Text)`
	/* font-family: Overpass; */
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 21px;
	letter-spacing: 0;
	text-align: left;
`
export const Body = styled(Text)`
	/* font-family: Open Sans; */
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0;
	text-align: left;
`
export const Dt = styled(Text)`
	/* font-family: Open Sans; */
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 19px;
	letter-spacing: 0.05px;
	text-align: left;
`
export const Dd = styled(Text)`
	/* font-family: Open Sans; */
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 19px;
	letter-spacing: 0.05px;
	text-align: left;
`
export const Display = styled(Text)`
	/* font-family: Overpass; */
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: 49px;
	letter-spacing: 0.05px;
	text-align: left;
`
export const Label = styled(Text)`
	/* font-family: Open Sans; */
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px;
	letter-spacing: 0.05px;
	text-align: left;
`

export const ButtonText = styled(Text)`
	/* font-family: Open Sans; */
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	letter-spacing: 0;
	text-align: center;
	color: #ffffff;
`
