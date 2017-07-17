import React from 'react';
import './FullImage.css';

const FullImage = ({content, children}) => {
	const { imgSrc } = content;
	return (
		<div
			className="block-flashcard__fullimage"
			style={{backgroundImage: `url(${imgSrc})`}}>
			{children}
		</div>
	);
}

export default FullImage;
