import React, {useState} from 'react';
import "./TweetBox.css"
import { Button } from "@material-ui/core"

function TweetBox() {
  
  const [tweetMessage, setTweetMessage] = useState("")
  
  const sendTweet = (event) => {
  	event.preventDefault();

  	setTweetMessage("")
  }

  return (
    <div className="tweetBox">
	    <form>
	    	<div className="tweetBoxInput">
	    		<input 
		    		placeholder="Your Tweet" 
		    		type="text"
		    		onChange={(event)=>setTweetMessage(event.target.value)}
		    		value={tweetMessage} />
	    	</div>
	    	<Button type="submit" 
	    			variant="contained" 
	    			color="primary"
	    			onClick={sendTweet}>Tweet</Button>
	    </form>
    </div>
  )
}

export default TweetBox;