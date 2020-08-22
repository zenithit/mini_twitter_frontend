import React from 'react';
import TweetBox from './TweetBox'
import "./Feed.css"


function Feed() {
  return (
    <div className="feed">
    	<h2 className="feed_header">Feed</h2>
    	<TweetBox />
    </div>
  )
}

export default Feed;