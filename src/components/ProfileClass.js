import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    //Create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location"
      }
    }
    // console.log("Child - Constructor " + this.props.name)
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("setInterval in Class")
    }, 1000)

    // console.log("Child - componentDidMount " + this.props.name)
  }

  componentDidUpdate() {
    // console.log("ComponentDidUpdate")
  }

  componentWillUnmount() {
    //to step above timer setInterval, we have to use componentWillUnmount, so that change page stops that
    clearInterval(this.timer)
    console.log("ComponentWillUnmount")
  }

  render() {
    // console.log("Child - render " + this.props.name)
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
