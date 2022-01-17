import React, { Component } from "react";
import JokeList from "./JokeList";
import axios from "axios";

export default class JokeSidebar extends Component {
  async getNewJoke() {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data.joke;
  }
  render() {
    return (
      <div className="gap-3 bg-gradient-to-b from-violet-700  to-violet-500 w-5/6 lg:h-4/5 lg:w-auto p-2 flex lg:flex-col justify-center items-center font-bold shadow-lg shadow-black rounded-lg">
        <h1 className="text-xl">Get a dad joke!</h1>
        <div className="text-8xl bg-violet-700 p-2 rounded-full shadow-md shadow-black">
          {" "}
          🤣{" "}
        </div>
        <div>
          {" "}
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative  px-5 py-2.5  transition-all  ease-in duration-75 rounded-md group-hover:bg-opacity-0">
              get a new joke
            </span>
          </button>
        </div>
      </div>
    );
  }
}
