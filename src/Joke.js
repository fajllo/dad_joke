import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    return <div>{this.props.joke}</div>;
  }
}
