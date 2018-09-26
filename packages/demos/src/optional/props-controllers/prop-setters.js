import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: true,
  };

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      },
    );
  };

  getStateAndProps = () => ({
    on: this.state.on,
    // common props that can be passed to components
    togglerProps: {
      onClick: this.toggle,
      'aria-expanded': this.state.on,
    },
  });

  render() {
    return this.props.children(this.getStateAndProps());
  }
}

export default () => (
  <Toggle onToggle={console.log}>
    {({ on, togglerProps }) => (
      <React.Fragment>
        <input type="checkbox" {...togglerProps} checked={on} />
        <button {...togglerProps}>{on ? 'Uncheck' : 'Check'}</button>
      </React.Fragment>
    )}
  </Toggle>
);
