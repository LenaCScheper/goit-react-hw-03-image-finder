import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    pictureTag: '',
  };

  handleFormSubmit = pictureTag => {
    this.setState({ pictureTag });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureTag={this.state.pictureTag} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
