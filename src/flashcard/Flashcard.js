import React, {Component} from 'react';
import './Flashcard.css';

import FlashcardSide from './FlashcardSide';

class Flashcard extends Component {
  constructor(props) {
    super(props)
		this.state = {isFlipped: false}

		this.flip = this.flip.bind(this);
  }

	flip() {
		this.setState({isFlipped: !this.state.isFlipped});
	}

  render() {
		const { data, theme, isFirst } = this.props;

		let className = '';
		if (this.state.isFlipped) className = ' block-flashcard--flipped';

		const cardSides = ['front', 'back'].map((side, i) => {
			return (
				<FlashcardSide
					key={side}
					side={side}
					data={data[side]}
					theme={theme}
					isFirst={isFirst}/>
			);
		});

	  return (
      <div onClick={this.flip} className={`block-flashcard${className}`}>
				<div
					className="block-flashcard__wrapper">
					{cardSides}
				</div>
      </div>
    );
  }
}

export default Flashcard;
