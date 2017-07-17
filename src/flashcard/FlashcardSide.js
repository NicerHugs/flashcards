import React from 'react';
import './FlashcardSide.css';

import FlashcardBackground from './FlashcardBackground';
import FlashcardContent from './FlashcardContent';

const FlashcardSide = ({data, side, theme, isFirst}) => {

	const {backgroundType, content} = data;

	let flipInstructions = null;
	let style = {};

	if (side === 'front') {
		style.borderTop = `3px solid ${theme.color}`;
	}

	if (side === 'front' && isFirst) {
		flipInstructions = (
			<div className="block-flashcard__instructions">
				Click to flip
			</div>
		);
	}

	return (
		<div className={`block-flashcard__${side}`} style={style}>
			<FlashcardBackground backgroundType={backgroundType} content={content}>
				<FlashcardContent content={content}/>
			</FlashcardBackground>
			{flipInstructions}
		</div>
	);
};

export default FlashcardSide;
