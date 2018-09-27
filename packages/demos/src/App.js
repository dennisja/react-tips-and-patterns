import React from 'react';
// demos
import ProviderDemo from './provider'; // for demonstrating provider pattern
import CompoundDemo from './compound';
import RenderPropsDemo from './renderProps';
import HOCsDemo from './components/Recipes';
import ErrorBoundaries from './error-boundaries';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        "Hello World"
        {/* Un comment these for each demo*/}
        {/* <HOCsDemo /> */}
        {/* <ErrorBoundaries /> */}
        {/* <ProviderDemo /> */}
        {/* <CompoundDemo /> */}
        {/* <RenderPropsDemo /> */}
      </div>
    );
  }
}
