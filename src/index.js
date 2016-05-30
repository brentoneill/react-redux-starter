// Get React and import in to this file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Bring in components
import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';
import VideoDetail from './components/video-detail.js';

// Youtube API key
const API_KEY = 'AIzaSyDzUR-6xgHZmT6T0Cg4by7O-4VhN3ja0nU';


class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedVideo: null,
			videos: []
		};
		this.videoSearch('rock climbing');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({ videos: videos }) - only works when key and property are same string
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={ videoSearch } />
				<VideoDetail video={ this.state.selectedVideo } />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos }/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
