import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import PageHeader from "../../components/PageHeader"
import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import Select from "../../components/Select"

import warningIcon from "../../assets/images/icons/warning.svg"

import api from "../../services/api"

import "./styles.css"

const TeacherForm = () => {
	const [name, setName] = useState("")
	const [avatar, setAvatar] = useState("")
	const [whatsapp, setWhatsapp] = useState("")
	const [bio, setBio] = useState("")

	const [subject, setSubject] = useState("")
	const [cost, setCost] = useState("")

	const history = useHistory()

	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: "", to: "" }
	])

	const addNewScheduleItem = () => {
		setScheduleItems(lastState => ([
			...lastState,
			{ week_day: 0, from: "", to: "" }
		]))
	}

	const setScheduleItemValue = (index: number, field: string, value: string) => {
		setScheduleItems(lastState => {
			const updatedData = lastState.map((scheduleItem, scheduleItemIndex) => {
				if (scheduleItemIndex === index) {
					return {
						...scheduleItem,
						[field]: value
					}
				} else {
					return scheduleItem
				}
			})

			return updatedData
		})
	}

	const handleCreateClass = (event: React.FormEvent) => {
		event.preventDefault()
		
		const newClassData = {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			schedule: scheduleItems
		}

		api.post("classes", newClassData)
			.then(() => {
				alert("Created!")
				history.push("/")
			})
			.catch(() => {
				alert("Error")
			})
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="It's great to know you're gonna give lessons."
				description="At first you need to fill out this subscription form"
			/>

			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>About you</legend>

						<Input
							label="Full name"
							name="name"
							value={name}
							onChange={({ target }) => setName(target.value)}
						/>

						<Input
							label="Avatar"
							name="avatar"
							value={avatar}
							onChange={({ target }) => setAvatar(target.value)}
						/>

						<Input
							label="WhatsApp"
							name="whatsapp"
							value={whatsapp}
							onChange={({ target }) => setWhatsapp(target.value)}
						/>

						<Textarea
							label="Bio"
							name="bio"
							value={bio}
							onChange={({ target }) => setBio(target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>The class</legend>

						<Select
							label="Subject"
							name="subject"
							value={subject}
							onChange={({ target }) => setSubject(target.value)}
							options={[
								{ value: "Art", label: "Art" },
								{ value: "Biology", label: "Biology" },
								{ value: "Math", label: "Math" },
								{ value: "Portuguese", label: "Portuguese" },
								{ value: "English", label: "English" },
								{ value: "Geography", label: "Geography" },
								{ value: "History", label: "History" },
								{ value: "Chemistry", label: "Chemistry" }
							]}
						/>

						<Input
							label="Class per hour cost"
							name="cost"
							value={cost}
							onChange={({ target }) => setCost(target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Available time

							<button
								onClick={addNewScheduleItem}
								type="button"
							>
								+ New time
							</button>
						</legend>

						{scheduleItems.map((scheduleItem, index) => (
							<div
								key={scheduleItem.week_day}
								className="schedule-item"
							>
								<Select
									label="Week day"
									name="week_day"
									onChange={({ target }) => setScheduleItemValue(index, "week_day", target.value)}
									options={[
										{ value: "0", label: "Sunday" },
										{ value: "1", label: "Monday" },
										{ value: "2", label: "Tuesday" },
										{ value: "3", label: "Wednesday" },
										{ value: "4", label: "Thursday" },
										{ value: "5", label: "Friday" },
										{ value: "6", label: "Saturday" },
									]}
								/>

								<Input
									type="time"
									name="from"
									label="From"
									onChange={({ target }) => setScheduleItemValue(index, "from", target.value)}
								/>

								<Input
									type="time"
									name="to"
									label="To"
									onChange={({ target }) => setScheduleItemValue(index, "to", target.value)}
								/>
							</div>
						))}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt="warning"/>
							Important! <br />
							Please fill out all fields
						</p>

						<button type="submit">Submit</button>
					</footer>
				</form>
			</main>
		</div>
	)
}

export default TeacherForm
