import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // API call
    const timer = setInterval(() => {
      console.log("setInterval in functional component")
    }, 1000)

    console.log("useEffect")

    return () => {
      //this function is called when we are unMounting this Component(means when we are leaving this page)
      clearInterval(timer)

      console.log("useEffect Return")
    }

  })

  console.log("render")

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