import React from "react"

import "./styles.css"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label: string
	name: string
}

const Textarea: React.FC<TextareaProps> = (props) => {
	const { label, name, ...rest } = props

	return (
		<div className="textarea-block">
			<label htmlFor={name}>{label}</label>
			<textarea id={name} {...rest} />
		</div>
	)
}

export default Textarea
