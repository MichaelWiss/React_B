import React from 'react';
import ReactDOM from 'react-dom';



// create a new component

const App = function() {
	return <div>Hi!</div>;
}


ReactDOM.render(<App />, document.querySelector('.container'));