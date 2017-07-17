import React, {Component} from 'react';
import './TextDescription.css';

class TextDescription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOverflowing: true
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		const {scrollTop, scrollHeight, clientHeight} = this.refs.description;
		if (scrollHeight - scrollTop === clientHeight) {
			this.setState({isOverflowing: false});
		} else if (this.state.isOverflowing !== true) {
			this.setState({isOverflowing: true});
		}
	}

	render() {
		const {children} = this.props;
		const {isOverflowing} = this.state;
		const overflowLabel = isOverflowing ? '--overflow' : ''

		return (
			<p
				className={`block-flashcard__text-description block-flashcard__text-description${overflowLabel}`}
				onScroll={this.handleScroll}
				ref="description">
				{children}
			</p>
		);
	}
}

export default TextDescription;
