import React, {useState, useEffect} from 'react';
import TweetBox from './TweetBox'
import "./Feed.css"
import Post from './Post'

function Feed() {

  const [data, setData] = useState(null)
  const fetchURL = "http://localhost:3001/v1/posts"
  const requestOptions = {
        headers: {"token":"ThsV6rtZos_WwVFNusFJ"}
    }
  const getData = () => {
    return fetch(`${fetchURL}`,requestOptions).then((res) => res.json()).then((error) => error )}

   useEffect(() => {
      getData().then((data) => setData(data))
    }, [])
  
  return (
    <div className="feed">
    	<h2 className="feed_header">Feed</h2>
    	<TweetBox />
    	{data?.map((item) => { return <Post name={"From User:"+item.user_id} username="A Random Username" title={item.title} content={item.content} />})}
    </div>
  )
}

export default Feed