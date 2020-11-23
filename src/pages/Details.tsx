import Axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, Share, View } from "react-native"
import { observer } from "mobx-react"
import { StatsBoxView, DetailsView, PokeDetailsImage, WrapperDetail } from "../components/components"
import { PokeDetails, PokeDetailsResponse, pokeStat as PokeStat, PokestatRecord, PokeColorTypes } from "../pokeTypes"
import { DetailsStoreContext } from "../stores/DetailsStore"
import { AppNavProps } from "../AppParamList"
import { imageUri } from "../util/PokeApi"
import { StatBox } from "../components/StatBox"
import { StatRow } from "../components/StatRow"
import { Button } from "../components/Button"
import { Badge } from "../components/Badge"
import { H2 } from "../components/Typography"

export const Details: React.FC<AppNavProps<"Details">> = observer(({ navigation, route }) => {
	const { url, name } = route.params
	const store = React.useContext(DetailsStoreContext)

	const makeShareMessage = useCallback((record: PokestatRecord) => {
		let keys = ""
		Object.keys(record).forEach((key) => (keys = keys.concat(`${key}: ${record[key as PokeStat]}\n`)))
		return keys
	}, [])

	const onShare = useCallback(async ({ name, stats }: PokeDetails) => {
		try {
			const result = await Share.share({
				title: `${name} stats`,
				message: makeShareMessage(stats),
			})
			if (result.action === Share.sharedAction) {
				alert("Post Shared")
			} else if (result.action === Share.dismissedAction) {
				alert("Post cancelled")
			}
		} catch (error) {
			alert(error.message)
		}
	}, [])

	useEffect(() => {
		store.fetchPokeDetails(url)
	}, [])

	if (store.isLoading) {
		return (
			<WrapperDetail>
				<ActivityIndicator color="#000" style={{ alignSelf: "center" }} size="large" />
			</WrapperDetail>
		)
	}

	if (!store.details) {
		navigation.navigate("List")
		return <DetailsView />
	}

	const pokeTypeColor = PokeColorTypes[store.details.types[0]]

	return (
		<DetailsView style={{ backgroundColor: pokeTypeColor }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "flex-start",
					width: "100%",
					marginLeft: 24,
				}}
			>
				{store.details.types.map((type) => (
					<Badge key={type} title={type} />
				))}
			</View>

			<View>
				<PokeDetailsImage
					source={{
						uri: imageUri(store.details.id),
					}}
				/>
			</View>
			<StatsBoxView>
				<View
					style={{
						flexDirection: "row",
						height: "50%",
						alignItems: "center",
					}}
				>
					<StatBox type="HEIGHT">{store.details.height / 10} m</StatBox>
					<StatBox type="WEIGHT">{store.details.weight / 10} Kg</StatBox>
				</View>

				<View style={{ top: -20 }}>
					<H2>Base stats</H2>
					<StatRow type="hp" value={store.details.stats.hp} color={pokeTypeColor} />
					<StatRow type="attack" value={store.details.stats.attack} color={pokeTypeColor} />
					<StatRow type="defense" value={store.details.stats.defense} color={pokeTypeColor} />
				</View>
				<Button title="Compartilhar" color={pokeTypeColor} onPress={() => onShare(store.details)} />
			</StatsBoxView>
		</DetailsView>
	)
})
