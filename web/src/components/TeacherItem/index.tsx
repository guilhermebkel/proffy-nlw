import React from "react"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

const TeacherItem = () => {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars1.githubusercontent.com/u/42042433?s=460&u=a7100c046e8543be0e402994db828cf74a4fa24c&v=4" alt="Guilherme Mota"/>

				<div>
					<strong>Guilherme Mota</strong>
					<span>Programming</span>
				</div>
			</header>

			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				<br />
				<br />
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</p>

			<footer>
				<p>
					Price/hour
					<strong>R$80,00</strong>
				</p>

				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Make contact
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem
