import React from 'react';
import ReactDOM from 'react-dom';

// demos
// import ProviderDemo from './provider'; // for demonstrating provider pattern
// import CompoundDemo from './compound';
// import RenderPropsDemo from './renderProps';
import HOCsDemo from './components/Recipes';

import './styles.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Un comment this for the hocs demo */}
        <HOCsDemo />
        {/* <ProviderDemo /> */}
        {/* <CompoundDemo /> */}
        {/* <RenderPropsDemo /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
