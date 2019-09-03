import React from 'react';
import GET_VIDEOS from './query';
import { useQuery } from '@apollo/react-hooks';

function Videos({ onVideoSelected }) {
    const { loading, error, data } = useQuery(GET_VIDEOS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
        <div>
            {console.log(data.videos)};
        </div>
    );
  }
export default Videos;