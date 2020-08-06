import React, { useState } from "react"

import PageHeader from "../../components/PageHeader"
import TeacherItem, { Teacher } from "../../components/TeacherItem"
import Input from "../../components/Input"
import Select from "../../components/Select"

import api from "../../services/api"

import "./styles.css"

const TeacherList = () => {
	const [subject, setSubject] = useState("")
	const [weekDay, setWeekDay] = useState("")
	const [time, setTime] = useState("")

	const [teachers, setTeachers] = useState([])

	const searchTeachers = async (event: React.FormEvent) => {
		event.preventDefault()

		const response = await api.get("classes", {
			params: {
				subject,
				week_day: weekDay,
				time
			}
		})

		setTeachers(response.data.classes)
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="These are the available proffys.">
				<form id="search-teachers" onSubmit={searchTeachers}>
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

					<Select
						label="Week day"
						name="week_day"
						value={weekDay}
						onChange={({ target }) => setWeekDay(target.value)}
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
						label="Time"
						name="time"
						value={time}
						onChange={({ target }) => setTime(target.value)}
					/>

					<button type="submit">
						Search
					</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher) => (
					<TeacherItem 
						key={teacher.id}
						teacher={teacher}
					/>
				))}
			</main>
		</div>
	)
}

export default TeacherList
