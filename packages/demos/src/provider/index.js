import React, { Component } from 'react';

import { ToastContextProvider } from './context';
import { Container, Header, Logo, Body } from './common';
import sampleToasts from './sampleToasts';
import ToastList from './toast';
import Button from './button';

class ToastMaster extends Component {
  state = {
    toasts: [],
  };

  addToast = toastIndex => {
    this.setState(prevState => ({
      toasts: [...prevState.toasts, sampleToasts[toastIndex]],
    }));
  };

  removeToast = toastIndex => {
    this.setState(prevState => ({
      toasts: prevState.toasts.filter((_, index) => index !== toastIndex),
    }));
  };

  toastContext = {
    addToast: this.addToast,
    removeToast: this.removeToast,
  };

  render() {
    const { toasts } = this.state;
    return (
      <ToastContextProvider value={this.toastContext}>
        <Container>
          {toasts.length > 0 && <ToastList toasts={toasts} />}
          <Header>
            <Logo>Provider Pattern Demo</Logo>
          </Header>
          <Body>
            <Button toastIndex={0}> First Toast</Button>
            <Button toastIndex={1}> Second Toast</Button>
            <Button toastIndex={2}> Third Toast</Button>
            <Button toastIndex={3}> Bonus Toast</Button>
          </Body>
        </Container>
      </ToastContextProvider>
    );
  }
}

export default ToastMaster;
