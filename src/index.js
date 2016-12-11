require('dotenv').config();

import React from 'react';
import ReactDOM from 'react-dom';



import SearchBar from './components/searchbar';

// create a new component

const App = () => {
	return (
		<div>
		<SearchBar />
        </div>;
        );
}


ReactDOM.render(<App />, document.querySelector('.container'));