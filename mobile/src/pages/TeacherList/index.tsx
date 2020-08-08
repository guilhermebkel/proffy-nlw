import React, { useState } from "react"
import { View, ScrollView, Text, TextInput } from "react-native"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"
import { Feather } from "@expo/vector-icons"
import AsyncStorage from "@react-native-community/async-storage"

import PageHeader from "../../components/PageHeader"
import TeacherItem, { Teacher } from "../../components/TeacherItem"

import api from "../../services/api"

import styles from "./styles"

const TeacherList = () => {
	const [areFiltersVisible, setAreFiltersVisible] = useState(false)

	const [subject, setSubject] = useState("")
	const [week_day, setWeekDay] = useState("")
	const [time, setTime] = useState("")

	const [teachers, setTeachers] = useState([])
	const [favorites, setFavorites] = useState<number[]>([])

	const loadFavorites = () => {
		AsyncStorage.getItem("favorites").then(response => {
			if (response) {
				const favoritedTeachers = JSON.parse(response)

				const favoritedTeacherIds = favoritedTeachers
					.map((favoritedTeacher: Teacher) => favoritedTeacher.id)

				setFavorites(favoritedTeacherIds)
			}
		})
	}

	const handleFiltersSubmit = async () => {
		loadFavorites()

		const response = await api.get("classes", {
			params: {
				subject,
				week_day,
				time
			}
		})

		setTeachers(response.data.classes)
		setAreFiltersVisible(false)
	}

	const handleToggleFiltersVisible = () => {
		setAreFiltersVisible(lastState => !lastState)
	}

	return (
		<View style={styles.container}>
			<PageHeader
				title="Available Proffys"
				headerRight={(
					<BorderlessButton
						onPress={handleToggleFiltersVisible}
					>
						<Feather
							name="filter"
							size={20}
							color="#FFFFFF"
						/>
					</BorderlessButton>
				)}
			>
				{areFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>
							Subject
						</Text>
						<TextInput
							style={styles.input}
							value={subject}
							onChangeText={text => setSubject(text)}
							placeholder="What is the subject?"
							placeholderTextColor="#C1BCCC"
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>
									Week day
								</Text>
								<TextInput
									style={styles.input}
									value={week_day}
									onChangeText={text => setWeekDay(text)}
									placeholder="What is the day?"
									placeholderTextColor="#C1BCCC"
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>
									Time
								</Text>
								<TextInput
									style={styles.input}
									value={time}
									onChangeText={text => setTime(text)}
									placeholder="What time?"
									placeholderTextColor="#C1BCCC"
								/>
							</View>
						</View>

						<RectButton
							style={styles.submitButton}
							onPress={handleFiltersSubmit}
						>
							<Text style={styles.submitButtonText}>
								Filter
							</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16
				}}
			>
				{teachers.map((teacher: Teacher) => (
					<TeacherItem
						key={teacher.id}
						teacher={teacher}
						favorited={favorites.includes(teacher.id)}
					/>
				))}
			</ScrollView>
		</View>
	)
}

export default TeacherList
