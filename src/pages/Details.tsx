import { observer } from "mobx-react"
import React, { useCallback, useEffect } from "react"
import { ActivityIndicator, Share, View } from "react-native"
import { AppNavProps } from "../AppParamList"
import { Badge } from "../components/Badge"
import { Button } from "../components/Button"
import {
	BadgesWrapper,
	DetailsView,
	Divider,
	PokeDetailsImage,
	StatsBoxView,
	StatsRowView,
	StatsView,
} from "../components/components"
import { StatBox } from "../components/StatBox"
import { StatRow } from "../components/StatRow"
import { H2 } from "../components/Typography"
import { PokeColorTypes, PokeDetails, pokeStat as PokeStat, PokestatRecord } from "../pokeTypes"
import { DetailsStoreContext } from "../stores/DetailsStore"
import { imageUri } from "../util/PokeApi"

export const Details: React.FC<AppNavProps<"Details">> = observer(({ navigation, route }) => {
	const { url } = route.params
	const store = React.useContext(DetailsStoreContext)

	const makeShareMessage = useCallback((record: PokestatRecord, name: string) => {
		let keys = `${name} stats\n`
		Object.keys(record).forEach((key) => (keys = keys.concat(`${key}: ${record[key as PokeStat]}\n`)))
		return keys
	}, [])

	const onShare = useCallback(async ({ name, stats }: PokeDetails) => {
		try {
			const result = await Share.share({
				title: `${name} stats`,
				message: makeShareMessage(stats, name),
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
			<DetailsView>
				<ActivityIndicator color="#000" style={{ alignSelf: "center" }} size="large" />
			</DetailsView>
		)
	}

	if (!store.details) {
		navigation.navigate("List")
		return <DetailsView />
	}

	const pokeTypeColor = PokeColorTypes[store.details.types[0]]

	return (
		<DetailsView style={{ backgroundColor: pokeTypeColor }}>
			<BadgesWrapper>
				{store.details.types.map((type) => (
					<Badge key={type} title={type} />
				))}
			</BadgesWrapper>

			<View>
				<PokeDetailsImage source={{ uri: imageUri(store.details.id) }} />
			</View>
			<StatsView>
				<StatsBoxView>
					<StatBox type="HEIGHT">{store.details.height / 10} m</StatBox>
					<Divider />
					<StatBox type="WEIGHT">{store.details.weight / 10} Kg</StatBox>
				</StatsBoxView>

				<H2>Base stats</H2>
				<StatsRowView>
					<StatRow type="hp" value={store.details.stats.hp} color={pokeTypeColor} />
					<StatRow type="attack" value={store.details.stats.attack} color={pokeTypeColor} />
					<StatRow type="defense" value={store.details.stats.defense} color={pokeTypeColor} />
				</StatsRowView>

				<Button
					title="Compartilhar"
					style={{ backgroundColor: pokeTypeColor, bottom: 32, left: 16, position: "absolute", width: "100%" }}
					onPress={() => onShare(store.details)}
				/>
			</StatsView>
		</DetailsView>
	)
})
