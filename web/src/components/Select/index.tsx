import React from "react"

import "./styles.css"

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
	label: string
	name: string
	options: Array<{
		value: string
		label: string
	}>
}

const Select: React.FC<SelectProps> = (props) => {
	const { label, name, options, ...rest } = props

	return (
		<div className="select-block">
			<label htmlFor={name}>{label}</label>
			<select
				defaultValue=""
				id={name}
				{...rest}
			>
				<option
					value=""
					disabled
					hidden
				>
					Select an option
				</option>

				{options.map(option => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
