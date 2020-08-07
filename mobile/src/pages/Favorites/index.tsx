import React from "react"
import { View, ScrollView } from "react-native"

import PageHeader from "../../components/PageHeader"

import styles from "./styles"

const Favorites = () => {
	return (
		<View style={styles.container}>
			<PageHeader title="My favorite Proffys" />

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16
				}}
			>
			</ScrollView>
		</View>
	)
}

export default Favorites
