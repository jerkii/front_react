import React, { useState } from 'react';
import GET_VIDEO from './query';
import { useQuery } from '@apollo/react-hooks';
import Comments from './Comments'
import Skeleton from 'react-loading-skeleton';
import ReactPlayer from 'react-player';
import Drawer from 'react-drag-drawer';

const VideoPage = ({ id }) => {
	const [toggle, setToggle] = useState(false)

	const videoId = id.id
	const { loading, error, data } = useQuery(GET_VIDEO, {
		variables: { videoId }
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<>
			<div className="player">
				<ReactPlayer
					url={data.video.link}
					controls
					light="true"
					width='100%'
					height="100%"
				/>
			</div>
			<h1 className="videoTitle">{ data.video.title || <Skeleton count={2}/>}</h1>;
			<div className="separator"></div>
			<a href="#" className="drawer" onClick={() => setToggle(true)}><div className="drawer-line"></div></a>
			<Drawer open={toggle} onRequestClose={() => setToggle(false)}>
				<Comments comments={data.video.comments}/>
			</Drawer>
		</>
	);
}

export default VideoPage;
