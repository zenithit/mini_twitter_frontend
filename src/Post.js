import React from 'react';
import "./Post.css"

function Post(props)  {
	
  return (
    <div className="post">
    	<div className="postBody">
    		<div className="postHeader">
    			<div className="postHeaderText">
    				<p>{props.name}</p>
					<span className="postHeaderSpecial">
						@{props.username}
					</span>
    			</div>
    			<div className="postHeaderDescription">
    				{props.content}
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default Post;