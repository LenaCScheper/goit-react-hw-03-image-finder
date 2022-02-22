import Loader from 'react-loader-spinner';
import React, { Component } from 'react';
import style from './Spiner.module.css';

export default class Spiner extends Component {
  //other logic
  render() {
    return (
      <div className={style.spiner}>
        {' '}
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
