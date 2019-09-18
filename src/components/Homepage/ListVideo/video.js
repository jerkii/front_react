import React from 'react';
import GET_VIDEOS from './query';
import { useQuery } from '@apollo/react-hooks';
import { A } from 'hookrouter';
import Skeleton from 'react-loading-skeleton';

function Videos({ onVideoSelected }) {
	const { loading, error, data } = useQuery(GET_VIDEOS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<React.Fragment>
			{data.videos.map(video => (
				<div key={video.id}>
					<A href={'/video/' + video.id}>
						<div className="video">
							<p className="video-title">{video.title || <Skeleton count={2}/>}</p>
							<span className="video-duration">{video.duration || <Skeleton />}</span>
						</div>
					</A>
					<div className="separator"></div>
				</div>
			))};
		</React.Fragment>
	);
}
export default Videos;
