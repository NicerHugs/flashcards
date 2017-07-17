import React from 'react';
import './TextHeading.css';

const TextHeading = ({children}) => {
	return (
		<div className="block-flashcard__text-heading">
			{children}
		</div>
	)
}

export default TextHeading;
