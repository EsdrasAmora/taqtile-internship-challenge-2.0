import { observer } from "mobx-react"
import React, { useCallback, useEffect } from "react"
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from "react-native"
import { AppNavProps } from "../AppParamList"
import { ItemList, PokeListImage, WrapperList } from "../components/components"
import { H3 } from "../components/Typography"
import { ListStoreContext } from "../stores/ListStore"
import { imageUri, PokeApi, PokeResponse, PokeResponseList } from "../util/PokeApi"

export const List: React.FC<AppNavProps<"List">> = observer(({ navigation, route }) => {
	const store = React.useContext(ListStoreContext)

	const fetchPokemons = useCallback(
		async (url: string) =>
			await PokeApi.get<PokeResponseList>(url).then((pokemons) => store.setInitialList(pokemons.data)),
		[]
	)

	const fetchMorePokemons = useCallback(async (url) => {
		store.isLoadingMore = true
		await PokeApi.get<PokeResponseList>(url).then((pokemons) => store.incrementList(pokemons.data))
	}, [])

	const renderItem = useCallback((poke: ListRenderItemInfo<PokeResponse>) => {
		return (
			<ItemList onPress={() => navigation.navigate("Details", poke.item)}>
				<PokeListImage
					source={{
						uri: imageUri(poke.index + 1),
					}}
				/>
				<H3>{poke.item.name}</H3>
			</ItemList>
		)
	}, [])

	useEffect(() => {
		fetchPokemons(store.url)
	}, [])

	if (store.isLoading) {
		return (
			<WrapperList>
				<ActivityIndicator color="#000" size="large" style={{ alignSelf: "center" }} />
			</WrapperList>
		)
	}

	const ListLoader = store.isLoadingMore ? (
		<View style={{ minHeight: 230, padding: 20 }}>
			<ActivityIndicator color="#000" size="large" style={{ alignSelf: "center" }} />
		</View>
	) : null

	return (
		<WrapperList>
			<FlatList
				ListFooterComponent={ListLoader}
				data={store.list}
				// onRefresh={() =>fetchPokemons(url)}
				// refreshing={isLoading}
				showsVerticalScrollIndicator={false}
				renderItem={(poke) => renderItem(poke)}
				keyExtractor={(item) => item.name}
				onEndReached={() => fetchMorePokemons(store.url)}
				onEndReachedThreshold={0.1}
			/>
		</WrapperList>
	)
})
