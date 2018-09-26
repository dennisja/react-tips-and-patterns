import React, { Component } from 'react';

const callAllFunctions = (...funcs) => (...args) =>
  funcs.forEach(func => func && func(...args));

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

  getTogglerProps = ({ onClick, ...props } = {}) => ({
    ...props,
    onClick: (...args) => {
      onClick && onClick(...args);
      this.toggle();
    },
    'aria-expanded': this.state.on,
  });

  getTogglerPropsCallAll = ({ onClick, ...props } = {}) => ({
    ...props,
    onClick: callAllFunctions(onClick, this.toggle),
    'aria-expanded': this.state.on,
  });

  getStateAndProps = () => ({
    on: this.state.on,
    // common props that can be passed to components
    getTogglerProps: this.getTogglerProps,
  });

  render() {
    return this.props.children(this.getStateAndProps());
  }
}

export default () => (
  <Toggle onToggle={console.log}>
    {({ on, getTogglerProps }) => (
      <React.Fragment>
        <input type="checkbox" {...getTogglerProps({ on })} checked={on} />
        <button
          {...getTogglerProps({ onClick: () => console.log('Hi'), id: 'dj' })}
        >
          {on ? 'Uncheck' : 'Check'}
        </button>
      </React.Fragment>
    )}
  </Toggle>
);
