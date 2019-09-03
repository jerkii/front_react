import React from 'react';
import Videos from './video';

class ListVideo extends React.Component{

    render(){
        return(
            <div>
                <div className="video">
                    <Videos />
                    <p className="video-title">Insert Title Here</p>
                    <span className="video-duration">45:30</span>
                </div>
                <div className="separator"></div>
            </div>
        )
    }
}

export default ListVideo;