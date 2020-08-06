import React from "react"
import { View, Image, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

import landingImg from "../../assets/images/landing.png"
import studyIcon from "../../assets/images/icons/study.png"
import giveClassesIcon from "../../assets/images/icons/give-classes.png"
import heartIcon from "../../assets/images/icons/heart.png"

import styles from "./styles"

const Landing = () => {
	const navigation = useNavigation()
	
	const handleNavigateToGiveClassesPage = () => {
		navigation.navigate("GiveClasses")
	}

	const handleNavigateToStudyPage = () => {
		navigation.navigate("Study")
	}

	return (
		<View style={styles.container}>
			<Image source={landingImg} style={styles.banner} />

			<Text style={styles.title}>
				Welcome! {"\n"}
				<Text style={styles.titleBold}>What do you want to do?</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<RectButton
					onPress={handleNavigateToStudyPage}
					style={[styles.button, styles.buttonPrimary]}
				>
					<Image source={studyIcon} />

					<Text style={styles.buttonText}>Study</Text>
				</RectButton>

				<RectButton
					style={[styles.button, styles.buttonSecondary]}
					onPress={handleNavigateToGiveClassesPage}
				>
					<Image source={giveClassesIcon} />

					<Text style={styles.buttonText}>Give classes</Text>
				</RectButton>
			</View>

			<Text style={styles.totalConnections}>
				A total of 285 connections were already made! {" "}
				<Image source={heartIcon} />
			</Text>
		</View>
	)
}

export default Landing
