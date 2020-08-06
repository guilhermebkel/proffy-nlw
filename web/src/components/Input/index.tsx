import React from "react"

import "./styles.css"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label: string
	name: string
}

const Input: React.FC<InputProps> = (props) => {
	const { label, name, ...rest } = props

	return (
		<div className="input-block">
			<label htmlFor={name}>{label}</label>
			<input type="text" id={name} {...rest} />
		</div>
	)
}

export default Input
