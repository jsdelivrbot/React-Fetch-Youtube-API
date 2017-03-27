import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item bg-danger text-white">
			<div className="video-list-media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
			<div className="media-body">
			<div className="media-heading">{video.snippet.title}</div>
			<small className="text-white">{video.snippet.publishedAt}</small>
			</div>
			</div>
		</li>
	);
};

export default VideoListItem;