import React, {useState, useEffect} from 'react';
import User from "./User"

const DisplayProfile = (props) => {
  
  const [data, setData] = useState({})
  const fetchURL = "https://jsonplaceholder.typicode.com/users/4"
  const getData = () => {
    return fetch(`${fetchURL}`).then((res) => res.json()).then((error) => error )}

   useEffect(() => {
      getData().then((data) => setData(data))
    }, [])

  return (
    <div>
    	<User name={data.name} username={data.username} email={data.email} phone={data.phone} />
    </div>
  )
}

export default DisplayProfile;