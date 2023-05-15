import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // API call
    //console.log("useEffect()")
  })
  //console.log("render")

  return (
    <div>
      <h2>Profile Functional Component</h2 >
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => {
        setCount(1)
      }}>Click</button>
    </div>
  )
};

export default Profile