import React, {useState, useEffect} from 'react';
import User from "./User"

const UserListDisplay = (props) => {
  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com/users"
  const getData = () => {
    return fetch(`${fetchURL}`).then((res) => res.json()).then((error) => error )}

   useEffect(() => {
      getData().then((data) => setData(data))
    }, [])

  return (
    <div>
    	{data?.map((item) => { return <User name={item.name} username={item.username} email={item.email} phone={item.phone} />})}
    </div>
  )
}

export default UserListDisplay;