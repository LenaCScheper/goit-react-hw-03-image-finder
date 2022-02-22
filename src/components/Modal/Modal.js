import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose(e);
    }
  };

  handleBackdropeClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose(e);
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropeClick}>
        <div className="Modal">
          <img src={this.props.picture} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  picture: PropTypes.string,
};

export default Modal;
