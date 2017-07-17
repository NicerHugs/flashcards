import React from 'react';

import FullImage from './backgrounds/FullImage';

const FlashcardBackground = (props) => {
	const {backgroundType} = props;

	if (backgroundType === 'fullimage') {
		return <FullImage {...props} />
	} else {
		return props.children;
	}
}

export default FlashcardBackground;
