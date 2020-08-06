import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import api from "../../services/api"

import "./styles.css"

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
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
	const { teacher } = props

	const createNewConnection = () => {
		api.post("connections", {
			user_id: teacher.id
		})
	}

	return (
		<article className="teacher-item">
			<header>
				<img src={teacher.avatar} alt="Guilherme Mota"/>

				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</header>

			<p>
				{teacher.bio}
			</p>

			<footer>
				<p>
					Price/hour
					<strong>R$ {teacher.cost}</strong>
				</p>

				<a
					onClick={createNewConnection}
					href={`https://wa.me/${teacher.whatsapp}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={whatsappIcon} alt="Whatsapp"/>
					Make contact
				</a>
			</footer>
		</article>
	)
}

export default TeacherItem
