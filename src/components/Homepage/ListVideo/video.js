import React from 'react';
import GET_VIDEOS from './query';
import { useQuery } from '@apollo/react-hooks';
import { A } from 'hookrouter';

function Videos({ onVideoSelected }) {
	const { loading, error, data } = useQuery(GET_VIDEOS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<React.Fragment>
			{data.videos.edges.map(video => (
				<div key={video.node.id}>
					<A href="/video">
						<div className="video">
							<p className="video-title">{video.node.title}</p>
							<span className="video-duration">{video.node.duration}</span>
						</div>
					</A>
					<div className="separator"></div>
				</div>
			))};
		</React.Fragment>
	);
}
export default Videos;
