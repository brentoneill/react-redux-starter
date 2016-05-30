// Get react and import in to this file
import React from 'react';
import ReactDOM from 'react-dom';

// Bring in components
import SearchBar from './components/search-bar.js';

// Youtube API key
const API_KEY = 'AIzaSyDzUR-6xgHZmT6T0Cg4by7O-4VhN3ja0nU';

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
