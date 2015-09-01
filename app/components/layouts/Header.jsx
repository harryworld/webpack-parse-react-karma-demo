import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="row">
        <div className="large-12 small-24 columns">
          <a href='#join' className='button purple small'>Join Beta</a>
        </div>
      </nav>
    );
  }
}