import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props)
    //Create state
    this.state = {
      count: 0,
      count2: 0,
    }
    console.log("Child - Constructor")
  }

  componentDidMount() {
    console.log("Child - componentDidMount")
  }

  render() {
    console.log("Child - render")
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => {
          this.setState({
            count: 1,
          })
        }}>setCount</button>
      </div>
    );
  }
}

export default Profile;
