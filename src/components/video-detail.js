import React from 'react';

const VideoDetail = ({video}) =>{

	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	// string interpolation / templating es6 syntax V
	const embedUrl = `http://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={embedUrl} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
