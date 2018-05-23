import React, { Component } from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">My Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;