import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Block from './Block';

import json from './data.json';

const block = (
	<Block
		theme={json.theme}
		payload={json.payload} />
);

ReactDOM.render(block, document.getElementById('root'));
