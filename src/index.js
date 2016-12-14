import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Config from './components/config';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';


const API_KEY = Config.API_KEY;


YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
})
// create a new component



class App extends Component {
    constructor(props) {
    	super(props);

    	this.state = { videos: [] };
    }

	render() {
	return (
		<div>
		  <SearchBar />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));