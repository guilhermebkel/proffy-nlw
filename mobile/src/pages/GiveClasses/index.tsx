import React from "react"
import { View, ImageBackground, Text } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

import giveClassesBgImage from "../../assets/images/give-classes-background.png"

import styles from "./styles"

const GiveClasses = () => {
	const navigation = useNavigation()

	const handleGoBackToLanding = () => {
		navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode="contain"
				source={giveClassesBgImage}
				style={styles.content}
			>
				<Text style={styles.title}>
					Do you want to become a Proffy?
				</Text>

				<Text style={styles.description}>
					In order to start, you need to sign up using our web platform.
				</Text>
			</ImageBackground>

			<RectButton
				style={styles.okButton}
				onPress={handleGoBackToLanding}
			>
				<Text style={styles.okButtonText}>
					Got it
				</Text>
			</RectButton>
		</View>
	)
}

export default GiveClasses
