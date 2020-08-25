import React, {useState, useEffect} from 'react';
import TweetBox from './TweetBox'
import "./Feed.css"
import Post from './Post'

function Feed() {

  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com/posts"

  const getData = () => {
    return fetch(`${fetchURL}`).then((res) => res.json()).then((error) => error )}

   useEffect(() => {
      getData().then((data) => setData(data))
    }, [])
  
  return (
    <div className="feed">
    	<h2 className="feed_header">Feed</h2>
    	<TweetBox />
    	{data?.map((item) => { return <Post name="From Random User"  username="A Random Username" title={item.title} content={item.content} />})}
    </div>
  )
}

export default Feed