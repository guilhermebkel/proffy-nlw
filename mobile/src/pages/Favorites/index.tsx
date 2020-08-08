import React, { useState, useCallback } from "react"
import { View, ScrollView } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import { useFocusEffect } from "@react-navigation/native"

import PageHeader from "../../components/PageHeader"

import TeacherItem, { Teacher } from "../../components/TeacherItem"

import styles from "./styles"

const Favorites = () => {
	const [favorites, setFavorites] = useState<Teacher[]>([])

	const loadFavorites = () => {
		AsyncStorage.getItem("favorites").then(response => {
			if (response) {
				const favoritedTeachers = JSON.parse(response)

				setFavorites(favoritedTeachers)
			}
		})
	}

	useFocusEffect(
		useCallback(() => {
			loadFavorites()
		}, [])
	)

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
				{favorites.map(teacher => (
					<TeacherItem
						favorited
						key={teacher.id}
						teacher={teacher}
					/>
				))}
			</ScrollView>
		</View>
	)
}

export default Favorites
