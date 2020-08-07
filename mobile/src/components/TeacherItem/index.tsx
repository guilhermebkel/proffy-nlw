import React, { useState } from "react"
import { View, Image, Text, Linking } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import AsyncStorage from "@react-native-community/async-storage"

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png"
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png"
import whatsappIcon from "../../assets/images/icons/whatsapp.png"

import styles from "./styles"

export type Teacher = {
	avatar: string
	bio: string
	cost: number
	id: number
	name: string
	subject: string
	whatsapp: string
}

type TeacherItemProps = {
	teacher: Teacher
	favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
	const { teacher, favorited } = props

	const [isFavorited, setIsFavorited] = useState(favorited)

	const handleLinkToWhatsapp = () => {
		Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
	}

	const handleToggleFavorite = async () => {

	}

	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					source={{ uri: teacher.avatar }}
					style={styles.avatar}
				/>

				<View style={styles.profileInfo}>
					<Text style={styles.name}>
						{teacher.name}
					</Text>

					<Text style={styles.subject}>
						{teacher.subject}
					</Text>
				</View>
			</View>

			<Text style={styles.bio}>
				{teacher.bio}
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Price/hour {"   "}
					<Text style={styles.priceValue}>
						R$ {teacher.cost}
					</Text>
				</Text>

				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.favoriteButton, styles.favorited]}>
						{/* <Image source={heartOutlineIcon} /> */}
						<Image source={unfavoriteIcon} />
					</RectButton>

					<RectButton
						onPress={handleLinkToWhatsapp}
						style={styles.contactButton}
					>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>
							Make contact
						</Text>
					</RectButton>
				</View>
			</View>
		</View>
	)
}

export default TeacherItem
