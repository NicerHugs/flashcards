import React from 'react';
import './Block.css';

import Flashcard from './flashcard/Flashcard';

const Block = ({theme, payload}) => {
	const cards = payload.cards.map((cardDatum, i) => {
		return (
			<Flashcard key={i} data={cardDatum} theme={theme} isFirst={i === 0}/>
		);
	})
  return (
		<div className="block-flashcards">
			{cards}
		</div>
  );
}

export default Block;
