import React, { Component } from "react";

export default class Joke extends Component {
  render() {
    return (
      <div className="flex w-full p-2 border m-1  text-indigo-800 rounded-md font-normal">
        <div className="mx-3 text-black text-2xl font-bold  flex  justify-center items-center gap-3  ">
          {" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={this.props.upVote}
          >
            ↑
          </span>
          {this.props.vote}
          <span
            className="text-red-500 cursor-pointer"
            onClick={this.props.downVote}
          >
            ↓
          </span>{" "}
        </div>
        <div className="self-center">{this.props.joke}</div>
      </div>
    );
  }
}
