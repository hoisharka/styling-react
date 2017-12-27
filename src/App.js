import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.scss';
console.log(styles);
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className={cx('box', 'blue')}>
        <div className={cx('box-inside')}/>
      </div>
    );
  }
}

export default App;