import React, { Component } from 'react';

class SearchBar extends Component {
	constructor (props) {
		// call the parent's constructor function
		super(props);

		// do some other things so we have our own custom functiond
		// the initial state of this component - NEVER change state like this elsewhere
		this.state = { term: '' };
	}
	render() {
		return (
			<div>
				<input
					value = { this.state.term }
					onChange={ event => this.setState({ term: event.target.value}) } />
				<br />
				Value of the input: { this.state.term }
			</div>
		);
	}
}

export default SearchBar;


// Always use this.setState when changing state values

// Control field value is set by state - state should tell the
