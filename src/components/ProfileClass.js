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
    console.log("Child - Constructor " + this.props.name)
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arvind79")
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo: json,
    })
    console.log("Child - componentDidMount " + this.props.name)
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate")
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount")
  }

  render() {
    console.log("Child - render " + this.props.name)
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
