import React from "react"
import { Link } from "react-router-dom"

import logoImg from "../../assets/images/logo.svg"
import landingImg from "../../assets/images/landing.svg"

import studyIcon from "../../assets/images/icons/study.svg"
import giveClassesIcon from "../../assets/images/icons/give-classes.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg"

import "./styles.css"

const Landing = () => {
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy" />

					<h2>Your online class platform.</h2>
				</div>

				<img src={landingImg} alt="Study platform" className="hero-image" />

				<div className="buttons-container">
					<Link to="/study" className="study">
						<img src={studyIcon} alt="study" />
						Study
					</Link>

					<Link to="/give-classes" className="give-classes">
						<img src={giveClassesIcon} alt="give-classes" />
						Give Classes
					</Link>
				</div>

				<span className="total-connections">
					A total of 200 people already made connections

					<img src={purpleHeartIcon} alt="purple-heart" />
				</span>
			</div>
		</div>
	)
}

export default Landing
