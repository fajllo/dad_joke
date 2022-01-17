import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
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
      newJokes.push({ joke: res.data.joke, vote: 0, id: uuidv4() });
    }
    this.setState({ jokes: newJokes });
  }
  getNewJoke = async () => {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    let newJoke = { joke: res.data.joke, vote: 0, id: uuidv4() };

    this.setState({ jokes: [...this.state.jokes, newJoke] });
  };

  handleVote(id, delta) {
    this.setState(prevSt => {
      jokes: prevSt.jokes.map(joke => {
        return joke.id === id ? console.log(joke.vote + delta) : { ...joke };
      });
    });
    //     this.setState(st => {
    //       jokes: st.jokes.map(j =>
    //         j.id === id ? { ...j, vote: j.vote + delta } : j
    //       );
    //     });
  }
  render() {
    return (
      <div className="flex lg:flex-row flex-col justify-center items-center h-full lg:h-4/5 lg:w-4/5">
        <div className="gap-3 bg-gradient-to-b from-violet-700  to-violet-500 w-5/6 lg:h-4/5 lg:w-auto p-2 flex lg:flex-col justify-center items-center font-bold shadow-lg shadow-black rounded-lg">
          <h1 className="text-xl">Get a dad joke!</h1>
          <div className="text-8xl bg-violet-700 p-2 rounded-full shadow-md shadow-black">
            {" "}
            🤣{" "}
          </div>
          <div>
            {" "}
            <button
              onClick={this.getNewJoke}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative  px-5 py-2.5  transition-all  ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                get a new joke
              </span>
            </button>
          </div>
        </div>
        <div className="JokeList  overflow-auto flex flex-col bg-gradient-to-r p-4 from-pink-400  to-pink-500  w-4/5  h-3/5 lg:h-2/3 m-1 rounded-lg shadow-lg shadow-black ">
          {this.state.jokes.map(joke => {
            return (
              <Joke
                key={joke.id}
                id={joke.id}
                joke={joke.joke}
                vote={joke.vote}
                upVote={() => this.handleVote(joke.id, 1)}
                downVote={() => this.handleVote(joke.id, -1)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
