import React, {useState} from 'react';
import "./TweetBox.css"
import { Button } from "@material-ui/core"

function TweetBox() {
  
  const [tweetMessage, setTweetMessage] = useState("")
  
  const sendTweet = (event) => {
  	event.preventDefault();

	fetch('http://localhost:3001/v1/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Random Title',
      body: tweetMessage,
      user_id: 4
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "token": "ThsV6rtZos_WwVFNusFJ"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

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