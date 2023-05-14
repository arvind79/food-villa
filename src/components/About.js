import { Outlet } from "react-router-dom"
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass"

const About = () => {

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

export default About