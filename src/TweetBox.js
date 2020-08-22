import React from 'react';
import "./TweetBox.css"
import { Button } from "@material-ui/core"

function TweetBox() {
  return (
    <div className="tweetBox">
	    <form>
	    	<div className="tweetBoxInput">
	    		<input placeholer="Your Tweet" type="text" />
	    	</div>
	    	<Button variant="contained" color="primary">Tweet</Button>
	    </form>
    </div>
  )
}

export default TweetBox;