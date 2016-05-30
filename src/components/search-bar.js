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
			<div className="search-bar">
				<input
					placeholder="Type here to begin searching..."
					value = { this.state.term }
					onChange={ event => this.onInputChange(event.target.value) } />
				<br />
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;


// Always use this.setState when changing state values

// Control field value is set by state - state should tell the
