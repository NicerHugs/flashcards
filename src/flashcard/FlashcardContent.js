import React from 'react';
import './FlashcardContent.css';

import Heading from './contents/TextHeading';
import Description from './contents/TextDescription';

const FlashcardContent = ({content}) => {
	const {textType, textAlign} = content;
	if (!textType) return null;

	let Content = Description;
	if (textType === 'heading') {
		Content = Heading
	}

	return (
		<div className={`block-flashcard__content block-flashcard__content--${textAlign}`}>
			<Content>
				{content.text}
			</Content>
		</div>
	);
}

export default FlashcardContent;
