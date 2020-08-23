import React, {useState} from 'react';
import TweetBox from './TweetBox'
import "./Feed.css"
import Post from './Post'

function Feed() {

  const[posts, setPosts] = useState([])
  
  return (
    <div className="feed">
    	<h2 className="feed_header">Feed</h2>
    	<TweetBox />
    	<Post 
    		name="A name" 
    		username="sgdtrthhf"
    		content="some paragraph can be bigger" />
    	<Post />
    </div>
  )
}

export default Feed;