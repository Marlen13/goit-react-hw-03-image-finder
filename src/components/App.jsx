import React, { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
// import css from 'index.css';

export class App extends Component {
  render() {
    return (
    <>
        <SearchBar onSubmit={this.onSubmit} />
    </>
  );
  }
  
};
