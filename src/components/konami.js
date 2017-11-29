import React, { Component } from 'react';
import Mousetrap from 'mousetrap';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Mousetrap.bind([`1 2 3 4`, `up up down down left right left right b a`], this.popUp);
  }

  componentWillUnmount() {
    Mousetrap.unbind([`1 2 3 4`, `up up down down left right left right b a`]);
  }

  popUp() {
    alert('The Konami Code happened!');
  }

  render() {
    return (
      <div>
        <input
        <div>Hello, {this.props.name}, this is Konami!</div>
    );
  }
}

export default App;
