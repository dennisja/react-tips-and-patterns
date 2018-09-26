import React from 'react';

const withData = props => Component => {
  class WithData extends React.Component {
    state = {
      loading: true,
      error: null,
      data: null,
    };

    handleError = error => {
      this.setState({ error, loading: false });
    };

    componentDidMount = async () => {
      const data = await props.fetchFunction(this.handleError);
      if (data) {
        this.setState({ data, loading: false });
      }
    };

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  WithData.displayName = `WithData(${getComponentName(Component)})`;

  return WithData;
};

function getComponentName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export { withData };
