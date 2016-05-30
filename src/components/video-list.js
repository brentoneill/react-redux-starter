import React from 'react';
import VideoListItem from './video-list-item.js'

const VideoList = (props) =>{
	// iterate over the list of videos and create a constant
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={ props.onVideoSelect }
				key={ video.etag }
				video={ video } />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	);
}

export default VideoList;
