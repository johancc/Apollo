import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Page } from './stories/Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  render() {
    return (
      <Page
        onCreateAccount={() => {
          this.setState({ user: 'Ben Bitdiddle' });
        }}
        onLogin={() => this.setState({ user: 'Ben Bitdiddle' })}
        onLogout={() => this.setState({ user: undefined })}
        {...this.state}
      />
    );
  }
}

export default hot(App);
