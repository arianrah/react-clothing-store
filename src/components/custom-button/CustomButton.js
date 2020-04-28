import React from 'react'

import './custom-button.scss'

const CustomButton = ({ children, ...other }) => {
	return (
		<button className="custom-button" {...other}>
			{children}
		</button>
	)
}

export default CustomButton
