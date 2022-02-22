import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    picture: '',
  };

  handleChange = e => {
    this.setState({ picture: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.picture.trim() === '') {
      toast.error('Введите название картинки');
      return;
    }
    this.props.onSubmit(this.state.picture);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
