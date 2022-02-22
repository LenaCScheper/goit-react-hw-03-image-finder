import React, { Component } from 'react';
import { getImages } from '../../servises/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import Loader from '../Loader/Spiner';

class ImageGallery extends Component {
  state = {
    pictures: null,
    isHidden: false,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureTag !== this.props.pictureTag) {
      this.setState({ loading: true });
      getImages(this.props.pictureTag, 1)
        .then(pictures =>
          this.setState(prev => ({
            pictures,
            isHidden: true,
            page: prev.page + 1,
          })),
        )
        .catch(err => console.log(err))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onBtnClick = () => {
    this.setState({ loading: true });
    getImages(this.props.pictureTag, this.state.page)
      .then(pictures =>
        this.setState(prev => ({
          pictures: [...prev.pictures, ...pictures],
          isHidden: true,
          page: prev.page + 1,
          loading: true,
        })),
      )
      .catch(err => console.log(err))
      .finally(
        () => this.setState({ loading: false }),
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }),
      );
  };

  render() {
    return (
      <div className="ImageContainer">
        {this.state.loading && <Loader />}
        <ul className="ImageGallery">
          {this.state.pictures && (
            <ImageGalleryItem pictures={this.state.pictures} />
          )}
        </ul>
        {this.state.isHidden && (
          <button type="button" className="Button" onClick={this.onBtnClick}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  pictureTag: PropTypes.string,
};

export default ImageGallery;
