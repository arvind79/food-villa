import { Outlet } from "react-router-dom"
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass"
import React from "react"

const About2 = () => {

  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is about the page which user can see to know about this website
      </p>
      <ProfileFunctionalComponent name={"Functional"} />
      <Profile name={"ClassBased"} />
    </div>
  )
}

//converting functional component to class based component
class About extends React.Component {
  constructor(props) {
    super(props)
    console.log("Parent - constructor")
  }

  componentDidMount() {
    //Best Place to make an Api call
    console.log("Parent - componentDidMount")
  }

  render() {
    console.log("Parent - render")
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is about the page which user can see to know about this website
        </p>
        <Profile name={"ClassBased"} />
      </div>
    )
  }
}

export default About