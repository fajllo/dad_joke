import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class JokeList extends Component {
  static defaultProps = {
    numJokes: 2,
  };
  state = {
    jokes: [],
  };
  async componentDidMount() {
    // load jokes
    let newJokes = [];
    while (newJokes.length < this.props.numJokes) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      newJokes.push(res.data.joke);
    }
    this.setState({ jokes: newJokes });
  }
  render() {
    return (
      <div className="JokeList">
        {this.state.jokes.map(joke => {
          return <Joke key={uuidv4()} joke={joke} />;
        })}
      </div>
    );
  }
}
