import React from 'react'

import './form-input.scss'

const FormInput = ({ handleChange, label, ...other }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...other}></input>
			{label ? (
				<label
					className={`${other.value.lengtb} ? shrink : '' form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default FormInput
