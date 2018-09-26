import React, { Component } from 'react';

const callAllFunctions = (...funcs) => (...args) =>
  funcs.forEach(func => func && func(...args));

class Toggle extends Component {
  static defaultProps = {
    initialOn: true,
    stateReducer: () => {
      alert('stateReducer not implemented');
    },
  };

  initialState = { on: this.props.initialOn };

  state = this.initialState;

  customSetState = (updates, callback) => {
    const isFunction = typeof updates === 'function';
    this.setState(previousState => {
      const updatesObject = isFunction ? updates(previousState) : updates;
      const reducedChanges = this.props.stateReducer(
        previousState,
        updatesObject,
      );

      return reducedChanges;
    }, callback);
  };

  toggle = () => {
    this.customSetState(
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

  resetState = () => {
    this.customSetState(this.initialState, () => {
      this.props.onReset(this.state.on);
    });
  };

  getTogglerPropsCallAll = ({ onClick, ...props } = {}) => ({
    ...props,
    onClick: callAllFunctions(onClick, this.toggle),
    'aria-expanded': this.state.on,
  });

  getStateAndProps = () => ({
    on: this.state.on,
    // common props that can be passed to components
    getTogglerProps: this.getTogglerProps,
    reset: this.resetState,
  });

  render() {
    return this.props.children(this.getStateAndProps());
  }
}

export default class extends Component {
  static defaultProps = {
    onToggle: (...args) => console.log('onToggle', ...args),
    onReset: (...args) => console.log('onReset', ...args),
  };

  initialState = { timesClicked: 0 };

  state = this.initialState;

  handleToggle = (...args) => {
    this.setState(({ timesClicked }) => ({
      timesClicked: timesClicked + 1,
    }));
    this.props.onToggle(...args);
  };

  handleReset = (...args) => {
    this.setState(this.initialState);
    this.props.onReset(...args);
  };

  toggleStateReducer = (state, changes) => {
    if (this.state.timesClicked >= 4) {
      return { ...changes, on: false };
    }
    return changes;
  };

  render() {
    const { timesClicked } = this.state;
    const exceedsFour = timesClicked > 4;

    return (
      <Toggle
        onToggle={this.handleToggle}
        onReset={this.handleReset}
        stateReducer={this.toggleStateReducer}
      >
        {({ on, getTogglerProps, reset }) => (
          <React.Fragment>
            <input type="checkbox" {...getTogglerProps({ on })} checked={on} />
            {exceedsFour ? (
              <div>Too Many Attempts</div>
            ) : (
              timesClicked > 0 && <div>Clicked: {timesClicked} Times</div>
            )}
            <button onClick={reset}>Reset</button>
          </React.Fragment>
        )}
      </Toggle>
    );
  }
}
import React, { Component } from "react";

const callAllFunctions = (...funcs) => (...args) =>
    funcs.forEach(func => func && func(...args));

class Toggle extends Component {
    state = {
        on: true
    };

    toggle = () => {
        this.setState(
            ({ on }) => ({ on: !on }),
            () => {
                this.props.onToggle(this.state.on);
            }
        );
    };

    getTogglerProps = ({ onClick, ...props } = {}) => ({
        ...props,
        onClick: (...args) => {
            onClick && onClick(...args);
            this.toggle();
        },
        "aria-expanded": this.state.on
    });

    getTogglerPropsCallAll = ({ onClick, ...props } = {}) => ({
        ...props,
        onClick: callAllFunctions(onClick, this.toggle),
        "aria-expanded": this.state.on
    });

    getStateAndProps = () => ({
        on: this.state.on,
        // common props that can be passed to components
        getTogglerProps: this.getTogglerProps
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
                    {...getTogglerProps({ onClick: () => console.log("Hi"), id: "dj" })}
                >
                    {on ? "Uncheck" : "Check"}
                </button>
            </React.Fragment>
        )}
    </Toggle>
);
