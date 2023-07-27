import React, { Component } from 'react';
import css from '../../styles.css';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };
  handleSubmit = event => {
    event.preventDefault();
      this.props.onSubmit(this.state.inputValue.trim());
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            inputValue={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
